//import Testimonials from "./components/Testimonials";
import { convertToIST } from "./components/utils";
import { HeroSection } from "./components/HeroSection";
import Header from "./components/Header";
import OsmoTestimonials from "./components/testimonials/OsmoTestimonials";

export const revalidate = 18000;

export default function Home() {
  const buildTime = new Date().toISOString();

  console.log("Server Build Time:", convertToIST(buildTime));

  return (
    <>
      <Header />
      <HeroSection />
      <OsmoTestimonials />
      {/* <Testimonials /> */}
    </>
  );
}
