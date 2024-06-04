import { useState } from "react";
import { RefreshCw } from 'lucide-react';

export function Gallery() {
  const [principalImg, setPrincipalImg] = useState<number>(0);

  const pictures = [
    "/images/perfil1.avif",
    "/images/perfil2.avif",
    "/images/perfil3.avif"
  ]

  const handleClick = () => {
    setPrincipalImg(principalImg + 1);

    if (principalImg === pictures.length - 1) {
      setPrincipalImg(0);
    }

  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="absolute flex items-center gap-2 left-52 top-0 z-20 bg-chip text-white rounded-full py-2 px-4 border-2 border-unst hover:bg-unst hover:text-chip transition-all duration-300 ease-in-out"
      ><RefreshCw size={18} /> Swop!</button>
      <img
        src={pictures[principalImg]}
        alt="Foto de Pablo Oyarce"
        className="border-4 border-unst z-10 w-56 h-56 aspect-square object-cover rounded-xl -rotate-2"
      />
      <img
        src={pictures[principalImg + 1] || pictures[0]}
        alt="Foto de Pablo Oyarce"
        className="absolute top-4 left-8 rotate-3 -z-10 w-52 h-52 aspect-square object-cover rounded-xl"
      />
    </div>
  )
}