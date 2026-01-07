"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Bookings() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);

  return (
    <section ref={sectionRef} className="px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Content - Left */}
        <div className="flex flex-col justify-center">
          {/* Meta */}
          {/* Section H2 */}
          <h2 className="mb-6 font-title text-4xl uppercase tracking-tight text-white lg:text-5xl">
            Notable Shows
          </h2>
          {/* Show list */}
          <div className="space-y-6">
            <div>
              <p className="text-base text-white lg:text-lg">Snow Lodge w/ Ben Sterling, Deer Jade, Cloonee</p>
              <p className="text-sm text-white/50">Aspen, USA — 2025 Season Residency</p>
            </div>
            <div>
              <p className="text-base text-white lg:text-lg">Pangea Festival</p>
              <p className="text-sm text-white/50">Cape Town, South Africa — 2025</p>
            </div>
            <div>
              <p className="text-base text-white lg:text-lg">Afrikaburn @Tulpa, Space Cowboys & Enos Nookie</p>
              <p className="text-sm text-white/50">Northern Cape, South Africa — 2024</p>
            </div>
            <div>
              <p className="text-base text-white lg:text-lg">Holi Picnic</p>
              <p className="text-sm text-white/50">Galle, Sri Lanka — 2024</p>
            </div>
          </div>
        </div>

        {/* DJ Turntable - Right */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative w-full pb-[100%]">
              <img
                src="/dj_spin/outside buttons Juno Love.svg"
                alt=""
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              />
              <motion.img
                src="/dj_spin/Inside circle Juno Love.svg"
                alt="Spinning vinyl record"
                className="absolute inset-0 h-full w-full"
                style={{
                  rotate,
                  transformOrigin: "50% 53%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
