import { CV } from "../data/cv.js";

export default function Contact({ sectionRef }) {
  return (
    <section ref={sectionRef} className="wrap section" aria-label="Contact">
      <div className="contact-split">
        <div className="reveal">
          <div className="sec-num">04 · Contact</div>
          <h2 className="contact-big">Let's build<br />something<br /><em>great.</em></h2>
          <p className="contact-sub">
            Open to Senior Frontend roles, contract work, and interesting collaborations. If you have a project or opportunity, let's talk.
          </p>
        </div>
        <div className="contact-items">
          <a href={`mailto:${CV.email}`} className="c-item reveal" style={{ transitionDelay: "0.05s" }}>
            <div className="c-icon">✉</div>
            <div><div className="c-lbl">Email</div><div className="c-val">{CV.email}</div></div>
            <div className="c-arr">→</div>
          </a>
          <a href={`tel:${CV.phone.replace(/\s/g, "")}`} className="c-item reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="c-icon">☎</div>
            <div><div className="c-lbl">Phone</div><div className="c-val">{CV.phone}</div></div>
            <div className="c-arr">→</div>
          </a>
          <a href="https://github.com/stephenChinag" target="_blank" rel="noreferrer" className="c-item reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="c-icon" style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.68rem" }}>GH</div>
            <div><div className="c-lbl">GitHub</div><div className="c-val">github.com/chinagorom</div></div>
            <div className="c-arr">→</div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="c-item reveal" style={{ transitionDelay: "0.35s" }}>
            <div className="c-icon" style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: "0.68rem", fontWeight: 700 }}>in</div>
            <div><div className="c-lbl">LinkedIn</div><div className="c-val">linkedin.com/in/chinagorom</div></div>
            <div className="c-arr">→</div>
          </a>
        </div>
      </div>
    </section>
  );
}
