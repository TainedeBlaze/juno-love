"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "bookings@juno-love.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-16 px-6 py-20 lg:scroll-mt-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Meta */}
        <p className="mb-2 text-xs uppercase tracking-wider text-white/50 lg:mb-4 lg:text-sm">
          Bookings & Inquiries
        </p>

        {/* Section H2 */}
        <h2 className="mb-4 font-title text-3xl uppercase tracking-tight text-white lg:mb-8 lg:text-5xl">
          Get in Touch
        </h2>

        {/* Lead */}
        <p className="mb-8 max-w-md text-lg leading-relaxed text-white/80 lg:text-2xl">
          For bookings, collaborations, or just to say hello.
        </p>

        {/* Email buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-base tracking-wide text-white transition-all hover:border-white hover:bg-white hover:text-primary lg:gap-3 lg:px-8 lg:py-4 lg:text-lg"
          >
            <span>{email}</span>
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

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 border border-white/30 px-4 py-3 text-sm tracking-wide text-white/70 transition-all hover:border-white hover:text-white lg:px-6 lg:py-4"
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>


       
      </div>
    </section>
  );
}
