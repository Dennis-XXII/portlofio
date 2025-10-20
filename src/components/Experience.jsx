import AnimatedSection from "./AnimatedSection";
import { experiences } from "../data";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Experience({ setActive }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => { if (inView) setActive("experience"); }, [inView, setActive]);

  return (
    <section id="experience" ref={ref} className="section">
      <div className="container">
        <h2 className="h2">Experiences</h2>

        <div className="stack-gap">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="media">
                <img src={exp.image} alt={exp.imgAlt} className="square" />
                <div>
                <div className="kv" style={{borderBottom:"none"}}>
                  <h3 className="h3">{exp.title} </h3>
                  <div style={{textAlign:"left", color:"var(--ink-2)"}}>{exp.years}</div>
                </div>
                <span style={{fontWeight:400}}>({exp.role})</span>
                  <p style={{marginTop:10}}>{exp.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}