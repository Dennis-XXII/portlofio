import AnimatedSection from "./AnimatedSection";
import { skills, languages } from "../data";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import hobby1 from "/hobby1.jpg";
import hobby2 from "/hobby2.jpg";
import hobby3 from "/hobby3.jpg";
import hobby4 from "/hobby4.jpg";

export default function About({ setActive }) {
  const { ref, inView } = useInView({ threshold: 0.35 });
  const [hoveredCaption, setHoveredCaption] = useState("");

  const trackRef = useRef(null);

  const pauseTrack = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resumeTrack = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  useEffect(() => {
    if (inView) setActive("about");
  }, [inView, setActive]);

  const hobbies = [
    { img: hobby1, caption: "Table Tennis", desc: "I got bronze in Rangsit University Payom Games 2023." },
    { img: hobby2, caption: "Table Tennis", desc: "In the following year, 2025. I got Gold." },
    { img: hobby3, caption: "Travelling", desc: "I also love to travel to various places around me." },
    { img: hobby4, caption: "Khao Yai", desc: "A special place for me with many memories." },
  ];

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        {/* subtle heading */}
        <h2 className="h2" style={{ marginBottom: 24 }}>About</h2>

        {/* Education */}
        <AnimatedSection>
          <h3 className="h3">Education</h3>
          <div className="kv">
            <div>
            <span>High School – B.E.H.S (Blah Blah)</span>
            <p>Remark:</p>
          </div>
          <div style={{ margin: "8px 0 24px" }}>(2016 – 2020)</div>
          </div>

          <div className="kv">
            <div>
            <span>High School – B.E.H.S (Blah Blah)</span>
            <p>Remark:</p>
          </div>
          <div style={{ margin: "8px 0 24px" }}>(2016 – 2020)</div>
          </div>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection delay={0.05}>
          <h3 className="h3" style={{ marginTop: 100 }}>Achievements</h3>
          <div className="kv">
            <div>
            <span>High School – B.E.H.S (Blah Blah)</span>
            <p>Remark:</p>
          </div>
          <div style={{ margin: "8px 0 24px" }}>(2016 – 2020)</div>
          </div>

          <div className="kv">
            <div>
            <span>Bachelor of International Business – Rangsit University</span>
            <p>Remark:</p>
          </div>
          <div style={{ margin: "8px 0 24px" }}>(2016 – 2020)</div>
          </div>
        </AnimatedSection>

        {/* Skills + Languages */}
        <div className="grid grid-2" style={{ marginTop: 100 }}>
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
  <h3 className="h3" style={{ marginTop: 100 }}>Hobbies</h3>

  <div className="carousel-outer" onMouseEnter={pauseTrack} onMouseLeave={resumeTrack} onTouchStart={pauseTrack} onTouchEnd={resumeTrack}>
    <div className="carousel-viewport">
    <div className="carousel-track" ref={trackRef}>
      {/* Duplicate content twice for seamless infinite scroll */}
      {[...hobbies, ...hobbies].map((hobby, i) => (
        <motion.div
          key={i}
          className="carousel-item"
          whileHover={{ scale: 1.005 }}
          transition={{ type: "tween", stiffness: 400, damping: 15 }}
          onMouseEnter={() => setHoveredCaption(hobby.desc)}
          onMouseLeave={() => setHoveredCaption("")}
        >
          <motion.img src={hobby.img} alt={hobby.caption} className="carousel-img"
    whileHover={{ aspectRatio: "3/3.5" }}
    transition={{ type: "tween", stiffness: 250, damping: 15 }}/>
          <p className="carousel-caption">{hobby.caption}</p>
        </motion.div>
      ))}
    </div>
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