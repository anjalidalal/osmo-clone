"use client";
import { useState } from "react";
import Image from "next/image";
import avatar from "./../../public/avtars.png";
import styles from "./styles.module.css";
import VideoCallPopUp from "./VideoCallPopUp";

export const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.heroTitle}>Start building websites people remember.</h1>
        <div className={styles.buttons}>
          <button className={styles.primary} onClick={() => setShowPopup(true)}>
            Join Call
          </button>
          <button className={styles.secondary}>
            <Image src={avatar} alt="Avatar" style={{ objectFit: "cover" }} />
            About us
          </button>
        </div>
      </section>
      <VideoCallPopUp isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
