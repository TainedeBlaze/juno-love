const services = [
  {
    title: "Private Events",
    description:
      "Weddings, birthdays, and corporate events tailored to your vision.",
  },
  {
    title: "Club Nights",
    description:
      "High-energy sets that keep the dance floor packed all night.",
  },
  {
    title: "Festivals",
    description: "Main stage performances that create lasting memories.",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center font-heading text-3xl tracking-tight text-white sm:text-4xl">
          What We Do
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
