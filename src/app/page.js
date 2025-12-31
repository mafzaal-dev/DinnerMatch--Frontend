import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import HowItWorks from "../../components/HowItWorks";
import AboutUs from "../../components/AboutUs";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <AboutUs />
      <FAQ />
      <Footer />
    </main>
  );
}
