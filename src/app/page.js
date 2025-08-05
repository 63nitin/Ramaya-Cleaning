import Image from "next/image";
import HeroSection from "@/components/Hero";
import Services from "@/components/Service";
import AboutUs from "@/components/About";
import Testimonials from "@/components/Testemonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutUs />
      <Testimonials />

    </div>
  );
}
