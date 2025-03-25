import Image from "next/image";
import avatar from "./../public/avtars.png";
import styles from "./components/styles.module.css";
import Testimonials from "./components/Testimonials";
import {convertToIST} from "./components/utils"

export const revalidate = 400;

const headings = [
  "Start building websites people remember.",
  "Welcome to Osmo Clone!",
  "Rebuilt with Incremental Static Regeneration!",
  "The creative toolkit behind award-winning websites",
];

export default function Home() {
  const buildTime = new Date().toISOString();
  const randomHeading = headings[Math.floor(Math.random() * headings.length)];

  console.log("Server Build Time:", convertToIST(buildTime));

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.heroTitle}>
          {randomHeading}
        </h1>
        <div className={styles.buttons}>
          <button className={styles.primary}>Become a member</button>
          <button className={styles.secondary}>
            <Image src={avatar} alt="Avatar" style={{ objectFit: "cover" }} />
            About us
          </button>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
