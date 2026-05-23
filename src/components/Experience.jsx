import { CV } from "../data/cv.js";

export default function Experience({ sectionRef, chipColor }) {
  return (
    <section ref={sectionRef} className="wrap section" aria-label="Experience" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="work-header reveal">
        <div>
          <div className="sec-num">01 · Experience</div>
          <h2 className="sec-title">Where I've<br />made an impact.</h2>
        </div>
      </div>
      <div className="exp-list">
        {CV.experience.map((e, i) => (
          <div className="exp-row reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
            <div>
              <div className="exp-co">{e.company}</div>
              <div className="exp-co-tag">{e.tag}</div>
            </div>
            <div>
              <div className="exp-role-title">{e.role}</div>
              <ul className="exp-blist">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="chips">
                {e.stack.map((t) => {
                  const { bg, color } = chipColor(t);
                  return (
                    <span className="chip" key={t} style={{ background: bg, color, borderColor: "transparent" }}>
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="exp-period-loc">
              <div>{e.period}</div>
              <div style={{ marginTop: "0.25rem" }}>{e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
