"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DJTurntableProps {
  /** Number of full rotations over the scroll section (default: 3) */
  rotations?: number;
  /** Additional className for the outer container */
  className?: string;
}

export default function DJTurntable({
  rotations = 3,
  className = "",
}: DJTurntableProps) {
  // Ref for the scrollable section that controls the animation
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this section
  // offset: ["start end", "end start"] means:
  //   - 0 when section top hits viewport bottom
  //   - 1 when section bottom hits viewport top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Convert scroll progress (0-1) to rotation degrees
  // e.g., 3 rotations = 0° to 1080°
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, rotations * 360]
  );

  return (
    // Tall section to give scroll room - adjust height as needed
    <section
      ref={sectionRef}
      className={`relative h-[200vh] ${className}`}
    >
      {/* Sticky container keeps turntable in view while scrolling */}
      <div className="sticky top-0 flex h-screen items-center justify-center">
        {/* Turntable container - controls overall size */}
        <div className="relative w-full max-w-md">
          {/* Aspect ratio wrapper for 1:1 SVG viewBox */}
          <div className="relative w-full pb-[100%]">

            {/* Static deck (buttons, knobs, etc.) */}
            <img
              src="/dj_spin/outside buttons Juno Love.svg"
              alt=""
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            {/* Rotating vinyl - positioned over the deck */}
            {/*
              The vinyl SVG is centered at (539.57, 573.14) in a 1080x1080 viewBox
              That's roughly 50% left, 53% top - adjust these values if alignment is off
            */}
            <motion.img
              src="/dj_spin/Inside circle Juno Love.svg"
              alt="Spinning vinyl record"
              className="absolute inset-0 h-full w-full"
              style={{
                rotate,
                // Transform origin at vinyl center (relative to SVG viewBox)
                // 539.57/1080 ≈ 50%, 573.14/1080 ≈ 53%
                transformOrigin: "50% 53%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
