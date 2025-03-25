import Testimonials from "./components/Testimonials";
import { convertToIST } from "./components/utils";
import { HeroSection } from "./components/HeroSection";
import Header from "./components/Header";

export const revalidate = 400;

export default function Home() {
  const buildTime = new Date().toISOString();

  console.log("Server Build Time:", convertToIST(buildTime));

  return (
    <>
      <Header />
      <HeroSection />
      <Testimonials />
    </>
  );
}
