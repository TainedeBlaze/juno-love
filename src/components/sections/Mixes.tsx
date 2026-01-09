export default function Mixes() {
  const mixes = [
    {
      title: "Supper Club Mix",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/juno-love-taine-and-emmy/supper-club-live-recording&color=%23367070&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      title: "Fortunate Events",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/juno-love-taine-and-emmy/juno-love-live-fortunate-events&color=%23367070&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
  ];

  return (
    <section id="mixes" className="scroll-mt-20 px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 lg:mb-16">
          {/* Meta */}
          <p className="mb-2 text-xs uppercase tracking-wider text-white/50 lg:mb-4 lg:text-sm">
            Listen now
          </p>

          {/* Section H2 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:gap-8">
            <div>
              <h2 className="font-title text-3xl uppercase tracking-tight text-white lg:text-5xl">
                Recent Mixes
              </h2>
            </div>

            <a
              href="https://soundcloud.com/juno-love-taine-and-emmy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 border border-white/30 px-3 py-1.5 text-xs uppercase tracking-wider text-white/60 transition-colors hover:border-white hover:text-white lg:px-4 lg:py-2 lg:text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689h1v-5.811z"/>
              </svg>
              SoundCloud
            </a>
          </div>
        </div>

        {/* Mixes grid */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {mixes.map((mix) => (
            <div key={mix.title}>
              {/* Body weight for mix titles */}
              <h3 className="mb-2 text-sm uppercase tracking-wider text-white lg:mb-4 lg:text-lg">
                {mix.title}
              </h3>
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  width="100%"
                  height="300"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  src={mix.embedUrl}
                  title={mix.title}
                  style={{ border: "none" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
