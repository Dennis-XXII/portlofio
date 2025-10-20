import AnimatedSection from "./AnimatedSection";
import { skills, languages, education, achievements} from "../data";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { hobbies } from "../data.js";

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


  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        {/* subtle heading */}
        <h2 className="h2" style={{ marginBottom: 24 }}>About</h2>

        {/* Education */}
        <h3 className="h3">Education</h3>
        {education.map((edu, i) => (
        <AnimatedSection key={i} delay={i*0.08}>
          <div className="kv">
            <div>
            <p className="headerP">{edu.degree} – {edu.institution}</p>
            <p >Remark: {edu.remarks}</p>
          </div>
          <div>{edu.years}</div>
          </div>
        </AnimatedSection>
        ))}

        {/* achievements */}
        <h3 className="h3" style={{marginTop:"100px"}}>Achievements</h3>
        {achievements.map((ach, i) => (
        <AnimatedSection key={i} delay={i*0.08}>
          <div className="kv">
            <div>
            <p className="headerP">{ach.title}</p>
            <p >{ach.description}</p>
          </div>
          <div>{ach.year}</div>
          </div>
        </AnimatedSection>
        ))}

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