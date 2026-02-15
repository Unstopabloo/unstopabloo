<script setup lang="ts">
import { motion, useMotionValue, useScroll, useSpring } from "motion-v";
import { ref, nextTick, onMounted, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    sectionSelector?: string;
  }>(),
  { sectionSelector: "article h2" }
);

const LINE_THICKNESS = 1;
const GAP = 9;
const TOTAL_HEIGHT = LINE_THICKNESS + GAP;

const containerRef = ref<HTMLDivElement | null>(null);
const lineCount = ref(0);
const lineWidths = ref<number[]>([]);
const lineScales = ref<number[]>([]);
const lineOpacities = ref<number[]>([]);
const containerHeight = ref(0);
const sectionElements = ref<HTMLElement[]>([]);

const calculateScale = (distance: number) => {
  const maxScale = 3.5;
  const falloff = 3;
  return 1 + (maxScale - 1) * Math.exp(-(distance * distance) / falloff);
};

const updateScalesAndOpacity = (y: number) => {
  const exactIndex = y / TOTAL_HEIGHT;
  lineScales.value = Array.from({ length: lineCount.value }, (_, i) => {
    const distance = Math.abs(exactIndex - i);
    return distance <= 2.5 ? calculateScale(distance) : 1;
  });
  const activeIndex = Math.round(exactIndex);
  lineOpacities.value = Array.from({ length: lineCount.value }, (_, i) =>
    Math.abs(i - activeIndex) <= 1 ? 1 : 0.4
  );
};

const { scrollYProgress } = useScroll();
const barY = useMotionValue(0);
const barSpring = useSpring(barY, {
  stiffness: 700,
  damping: 60,
  bounce: 0,
});
const barSpringForLines = useSpring(barSpring, {
  visualDuration: 0.1,
  bounce: 0,
});

let scrollUnsub: (() => void) | null = null;
let springUnsub: (() => void) | null = null;
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  const sections = document.querySelectorAll(props.sectionSelector);
  const count = sections.length;

  if (count === 0) return;

  sectionElements.value = Array.from(sections) as HTMLElement[];
  lineCount.value = count;
  lineWidths.value = Array.from({ length: count }, (_, i) =>
    (i + 1) % 5 === 1 ? 20 : 14
  );
  lineScales.value = Array(count).fill(1);
  lineOpacities.value = Array(count).fill(0.4);
  lineOpacities.value[0] = 1;

  const syncBarAndScales = () => {
    nextTick(() => {
      const el = containerRef.value;
      if (!el) return;
      const h = el.offsetHeight;
      if (h > 0) {
        containerHeight.value = h;
        const progress = scrollYProgress.get();
        barY.set(progress * (h - 1));
      }
    });
  };

  nextTick(() => {
    syncBarAndScales();

    scrollUnsub = scrollYProgress.on("change", () => {
      const h = containerHeight.value;
      if (h > 0) {
        barY.set(scrollYProgress.get() * (h - 1));
      }
    });

    springUnsub = barSpringForLines.on("change", (latest: number) => {
      updateScalesAndOpacity(latest);
    });

    resizeObserver = new ResizeObserver(syncBarAndScales);
    if (containerRef.value) {
      resizeObserver.observe(containerRef.value);
    }
  });
});

onUnmounted(() => {
  scrollUnsub?.();
  springUnsub?.();
  resizeObserver?.disconnect();
});

const scrollToSection = (index: number) => {
  const el = sectionElements.value[index];
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const y = e.clientY - rect.top;
  requestAnimationFrame(() => updateScalesAndOpacity(y));
};

const handleMouseLeave = () => {
  requestAnimationFrame(() => {
    const h = containerHeight.value;
    if (h > 0) {
      const y = barSpringForLines.get();
      updateScalesAndOpacity(y);
    } else {
      lineScales.value = Array(lineCount.value).fill(1);
      lineOpacities.value = Array(lineCount.value).fill(0.4);
      lineOpacities.value[0] = 1;
    }
  });
};
</script>

<template>
  <motion.div
    v-if="lineCount > 0"
    ref="containerRef"
    class="minimap"
    :initial="{ opacity: 0, filter: 'blur(4px)' }"
    :animate="{ opacity: 1, filter: 'blur(0px)' }"
    :transition="{ duration: 0.5 }"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="minimap__track">
      <motion.button
        v-for="(width, index) in lineWidths"
        :key="index"
        type="button"
        class="minimap__line"
        :class="{ 'minimap__line--accent': (index + 1) % 5 === 1 }"
        :style="{ width: `${width}px` }"
        :animate="{
          scaleX: lineScales[index] ?? 1,
          opacity: lineOpacities[index] ?? 0.4,
          transformOrigin: '100% 50%',
        }"
        :transition="{ type: 'spring', bounce: 0, duration: 0.3 }"
        :aria-label="`Ir a sección ${index + 1}`"
        @click="scrollToSection(index)"
      />
    </div>
    <motion.div
      v-if="containerHeight > 0"
      class="minimap__marker"
      :style="{ y: barSpring }"
    >
      <svg
        class="minimap__marker-arrow"
        width="8"
        height="10"
        viewBox="0 0 6 7"
      >
        <path d="M0 3.5L5.25 0.5V6.5L0 3.5Z" />
      </svg>
    </motion.div>
  </motion.div>
</template>

<style scoped>
.minimap {
  position: fixed;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  z-index: 10;
  padding: 0.5rem 0;
  pointer-events: auto;
}

@media (max-width: 1024px) {
  .minimap {
    display: none;
  }
}

.minimap__track {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 9px;
}

.minimap__line {
  height: 1px;
  min-width: 4px;
  padding: 1.5px 0;
  border: none;
  background: var(--color-soft-white);
  border-radius: 0;
  cursor: pointer;
  display: block;
}

.minimap__line:hover {
  opacity: 1 !important;
}

.minimap__line--accent {
  /* accent via lineWidths */
}

html[data-theme="light"] .minimap__line {
  background: var(--color-softer-white);
}

.minimap__marker {
  position: absolute;
  right: 0;
  top: 0;
  height: 1px;
  width: calc(100vw - 3rem);
  background: var(--color-primary);
  pointer-events: none;
}

.minimap__marker-arrow {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  margin-right: 8px;
  fill: var(--color-primary);
}
</style>
