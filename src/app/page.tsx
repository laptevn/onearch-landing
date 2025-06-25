import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import MainFeatures from "@/components/landing/main-features";
import Benefits from "@/components/landing/benefits";
import Founder from "@/components/landing/founder";
import Faq from "@/components/landing/faq";
import Cta from "@/components/landing/cta";

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <MainFeatures />
        <Benefits />
        <Founder />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
