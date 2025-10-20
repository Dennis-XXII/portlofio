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
                <div className="square" aria-label={exp.imgAlt} />
                <div>
                  <h3 className="h3">{exp.title} </h3>
                  <h3> <span style={{fontWeight:400}}>({exp.role})</span></h3>
                  <div style={{textAlign:"left", color:"var(--ink-2)"}}>{exp.years}</div>
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