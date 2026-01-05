export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative z-10 max-w-3xl">
        <h1 className="mb-6 font-heading text-5xl tracking-tight text-white sm:text-7xl">
          Juno Love
        </h1>
        <p className="mb-8 text-xl text-white/70 sm:text-2xl">
          DJ Duo bringing the vibes to your events
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Book Us
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
