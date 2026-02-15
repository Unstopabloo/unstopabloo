import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const GAP = 4;
const LINE_THICKNESS = 2;
const FALLBACK_LINE_COUNT = 5;

const getH2Elements = (): HTMLHeadingElement[] => {
  if (typeof document === "undefined") return [];
  const main = document.querySelector("main");
  const h2s = main ? main.querySelectorAll("h2") : document.querySelectorAll("h2");
  return Array.from(h2s);
};

export const Minimap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const h2ElementsRef = useRef<HTMLHeadingElement[]>([]);
  const [lineCount, setLineCount] = useState(FALLBACK_LINE_COUNT);
  const [lineScales, setLineScales] = useState<number[]>(
    Array(FALLBACK_LINE_COUNT).fill(1),
  );

  const updateH2s = useCallback(() => {
    const elements = getH2Elements();
    h2ElementsRef.current = elements;
    return Math.max(elements.length, 1);
  }, []);
 
  const { scrollYProgress } = useScroll();
 
  const barY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (containerRef.current?.offsetHeight ?? 0) - 1],
  );
 
  const barSpring = useSpring(barY, {
    stiffness: 700,
    damping: 60,
    bounce: 0,
  });
 
  const barSpringForLines = useSpring(barSpring, {
    visualDuration: 0.1,
    bounce: 0,
  });
 
  const calculateScale = (distance: number) => {
    const maxScale = 2;
    const falloff = 3;
    return 1 + (maxScale - 1) * Math.exp(-(distance * distance) / falloff);
  };
 
  const updateScales = useCallback((y: number) => {
    const totalHeight = LINE_THICKNESS + GAP;
    const exactIndex = y / totalHeight;
 
    setLineScales((prev) =>
      prev.map((_, i) => {
        const distance = Math.abs(exactIndex - i);
        return distance <= 2.5 ? calculateScale(distance) : 1;
      }),
    );
  }, []);
 
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    requestAnimationFrame(() => updateScales(y));
  };
 
  const handleMouseLeave = () => {
    requestAnimationFrame(() => setLineScales(Array(lineCount).fill(1)));
  };

  const handleLineClick = (index: number) => {
    const h2 = h2ElementsRef.current[index];
    if (h2) {
      h2.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const count = updateH2s();
    setLineCount(count);
    setLineScales(Array(count).fill(1));
  }, [updateH2s]);

  useEffect(() => {
    const onPageLoad = () => {
      const count = updateH2s();
      setLineCount(count);
      setLineScales(Array(count).fill(1));
    };
    document.addEventListener("astro:page-load", onPageLoad);
    return () => document.removeEventListener("astro:page-load", onPageLoad);
  }, [updateH2s]);

  useEffect(() => {
    const unsub = barSpringForLines.on("change", (latest) => {
      updateScales(latest);
    });
    return () => unsub();
  }, [barSpringForLines, updateScales]);

  const lineWidths = Array(lineCount)
    .fill(null)
    .map((_, i) => ((i + 1) % 5 === 1 ? 20 : 14));
 
  return (
    <div className="size-full flex flex-col items-center justify-center">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, filter: "blur(3px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="fixed left-0 top-0 bottom-0 h-fit my-auto"
      >
        <div className="flex flex-col gap-1.5 items-start pl-10">
          {lineWidths.map((width, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleLineClick(index)}
              className="flex items-center justify-start py-1.5 -my-0.5 cursor-pointer w-full text-left"
              aria-label={`Ir a sección ${index + 1}`}
            >
              <motion.span
                className={`h-px block ${width === 20 ? "bg-softer-white" : "bg-soft-white/70"}`}
                style={{ width }}
                animate={{
                  scaleX: lineScales[index],
                  transformOrigin: "50% 0%",
                }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                }}
              />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
