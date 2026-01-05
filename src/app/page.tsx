import { Hero, About, Services, CTA, Footer } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
