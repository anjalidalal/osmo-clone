import React from "react";

import Image from "next/image";
import avatr1 from "./../../public/avatar_1.png";
import avatr2 from "./../../public/avatar_2.png";
import avatr3 from "./../../public/avatar_3.png";
import avatr4 from "./../../public/avatar_4.png";

const testimonials = [
  {
    id: 1,
    name: "Cassie Evans",
    role: "Developer Education - GSAP",
    text: "Even if you know GSAP, it can be tricky to apply abstract animation concepts to real-world scenarios. Dennis and Ilja have come to the rescue with this treasure trove of useful techniques.",
    image: avatr1,
  },
  {
    id: 2,
    name: "Jesper Landberg",
    role: "Creative Developer",
    text: "Osmo Supply is a gem for clever and well-thought-out code/no-code solutions for animations and components. Lama stamp of approval on this one, and I’ll deffo be coming back to it!",
    image: avatr2,
  },
  {
    id: 3,
    name: "Huy (by Huy)",
    role: "Web Designer & Creator",
    text: "Osmo Supply is a gem for clever and well-thought-out code/no-code solutions for animations and components. Lama stamp of approval on this one, and I’ll deffo be coming back to it!",
    image: avatr3,
  },
  {
    id: 4,
    name: "Bimo Tri",
    role: "Developer Education - GSAP",
    text: "Even if you know GSAP, it can be tricky to apply abstract animation concepts to real-world scenarios. Dennis and Ilja have come to the rescue with this treasure-trove of useful techniques.",
    image: avatr4,
  },
];

export default function Testimonials() {
  return (
    <div className="testimonial-container">
      <h1 className="title">
        We built Osmo to help creative developers work smarter, faster, and
        better.
      </h1>
      <p style={{color: "#818180", fontSize: "16px", fontWeight: "500", marginBottom: "20px"}}>Trusted by:</p>
      <section
        className="avatar-swiper"
      >
        {testimonials.map((person, index) => (
          <div key={index} className="avatar-slide">
            <Image
              src={person.image}
              alt={person.name}
              width={50}
              height={50}
              style={{ width: "24px", height: "24px" }}
            />
          </div>
        ))}
      </section>
      <section
        className="testimonial-swiper"
      >
        {testimonials.map((person, index) => (
          <section key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">"{person.text}"</p>
              <div className="testimonial-user">
                <div className="user-avatar">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="user-info">
                  <p className="user-name">{person.name}</p>
                  <p className="user-role">{person.role}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
