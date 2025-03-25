import Image from "next/image";
import styles from "./styles.module.css";

const testimonials = [
  {
    id: 1,
    name: "Nicola Romei",
    role: "Developer Education - GSAP",
    feedback:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6783a0aec9a42a48f43d9321_avatar-nicola.avif",
  },
  {
    id: 2,
    name: "Jason Harvey",
    role: "Creative Developer",
    feedback:
      "Osmo is full of awesome (and easy to use) interactions that save so much time. They’re visually powerful but also robust, and the best thing is, it’s only going to get better as more even resources get added! Oh and it doesn’t hurt that the dashboard looks sick too.",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6783a10a476c5bccbe81904a_avatar-jason.avif",
  },
  {
    id: 3,
    name: "Flayks",
    role: "Web Designer & Creator",
    feedback:
      "Osmo Supply is a gem for clever and well-thought-out code/no-code solutions for animations and components. Lama stamp of approval on this one, and I’ll deffo be coming back to it!",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6783a0df9eec5d3a505f4f98_avatar-flayks.avif",
  },
  {
    id: 4,
    name: "Huy (by Huy)",
    role: "Developer Education - GSAP",
    feedback:
      "One of a kind platform for any developers out there. It's incredible to be able to see and learn how the pros implement their animations. If you love web animations and creative development, this platform this a no brainer—just sign up already.",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6783a09b5ee17587313b233f_avatar-huy.avif",
  },
  {
    id: 5,
    name: "Cassie Evans",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/67855eafecb30f50080eed23_cassie-square.avif",
    role: "Digital Designer",
    feedback:
      "Even if you know GSAP, it can be tricky to apply abstract animation concepts to real-world scenarios. Dennis and Ilja have come to the rescue with this treasure-trove of useful techniques. There’s something for everyone here, grab-and-go or use the code as a jumping off point. This gets the official GSAP stamp of approval.",
  },
  {
    id: 6,
    name: "Jesper Landberg",
    role: "Somefolk",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6785136cdeca199d875404fc_avatar-jesper.avif",
    feedback:
      "Osmo Supply is a gem for clever and well-thought-out code/no-code solutions for animations and components. Even I came across a few neat tricks I hadn’t seen before. It’s a resource both beginners and seasoned pros will find incredibly useful. Lama stamp of approval on this one, and I’ll deffo be coming back to it!",
  },
  {
    id: 7,
    name: "Jordan Gilroy",
    role: "Creative Developer",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6783a0524abfb70a07a94438_avatar-jordan.avif",
    feedback:
      "The creative developer's cheat code. Osmo is a one-stop shop, offering everything from snippets to help you set up your site to advanced animations and interactions that elevate it to the next level. The resources are so easy to implement, and with some imagination, you can adapt them to create something unique.",
  },
  {
    id: 8,
    name: "Erwin Luijendijk",
    role: "Digital Designer",
    feedback:
      "Even if you know GSAP, it can be tricky to apply abstract animation concepts to real-world scenarios. Dennis and Ilja have come to the rescue with this treasure-trove of useful techniques. There’s something for everyone here, grab-and-go or use the code as a jumping off point. This gets the official GSAP stamp of approval.",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6783a062df79162cd72c1cf8_avatar-erwin.avif",
  },
  {
    id: 9,
    name: "Bimo Tri",
    role: "Digital Designer",
    feedback:
      "Even if you know GSAP, it can be tricky to apply abstract animation concepts to real-world scenarios. Dennis and Ilja have come to the rescue with this treasure-trove of useful techniques. There’s something for everyone here, grab-and-go or use the code as a jumping off point. This gets the official GSAP stamp of approval.",
    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/6783a0d3775c4bdf9c69ef50_avatar-bimo.avif",
  },
  {
    id: 10,
    name: "Dylan Brouwer",
    role: "Digital Designer",
    feedback:
      "Even if you know GSAP, it can be tricky to apply abstract animation concepts to real-world scenarios. Dennis and Ilja have come to the rescue with this treasure-trove of useful techniques. There’s something for everyone here, grab-and-go or use the code as a jumping off point. This gets the official GSAP stamp of approval.",

    img: "https://cdn.prod.website-files.com/673ca620b98035f221528ad1/67839d2f3846acf48375bb7b_avatar-dylan.avif",
  },
];

const OsmoTestimonials = () => {
  const inlineStyles = {
    display: "block",
    textAlign: "center",
    position: "relative",
    transform: "translate(0px, 0px)",
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.containerSmall}>
            <h3 className="hMedium srOnly">
              <div className={styles.singleLineWrap}>
                <div className={styles.singleLine} style={{ inlineStyles }}>
                  We built Osmo to help{" "}
                </div>
              </div>
              <div className={styles.singleLineWrap}>
                <div className={styles.singleLine} style={{ inlineStyles }}>
                  creative developers work{" "}
                </div>
              </div>
              <div className={styles.singleLineWrap}>
                <div className={styles.singleLine} style={{ inlineStyles }}>
                  smarter, faster, and better.
                </div>
              </div>
            </h3>
          </div>
          <div className="divider testimonials"></div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25em" }}
          >
            <p
              style={{
                color: "#818180",
                margin: 0,
                fontSize: "12.3778px",
              }}
            >
              Trusted by:
            </p>
            <div className={styles.trustedNavList}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.trustedNavListItem}>
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={25}
                    height={25}
                    className={styles.avatar}
                  />
                  <p className={styles.avatarTag}>{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.testimonialList}>
          <div className={styles.testimonialRowList}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item w-dyn-item" key={index}>
                <div data-slider="slide" className="testimonial-slide">
                  <p
                    className={styles.feedback}
                    style={{ touchAction: "pan-y" }}
                  >
                    {testimonial.feedback}
                  </p>
                  <div className={styles.details}>
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={34}
                      height={34}
                      className={styles.feedbackUser}
                    />
                    <div className={styles.bio}>
                      <h4 className={styles.name}>{testimonial.name}</h4>
                      <p className={styles.role}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OsmoTestimonials;
