import Contributer from "@/components/Contributer";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/ui/TestimonialCards";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWebinar />
        <Contributer />
        <Footer />
      </main>
    </>
  );
}
