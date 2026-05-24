export default function About({ sectionRef }) {
  return (
    <section ref={sectionRef} className="wrap section" aria-label="About">
      <div className="about-grid">
        <div className="about-sticky reveal">
          <div className="sec-num">00 · About</div>
          <h2 className="sec-title">
            The person
            <br />
            behind the
            <br />
            code.
          </h2>
        </div>
        <div>
          <div
            className="about-body reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <p>
              I'm a <strong>Senior Frontend Engineer</strong> open to remote
              work and relocation, with a deep passion for turning complex
              product requirements into clean, fast, and beautiful user
              interfaces. I live at the intersection of design and engineering.
            </p>
            <p>
              From <strong>fintech dashboards</strong> at Holmen Consulting to{" "}
              <strong>real-time video platforms</strong> at Market Master, to{" "}
              <strong>regulated trading interfaces</strong>. I've built
              products that millions of users trust.
            </p>
            <p>
              I believe great frontend engineering isn't just code. It's{" "}
              <strong>empathy, craft, and performance</strong>. Every
              millisecond matters. Every interaction tells a story.
            </p>
          </div>
          <div className="about-cards">
            <div
              className="photo-showcase reveal"
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="photo-showcase-bar" />
              <div className="photo-showcase-body">
                <div className="photo-showcase-top">
                  <div className="photo-showcase-label">◎ &nbsp;Outside the code</div>
                  <a
                    href="https://www.instagram.com/p/CDbcc1LpVMp/?igsh=MnB0NThtaTRzYmZp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="photo-showcase-cta"
                  >
                    View on Instagram ↗
                  </a>
                </div>
                <div className="photo-showcase-title">Conceptual Photographer</div>
                <p className="photo-showcase-desc">
                  I explore ideas through the lens. Light, shadow, and meaning in every frame. Lagos, 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
