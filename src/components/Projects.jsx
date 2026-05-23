import { useState } from "react";
import { CV } from "../data/cv.js";

export default function Projects({ sectionRef, chipColor }) {
  const [, setHovered] = useState(null);
  return (
    <div ref={sectionRef} className="wrap section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="sec-num reveal">02 — Projects</div>
      <div className="sec-title reveal" style={{ marginBottom: "0.25rem", transitionDelay: "0.1s" }}>
        Things I've<br />shipped.
      </div>
      <div className="proj-list">
        {CV.projects.map((p, i) => (
          <div
            key={i}
            className="proj-row reveal"
            style={{ transitionDelay: `${i * 0.09}s` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="proj-num">{p.num}</div>
            <div className="proj-info">
              <div className="proj-client-tag">{p.client} · {p.year}</div>
              <div className="proj-title">{p.name}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-stacks">
                {p.stack.map((t) => {
                  const { bg, color } = chipColor(t);
                  return (
                    <span className="chip" key={t} style={{ background: bg, color, borderColor: "transparent" }}>
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="proj-arrow">↗</div>
          </div>
        ))}
      </div>
    </div>
  );
}
