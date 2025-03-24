"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="testimonial-container">
      <h1 className="title">
        We built Osmo to help creative developers work smarter, faster, and
        better.
      </h1>
      <p style={{color: "#818180", fontSize: "16px", fontWeight: "500", marginBottom: "20px"}}>Trusted by:</p>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        autoplay={true}
        loop={true}
        speed={700}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 4 },
        }}
        watchSlidesProgress
        modules={[Thumbs]}
        className="avatar-swiper"
      >
        {testimonials.map((person, index) => (
          <SwiperSlide key={index} className="avatar-slide">
            <Image
              src={person.image}
              alt={person.name}
              width={50}
              height={50}
              style={{ width: "24px", height: "24px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Testimonial Cards */}
      <Swiper
        speed={700}
        modules={[Navigation, Thumbs, Pagination]}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 4 },
        }}
        spaceBetween={30}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="testimonial-swiper"
      >
        {testimonials.map((person, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
