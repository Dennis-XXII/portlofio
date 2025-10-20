import AnimatedSection from "./AnimatedSection";
import { skills, languages } from "../data";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import hobby1 from "/hobby1.jpg";
import hobby2 from "/hobby2.jpg";
import hobby3 from "/hobby3.jpg";
import hobby4 from "/hobby4.jpg";

export default function About({ setActive }) {
  const { ref, inView } = useInView({ threshold: 0.35 });
  const controls = useAnimation();
  const [hoveredCaption, setHoveredCaption] = useState("");

  useEffect(() => {
    if (inView) setActive("about");
  }, [inView, setActive]);

  const hobbies = [
    { img: hobby1, caption: "Photography", desc: "Capturing moments with light and emotion." },
    { img: hobby2, caption: "Cooking", desc: "Experimenting with flavors and plating aesthetics." },
    { img: hobby3, caption: "Gaming", desc: "Immersed in worlds of strategy and creativity." },
    { img: hobby4, caption: "Travel", desc: "Exploring cultures, architecture, and hidden gems." },
  ];

  const extended = [...hobbies, ...hobbies, ...hobbies];

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        {/* subtle heading */}
        <h2 className="h2" style={{ marginBottom: 24 }}>About</h2>

        {/* Education */}
        <AnimatedSection>
          <h3 className="h3">Education</h3>
          <div className="kv">
            <div>High School – B.E.H.S (Blah Blah)</div>
            <div>(2016 – 2020)</div>
          </div>
          <div style={{ margin: "8px 0 24px" }}>Remark:</div>

          <div className="kv">
            <div>Bachelor of International Business – Rangsit University</div>
            <div>(2022 – 2025)</div>
          </div>
          <div style={{ margin: "8px 0 24px" }}>Remark:</div>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection delay={0.05}>
          <h3 className="h3" style={{ marginTop: 36 }}>Achievements</h3>
          <div className="kv">
            <div>High School – B.E.H.S (Blah Blah)</div>
            <div>(2016 – 2020)</div>
          </div>
          <div style={{ margin: "8px 0 24px" }}>Remark:</div>

          <div className="kv">
            <div>Bachelor of International Business – Rangsit University</div>
            <div>(2022 – 2025)</div>
          </div>
          <div style={{ margin: "8px 0 24px" }}>Remark:</div>
        </AnimatedSection>

        {/* Skills + Languages */}
        <div className="grid grid-2" style={{ marginTop: 36 }}>
          <AnimatedSection>
            <h3 className="h3">Skills</h3>
            <ul className="ul">
              {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <h3 className="h3">Languages</h3>
            <ul className="ul">
              {languages.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.12}>
  <h3 className="h2" style={{ marginTop: 40 }}>Hobbies</h3>

  <div className="carousel-container">
    <div
      className="carousel-track"
      onMouseEnter={() => document.querySelector(".carousel-track").style.animationPlayState = "paused"}
      onMouseLeave={() => document.querySelector(".carousel-track").style.animationPlayState = "running"}
    >
      {[...hobbies, ...hobbies, ...hobbies].map((hobby, i) => (
        <motion.div
          key={i}
          className="carousel-item"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onMouseEnter={() => setHoveredCaption(hobby.desc)}
          onMouseLeave={() => setHoveredCaption("")}
        >
          <img src={hobby.img} alt={hobby.caption} className="carousel-img" />
          <p className="carousel-caption">{hobby.caption}</p>
        </motion.div>
      ))}
    </div>

    <div className="carousel-description-bar">
      {hoveredCaption && <p>{hoveredCaption}</p>}
    </div>
  </div>
</AnimatedSection>
      </div>
    </section>
  );
}