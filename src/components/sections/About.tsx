"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="about" className="px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Bio - Left Side */}
        <div>
          {/* Meta */}
          <div className="mb-4 flex gap-6 text-sm uppercase tracking-wider text-white/50">
            <span><span className="text-white">11</span> Cities</span>
            <span><span className="text-white">3</span> Continents</span>
            <span><span className="text-white">50+</span> Shows</span>
          </div>

          {/* Section H2 */}
          <h2 className="mb-6 font-title text-4xl uppercase tracking-tight text-white lg:text-5xl">
            Artist Bio
          </h2>

          {/* Lead */}
          <p className="mb-6 text-xl leading-relaxed text-white/80 lg:text-2xl">
            A duo rooted in deep passion, shared taste, and a love for the dance floor.
          </p>

          {/* Body */}
          <p className="text-base leading-relaxed text-white/60 lg:text-lg">
            Taine de Buys and Emily Crowe bring vibrant, high-energy house pulling from decades of dance music. They&apos;ve shared lineups with Ben Sterling, LP Giobbi, Deer Jade, and Cloonee. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        {/* Video - Right Side */}
        <div className="relative overflow-hidden">
          <div className="scale-[1.02]">
            <video
              ref={videoRef}
              src="/videos/4.MOV"
              autoPlay
              muted
              loop
              playsInline
              className="block h-auto w-full"
            />
          </div>
          <button
            onClick={toggleMute}
            className="absolute right-4 top-4 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
