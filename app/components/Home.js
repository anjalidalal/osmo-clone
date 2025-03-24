import styles from "./styles.module.css";
import avatar from "./../../public/avtars.png"
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heroTitle}>Start building websites people remember.</h1>
      <div className={styles.buttons}>
        <button className={styles.primary}>Become a member</button>
        <button className={styles.secondary}>
          <Image src={avatar} alt="Avatar" style={{objectFit: "cover"}} />
          About us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
