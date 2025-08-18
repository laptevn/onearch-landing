import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Testimonials from "@/components/landing/testimonials";
import Features from "@/components/landing/features";
import MainFeatures from "@/components/landing/main-features";
import Benefits from "@/components/landing/benefits";
import DemoVideo from "@/components/landing/demo-video";
import Founder from "@/components/landing/founder";
import Faq from "@/components/landing/faq";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Testimonials />
        <Features />
        <MainFeatures />
        <Benefits />
        <DemoVideo />
        <Founder />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
