import { CV } from "../data/cv.js";

export default function Hero({ typed, go, sectionRef }) {
  return (
    <div ref={sectionRef} className="hero">
      <div className="hero-left">
        <div className="hero-label">
          <span className="hero-label-dot" />
          Senior Frontend Engineer
        </div>
        <h1 className="hero-name">
          China<wbr />gorom<br />
          <span className="it">Owoamanam</span>
        </h1>
        <div className="hero-type">
          {typed}<span className="type-cursor">&nbsp;</span>
        </div>
        <p className="hero-bio">{CV.about}</p>
        <div className="hero-cta">
          <button className="btn-dark" onClick={() => go("hire")}>
            Hire Me →
          </button>
          <button className="btn-outline" onClick={() => go("projects")}>
            See my Work
          </button>
          <a
            href="https://drive.google.com/uc?export=download&id=18BqXsuFQWX6qZ43uhxWztHfm4I3x9Qsv"
            className="btn-cv"
            target="_blank"
            rel="noreferrer"
          >
            <span className="btn-cv-arrow">↓</span>
            <span>Download CV</span>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="avail-badge">
          <span className="avail-dot" />Available for hire
        </div>
        <div className="hero-stats-grid">
          {CV.stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="stat-num"><span className="it">{s.value}</span></div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="hero-scroll">
          <span className="scroll-line" />Scroll to explore
        </div>
      </div>
    </div>
  );
}
