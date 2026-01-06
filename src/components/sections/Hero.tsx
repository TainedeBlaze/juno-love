import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto grid h-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* Hero Image - Left */}
        <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-2xl lg:max-w-none">
          <Image
            src="/Hero.png"
            alt="Juno Love DJ Duo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content - Right */}
        <div className="flex flex-col justify-center">
          {/* Meta */}
          <p className="mb-4 text-sm uppercase tracking-wider text-white/50">
            London-based DJ duo
          </p>

          {/* Display */}
          <h1 className="mb-6 font-title text-5xl uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
            Juno Love
          </h1>

          {/* Lead */}
          <p className="mb-8 max-w-md text-xl leading-relaxed text-white/80 lg:text-2xl">
            Five years behind the decks. At home in intimate bars or on open-air stages.
          </p>

          {/* Body */}
          <p className="mb-10 max-w-md text-base leading-relaxed text-white/60 lg:text-lg">
            At the heart of it is love for each other, and love for house music. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#mixes"
              className="bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-white/90"
            >
              Listen
            </a>
            <a
              href="mailto:bookings@juno-love.com"
              className="border border-white/30 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white hover:text-primary"
            >
              Bookings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
