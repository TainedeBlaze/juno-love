export default function CTA() {
  return (
    <section className="bg-white/5 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 font-heading text-3xl tracking-tight text-white sm:text-4xl">
          Ready to make your event unforgettable?
        </h2>
        <p className="mb-8 text-lg text-white/70">
          Get in touch and let&apos;s create something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
