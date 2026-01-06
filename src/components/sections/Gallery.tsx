"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Row 1 (top row)
const row1Images = [  
  "/image_carousel/IMG_2623.JPG",
 
  "/image_carousel/IMG_7892.jpg",
  "/image_carousel/middletop.JPG",
  "/image_carousel/Snow Lodge-119 3.JPEG",
  "/image_carousel/IMG_2621.JPG",
];

// Row 2 (bottom row)
const row2Images = [
  "/image_carousel/bottomleft.JPG",
  "/image_carousel/bottom middle.JPG",
  "/image_carousel/duo.JPG",
  "/image_carousel/b48a5b8a-1df6-4baa-98d6-36552affae62.JPG",
  "/image_carousel/IMG_2613.JPG",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      const current = -start;
      const progress = Math.max(0, Math.min(1, current / total));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1Transform = `translateX(${-scrollProgress * 200}px)`;
  const row2Transform = `translateX(${-200 + scrollProgress * 200}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary py-12 lg:py-20"
    >
      {/* Gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-primary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-primary to-transparent" />

      {/* Row 1 - moves left on scroll */}
      <div
        className="mb-3 flex items-center gap-3 will-change-transform lg:mb-4 lg:gap-4"
        style={{ transform: row1Transform }}
      >
        {[...row1Images, ...row1Images].map((src, index) => (
          <Image
            key={`row1-${index}`}
            src={src}
            alt="Juno Love performance"
            height={288}
            width={500}
            className="h-48 w-auto shrink-0 lg:h-72"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        ))}
      </div>

      {/* Row 2 - moves right on scroll */}
      <div
        className="flex items-center gap-3 will-change-transform lg:gap-4"
        style={{ transform: row2Transform }}
      >
        {[...row2Images, ...row2Images].map((src, index) => (
          <Image
            key={`row2-${index}`}
            src={src}
            alt="Juno Love performance"
            height={288}
            width={500}
            className="h-48 w-auto shrink-0 lg:h-72"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        ))}
      </div>
    </section>
  );
}
