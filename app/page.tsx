import AboutUs from "@/components/aboutUs/page";
import ContactUs from "@/components/contactUs/page";
import FAQ from "@/components/faq/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import HeroSection from "@/components/heroSection/page";
import Programs from "@/components/programs/page";
import WhyUs from "@/components/whyUs/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Header />
      <HeroSection />
      <AboutUs />
      <WhyUs />
      <Programs />
      <ContactUs />
      <FAQ />
      <Footer />
    </main>
  );
}
