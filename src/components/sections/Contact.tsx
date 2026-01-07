export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Meta */}
        <p className="mb-4 text-sm uppercase tracking-wider text-white/50">
          Bookings & Inquiries
        </p>

        {/* Section H2 */}
        <h2 className="mb-6 font-title text-4xl uppercase tracking-tight text-white lg:text-5xl">
          Get in Touch
        </h2>

        {/* Lead */}
        <p className="mb-8 max-w-md text-xl leading-relaxed text-white/80 lg:text-2xl">
          For bookings, collaborations, or just to say hello.
        </p>

        <a
          href="mailto:junolove.bookings@gmail.com"
          className="group inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-lg tracking-wide text-white transition-all hover:border-white hover:bg-white hover:text-primary"
        >
          <span>bookings@juno-love.com</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
