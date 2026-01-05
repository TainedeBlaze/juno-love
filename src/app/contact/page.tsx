import Footer from "@/components/sections/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-white/70">
            Have an event coming up? Want to collaborate? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-xl">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="eventType"
                className="mb-2 block text-sm font-medium text-white"
              >
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <option value="" className="bg-primary">
                  Select an event type
                </option>
                <option value="wedding" className="bg-primary">
                  Wedding
                </option>
                <option value="birthday" className="bg-primary">
                  Birthday Party
                </option>
                <option value="corporate" className="bg-primary">
                  Corporate Event
                </option>
                <option value="club" className="bg-primary">
                  Club Night
                </option>
                <option value="festival" className="bg-primary">
                  Festival
                </option>
                <option value="other" className="bg-primary">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-white"
              >
                Event Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Tell us about your event..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="border-t border-white/10 bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-heading text-2xl text-white">
            Other Ways to Reach Us
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="mailto:hello@junolove.com"
              className="text-white/70 transition-colors hover:text-white"
            >
              hello@junolove.com
            </a>
            <a
              href="https://instagram.com/junolove"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              @junolove
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
