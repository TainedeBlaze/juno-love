import { Hero, Gallery, About, Bookings, Mixes, Contact, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <About />
      <Bookings />
      <Mixes />
      <Contact />
      <Footer />
    </main>
  );
}
