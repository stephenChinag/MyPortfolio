import { CV } from "../data/cv.js";

export default function Skills({ sectionRef, skillRef, skillsVis }) {
  return (
    <div ref={sectionRef} className="skills-wrap">
      <div className="skills-inner" ref={skillRef}>
        <div className="skills-top">
          <div className="reveal">
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250,250,248,0.35)", marginBottom: "0.75rem" }}>
              03 — Skills
            </div>
            <div className="skills-sec-title">My craft,<br />by the<br />numbers.</div>
          </div>
          <div className="skill-rows reveal" style={{ transitionDelay: "0.15s" }}>
            {CV.skills.map((s, i) => (
              <div className="skrow" key={s.name}>
                <div className="skrow-top">
                  <span className="skrow-name">{s.name}</span>
                  <span className="skrow-pct">{s.level}%</span>
                </div>
                <div className="skrow-track">
                  <div
                    className={`skrow-fill${skillsVis ? " vis" : ""}`}
                    style={{ width: `${s.level}%`, transitionDelay: `${i * 90}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tools-dark reveal" style={{ transitionDelay: "0.1s" }}>
          <div className="tools-dark-label">All tools & technologies</div>
          <div className="tools-cloud">
            {CV.tools.map((t) => <span className="tool-tag" key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
