import HeroSection from "./components/Home";
import Testimonials from "./components/Testimonials";

export async function generateStaticParams() {
  const serverBuildTime = new Date().toISOString();
  console.log("Server build time:", serverBuildTime);

  return {
    props: { serverBuildTime },
    revalidate: 18000,
  };
}

export default function Home({ serverBuildTime }) {
  console.log("Server build time:", serverBuildTime);
  return (
    <>
      {" "}
      <HeroSection />
      <Testimonials />
    </>
  );
}
