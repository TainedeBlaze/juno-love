"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
    <section id="about" className="scroll-mt-24 px-6 py-20 lg:scroll-mt-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-8">
        {/* Bio - Left Side */}
        <div>
          {/* Meta */}
          <div className="mb-2 flex gap-4 text-xs uppercase tracking-wider text-white/50 lg:mb-4 lg:gap-6 lg:text-sm">
            <span><span className="text-white">11</span> Cities</span>
            <span><span className="text-white">3</span> Continents</span>
            <span><span className="text-white">50+</span> Shows</span>
          </div>

          {/* Section H2 */}
          <h2 className="mb-4 font-title text-3xl uppercase tracking-tight text-white lg:mb-4 lg:text-5xl">
            Artist Bio
          </h2>

          {/* Body */}
          <p className="text-sm leading-relaxed text-white/60 lg:text-base">
          What began as an impromptu B2B has grown into Juno Love - a creative project between couple Taine de Buys and Emily Crowe. Since then, the duo has shared lineups with industry leaders such as Ben Sterling, LP Giobbi, and Deer Jade.
          </p>

          <p className="text-sm leading-relaxed text-white/60 lg:text-base mt-2">
          Juno Love brings a vibrant blend of fun, high-energy house, with sets that pull from across decades of dance music. Their dynamic behind the decks reflects their connection off them - rooted in deep passion, shared taste, and a love for the dance floor. Wherever these two are, they draw on years of experience and curation to create memorable moments on any dance floor.
          </p>
        </div>

        {/* Video - Right Side */}
        <div className="relative overflow-hidden">
          {/* Loading skeleton */}
          {isLoading && (
            <div className="absolute inset-0 z-10 animate-pulse bg-white/10">
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-white/60" />
              </div>
            </div>
          )}
          <div className="scale-[1.02]">
            <video
              ref={videoRef}
              src="/videos/4-optimized.mp4"
              autoPlay
              muted
              loop
              playsInline
              className={`block h-auto w-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
              onCanPlayThrough={() => setIsLoading(false)}
              onLoadedData={() => setIsLoading(false)}
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
