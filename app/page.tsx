import Header from "@/components/header/page";
import HeroSection from "@/components/heroSection/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* Header */}
      {/* <div
        style={{
          background: `url(/bg2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
      <Header />
      <HeroSection />
      {/* </div> */}
    </main>
  );
}
