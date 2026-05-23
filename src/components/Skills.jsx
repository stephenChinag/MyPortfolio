const CATEGORIES = [
  { label: "Languages",       color: "#a78bfa", rgb: "167,139,250", tags: ["JavaScript ES6+", "TypeScript"] },
  { label: "Frameworks",      color: "#60a5fa", rgb: "96,165,250",  tags: ["React.js", "Next.js", "Express.js"] },
  { label: "State",           color: "#34d399", rgb: "52,211,153",  tags: ["Redux Toolkit", "Zustand", "Context API"] },
  { label: "Styling",         color: "#f472b6", rgb: "244,114,182", tags: ["Tailwind CSS", "SCSS", "Bootstrap", "Framer Motion", "Radix UI", "CSS Modules"] },
  { label: "Testing & QA",    color: "#fbbf24", rgb: "251,191,36",  tags: ["Jest", "React Testing Library", "Postman", "Storybook"] },
  { label: "Build & Tooling", color: "#fb923c", rgb: "251,146,60",  tags: ["Webpack", "SSR", "SSG", "Git", "GitHub", "Figma"] },
  { label: "Data & APIs",     color: "#38bdf8", rgb: "56,189,248",  tags: ["REST APIs", "PostgreSQL", "MongoDB", "SQL"] },
];

export default function Skills({ sectionRef }) {
  return (
    <section ref={sectionRef} className="skills-wrap" aria-label="Skills">
      <div className="skills-inner">
        <div className="skills-header reveal">
          <div className="skills-header-num">03 · Skills</div>
          <h2 className="skills-header-title">The Stack.</h2>
          <p className="skills-header-desc">
            Every tool I've used to build, test, and ship production software.
          </p>
        </div>
        <div className="tech-grid reveal" style={{ transitionDelay: "0.12s" }}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="tech-cat-card"
              style={{ "--cat-color": cat.color, "--cat-rgb": cat.rgb }}
            >
              <div className="tech-cat-label">
                <span className="tech-cat-dot" />
                {cat.label}
              </div>
              <div className="tech-cat-tags">
                {cat.tags.map((t) => (
                  <span key={t} className="tech-cat-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
