import Header from "@/components/header/page";
import HeroSection from "@/components/heroSection/page";
import WhyUs from "@/components/whyUs/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* Header */}
      <Header />
      <HeroSection />
      <WhyUs />
    </main>
  );
}
