import { useState, useEffect, useRef } from "react";

const CV = {
  name: "Chinagorom",
  surname: "Owoamanam",
  initials: "CO",
  title: "Senior Frontend Engineer",
  email: "stephenchinag@gmail.com",
  phone: "+234 916 077 4463",
  location: "Lagos, Nigeria",
  taglines: ["Pixel-perfect interfaces.", "Scalable systems.", "Seamless UX.", "Performance-first code."],
  about:
    "Creative and detail-driven Senior Frontend Engineer with years of experience building responsive, performant, and user-centric applications. Highly skilled in React, Next.js, Tailwind CSS, and modern JavaScript. I turn ideas into impactful digital experiences that users love.",
  stats: [
    { value: "4+", label: "Years" },
    { value: "20+", label: "Projects" },
    { value: "35%", label: "Perf Boost" },
    { value: "6", label: "Companies" },
  ],
  skills: [
    { name: "React.js", level: 98 },
    { name: "Next.js", level: 93 },
    { name: "TypeScript", level: 90 },
    { name: "Redux / Zustand", level: 92 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node / Express", level: 78 },
    { name: "PostgreSQL / MongoDB", level: 72 },
    { name: "Jest / RTL", level: 85 },
  ],
  experience: [
    {
      company: "Kuda",
      role: "Frontend Web Engineer",
      period: "Jul 2025 — Present",
      location: "Nigeria",
      tag: "Neobank",
      bullets: [
        "Built scalable web apps with React.js, TypeScript & Redux at one of Africa's top neobanks.",
        "Translated UI/UX designs into clean, accessible interfaces with zero design debt.",
        "Improved performance via code splitting, lazy loading & micro-frontend architecture.",
      ],
      stack: ["React.js", "TypeScript", "Redux Toolkit", "Context API"],
    },
    {
      company: "Market Master USA",
      role: "Frontend Engineer (Contract)",
      period: "Aug 2024 — Present",
      location: "Maryland, USA · Remote",
      tag: "Video Tech",
      bullets: [
        "Led frontend of a real-time video conferencing app integrating LiveKit.",
        "Designed accessible, responsive UI components optimised for scale.",
        "Maintained high code quality via Jest + React Testing Library suites.",
      ],
      stack: ["React.js", "LiveKit", "Redux Toolkit", "Jest"],
    },
    {
      company: "FARU",
      role: "Senior Frontend Engineer (Contract)",
      period: "Jul 2025",
      location: "Remote",
      tag: "FinTech",
      bullets: [
        "Built regulated fintech trading interfaces to compliance standards.",
        "Emphasised security, real-time data handling, and accessibility.",
        "Contributed to frontend architecture for FinTech scalability.",
      ],
      stack: ["React.js", "TypeScript", "REST APIs"],
    },
    {
      company: "Holmen Consulting",
      role: "Senior Frontend Engineer",
      period: "Jun 2023 — Jun 2025",
      location: "Nigeria",
      tag: "Enterprise",
      bullets: [
        "Achieved 35% improvement in page load times via Next.js SSR.",
        "Architected scalable components for enterprise-grade fintech apps.",
        "Mentored junior developers and led UI across key product modules.",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    },
    {
      company: "Algorism Limited",
      role: "React Developer",
      period: "Feb 2021 — Feb 2023",
      location: "Lagos, Nigeria",
      tag: "Startup",
      bullets: [
        "Reduced code complexity by 25% via Redux architecture overhaul.",
        "Test suites cut bug-related delays by 30%.",
        "New React architecture led to 25% increase in page load speed.",
      ],
      stack: ["React.js", "Redux", "JavaScript", "Jest"],
    },
    {
      company: "Federal Univ. Birnin Kebbi",
      role: "Frontend Developer (Intern)",
      period: "Internship",
      location: "Kebbi, Nigeria",
      tag: "Academic",
      bullets: [
        "Designed responsive web apps with HTML, CSS and JavaScript.",
        "UI/UX implementation achieved 15% uplift in user engagement.",
        "API endpoint testing and backend collaboration via Postman.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "Postman"],
    },
  ],
  projects: [
    {
      name: "Video Conferencing Platform",
      client: "Market Master USA",
      year: "2024",
      desc: "Real-time video conferencing with LiveKit, speech-to-text accessibility, and Redux state management.",
      stack: ["React.js", "LiveKit", "Redux Toolkit", "Jest"],
      num: "01",
    },
    {
      name: "Fintech Trading Interface",
      client: "FARU",
      year: "2025",
      desc: "High-performance contract trading UI built to FinTech compliance standards with real-time API data flow.",
      stack: ["React.js", "TypeScript", "REST APIs"],
      num: "02",
    },
    {
      name: "Enterprise Dashboard",
      client: "Holmen Consulting",
      year: "2024",
      desc: "Scalable enterprise fintech dashboard — 35% faster page loads via Next.js SSR + ASP.NET integration.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      num: "03",
    },
    {
      name: "Component Library System",
      client: "Multiple Companies",
      year: "2023",
      desc: "Production-grade accessible React component library enforcing design system standards at scale.",
      stack: ["React.js", "Storybook", "SCSS", "CSS Modules"],
      num: "04",
    },
  ],
  tools: ["JavaScript ES6+","TypeScript","React.js","Next.js","Express.js","Redux Toolkit","Zustand","Context API","Tailwind CSS","SCSS","Bootstrap","Framer Motion","Radix UI","CSS Modules","Figma","Jest","React Testing Library","Webpack","SSR","SSG","Git","GitHub","REST APIs","PostgreSQL","MongoDB","SQL","Postman","Storybook"],
  certs: ["OCI Oracle Cloud Infrastructure", "ALX Software Engineer"],
};

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [tagIdx, setTagIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [skillsVis, setSkillsVis] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [dark, setDark] = useState(false);
  const refs = useRef({});
  const skillRef = useRef(null);
  const cursorRef = useRef(null);

  // Typewriter with delete
  useEffect(() => {
    const full = CV.taglines[tagIdx];
    let timeout;
    if (!deleting && typed.length < full.length) {
      timeout = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 60);
    } else if (!deleting && typed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 30);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setTagIdx((p) => (p + 1) % CV.taglines.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, tagIdx]);

  // Custom cursor
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        cursorRef.current.style.opacity = "1";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Skills bar observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVis(true); }, { threshold: 0.15 });
    if (skillRef.current) obs.observe(skillRef.current);
    return () => obs.disconnect();
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    const el = refs.current[id];
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" });
  };

  return (
    <div className={`root-wrap${dark ? " dark" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--fg); font-family: 'Cabinet Grotesk', sans-serif; overflow-x: hidden; transition: background 0.3s, color 0.3s; }

        html, html * { cursor: none; }

        /* ── THEME TOKENS ── */
        .root-wrap {
          --bg:        #FAFAF8;
          --bg2:       #F5F5F2;
          --bg3:       #F0F0EC;
          --border:    #E8E8E4;
          --border2:   #D0D0CC;
          --fg:        #111111;
          --fg2:       #555555;
          --fg3:       #888888;
          --fg4:       #CCCCCC;
          --green-bg:  #F0F9F4;
          --green-brd: #C6E8D4;
          --green-fg:  #2A7A4B;
          background: var(--bg);
          color: var(--fg);
          transition: background 0.35s, color 0.35s;
          min-height: 100vh;
        }
        .root-wrap.dark {
          --bg:        #0E0E0E;
          --bg2:       #171717;
          --bg3:       #1E1E1E;
          --border:    #2A2A2A;
          --border2:   #3A3A3A;
          --fg:        #F0EEE8;
          --fg2:       #AAAAA0;
          --fg3:       #666660;
          --fg4:       #333330;
          --green-bg:  rgba(42,122,75,0.12);
          --green-brd: rgba(42,122,75,0.3);
          --green-fg:  #5DB882;
        }

        /* ── CURSOR ── */
        .cursor {
          position: fixed; width: 12px; height: 12px; border-radius: 50%;
          background: var(--fg); pointer-events: none; z-index: 9999;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        /* ── DARK MODE TOGGLE ── */
        .dm-toggle {
          position: fixed; top: 1.25rem; right: 1.5rem; z-index: 300;
          background: var(--bg2); border: 1.5px solid var(--border2);
          cursor: pointer; border-radius: 99px;
          width: 56px; height: 30px;
          transition: border-color 0.3s, background 0.3s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .dm-toggle:hover { border-color: var(--fg3); }
        .dm-track { position: absolute; inset: 3px; border-radius: 99px; }
        .dm-thumb {
          width: 20px; height: 20px; border-radius: 50%; background: var(--fg);
          position: absolute; left: 2px; top: 50%; transform: translateY(-50%);
          transition: left 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.3s;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; line-height: 1; color: var(--bg);
        }
        .dm-thumb.on { left: calc(100% - 22px); }

        /* ── LAYOUT ── */
        .wrap { max-width: 1180px; margin: 0 auto; padding: 0 2.5rem; }
        .section { padding-top: 120px; padding-bottom: 100px; }

        /* ── HERO ── */
        .hero {
          min-height: 100vh; display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
          max-width: 1180px; margin: 0 auto;
        }
        .hero-left {
          padding: 80px 3rem 80px 2.5rem;
          display: flex; flex-direction: column; justify-content: center;
          border-right: 1px solid var(--border);
        }
        .hero-right {
          padding: 80px 2.5rem 80px 3rem;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .hero-label {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.7rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--fg3); margin-bottom: 2.5rem;
        }
        .hero-label-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--fg); flex-shrink: 0; }
        .hero-name {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(2.8rem, 5.5vw, 5.5rem); line-height: 1.0;
          letter-spacing: -0.03em; color: var(--fg);
        }
        .hero-name .it { font-style: italic; color: var(--fg3); }
        .hero-type {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: clamp(1.1rem, 2.2vw, 1.6rem); color: var(--fg3); margin-top: 2rem;
          min-height: 2.2rem; letter-spacing: -0.01em;
        }
        .type-cursor { border-right: 2px solid var(--fg); animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-bio { font-size: 0.95rem; line-height: 1.8; color: var(--fg2); margin-top: 2.5rem; max-width: 420px; }
        .hero-cta { display: flex; gap: 0.75rem; margin-top: 3rem; flex-wrap: wrap; }
        .btn-dark {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: var(--fg); color: var(--bg);
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
          padding: 0.85rem 1.75rem; border-radius: 99px; border: none;
          transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .btn-dark:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: transparent; color: var(--fg);
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
          padding: 0.85rem 1.75rem; border-radius: 99px;
          border: 1.5px solid var(--border2); transition: border-color 0.2s;
        }
        .btn-outline:hover { border-color: var(--fg); }
        .avail-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--green-bg); border: 1px solid var(--green-brd);
          color: var(--green-fg); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 0.4rem 0.9rem; border-radius: 99px; align-self: flex-start;
        }
        .avail-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green-fg); animation: pulse 2s ease infinite; flex-shrink: 0; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .hero-stats-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border: 1px solid var(--border); border-radius: 16px; overflow: hidden;
        }
        .hero-stat { background: var(--bg); padding: 1.75rem; transition: background 0.2s; }
        .hero-stat:hover { background: var(--bg2); }
        .stat-num { font-family: 'Instrument Serif', serif; font-size: clamp(2rem,3.5vw,3rem); line-height: 1; letter-spacing: -0.04em; color: var(--fg); }
        .stat-num .it { font-style: italic; }
        .stat-lbl { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fg3); margin-top: 0.4rem; }
        .hero-scroll { display: flex; align-items: center; gap: 0.75rem; font-size: 0.68rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--fg3); }
        .scroll-line { width: 40px; height: 1px; background: var(--border2); }

        /* ── MARQUEE ── */
        .marquee-wrap { overflow: hidden; padding: 1.25rem 0; background: #111; }
        .marquee-track { display: flex; gap: 3rem; width: max-content; animation: marquee 20s linear infinite; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-item { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 1rem; white-space: nowrap; color: rgba(250,250,248,0.6); }
        .marquee-item strong { color: #FAFAF8; font-style: normal; font-family: 'Cabinet Grotesk', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }

        /* ── ABOUT ── */
        .about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 5rem; align-items: start; }
        .about-sticky { position: sticky; top: 2rem; }
        .sec-num { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--fg3); margin-bottom: 0.75rem; letter-spacing: 0.08em; }
        .sec-title { font-family: 'Instrument Serif', serif; font-size: clamp(2rem,3.5vw,2.8rem); font-style: italic; color: var(--fg); line-height: 1.1; letter-spacing: -0.02em; }
        .about-body { font-size: 1rem; line-height: 1.85; color: var(--fg2); }
        .about-body p + p { margin-top: 1.25rem; }
        .about-body strong { color: var(--fg); font-weight: 700; }
        .about-cards { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
        .about-card {
          background: var(--bg2); border-radius: 12px; padding: 1.1rem 1.25rem;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.2s;
        }
        .about-card:hover { background: var(--bg3); }
        .about-card-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--fg3); margin-bottom: 0.2rem; }
        .about-card-val { font-size: 0.88rem; font-weight: 500; color: var(--fg); }
        .about-card-arrow { color: var(--fg3); font-size: 1.1rem; flex-shrink: 0; }

        /* ── EXPERIENCE ── */
        .work-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3rem; }
        .exp-list { border-top: 1px solid var(--border); }
        .exp-row {
          display: grid; grid-template-columns: 200px 1fr 130px;
          gap: 2rem; padding: 2rem 0; border-bottom: 1px solid var(--border);
          transition: background 0.2s, border-color 0.2s; position: relative;
        }
        .exp-co { font-family: 'Instrument Serif', serif; font-size: 1.2rem; font-style: italic; color: var(--fg); line-height: 1.2; }
        .exp-co-tag { display: inline-block; font-family: 'Cabinet Grotesk', sans-serif; font-style: normal; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: var(--bg3); color: var(--fg3); padding: 0.15rem 0.5rem; border-radius: 99px; margin-top: 0.4rem; }
        .exp-role-title { font-size: 0.82rem; font-weight: 700; color: var(--fg); margin-bottom: 0.6rem; letter-spacing: 0.02em; }
        .exp-period-loc { font-size: 0.72rem; color: var(--fg3); text-align: right; font-family: 'DM Mono', monospace; line-height: 1.6; }
        .exp-blist { list-style: none; display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 0.9rem; }
        .exp-blist li { font-size: 0.84rem; line-height: 1.65; color: var(--fg2); padding-left: 0.9rem; position: relative; }
        .exp-blist li::before { content: '·'; position: absolute; left: 0; color: var(--fg3); }
        .chips { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .chip { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.65rem; border-radius: 99px; border: 1px solid var(--border); color: var(--fg3); background: transparent; }

        /* ── PROJECTS ── */
        .proj-list { margin-top: 2rem; }
        .proj-row {
          display: grid; grid-template-columns: 60px 1fr auto;
          align-items: center; gap: 2rem; padding: 2rem 0;
          border-bottom: 1px solid var(--border);
          transition: background 0.2s, padding 0.2s, border-color 0.2s; position: relative;
        }
        .proj-row:first-child { border-top: 1px solid var(--border); }
        .proj-num { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--fg4); letter-spacing: 0.04em; }
        .proj-client-tag { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--fg3); margin-bottom: 0.35rem; }
        .proj-title { font-family: 'Instrument Serif', serif; font-size: clamp(1.2rem,2.5vw,1.5rem); font-style: italic; color: var(--fg); letter-spacing: -0.01em; margin-bottom: 0.5rem; }
        .proj-desc { font-size: 0.83rem; line-height: 1.65; color: var(--fg3); max-width: 500px; }
        .proj-stacks { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.75rem; }
        .proj-arrow { font-size: 1.5rem; color: var(--fg4); transition: color 0.2s, transform 0.2s; flex-shrink: 0; }

        /* ── SKILLS ── */
        .skills-wrap { background: #111; color: #FAFAF8; }
        .skills-inner { max-width: 1180px; margin: 0 auto; padding: 100px 2.5rem; }
        .skills-top { display: grid; grid-template-columns: 1fr 2fr; gap: 5rem; margin-bottom: 4rem; }
        .skills-sec-title { font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(2rem,3.5vw,2.8rem); color: #FAFAF8; line-height: 1.1; letter-spacing: -0.02em; }
        .skill-rows { display: flex; flex-direction: column; gap: 1.5rem; }
        .skrow { display: flex; flex-direction: column; gap: 0.5rem; }
        .skrow-top { display: flex; justify-content: space-between; }
        .skrow-name { font-size: 0.85rem; font-weight: 500; color: rgba(250,250,248,0.85); }
        .skrow-pct { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: rgba(250,250,248,0.4); }
        .skrow-track { height: 1px; background: rgba(255,255,255,0.1); position: relative; }
        .skrow-fill { position: absolute; inset-y: 0; left: 0; background: #FAFAF8; transform: scaleX(0); transform-origin: left; transition: transform 1s cubic-bezier(0.22,1,0.36,1); }
        .skrow-fill.vis { transform: scaleX(1); }
        .tools-dark { margin-top: 3rem; padding-top: 3rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .tools-dark-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(250,250,248,0.35); margin-bottom: 1.25rem; }
        .tools-cloud { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tool-tag { font-size: 0.73rem; font-weight: 500; padding: 0.35rem 0.85rem; border-radius: 99px; border: 1px solid rgba(255,255,255,0.1); color: rgba(250,250,248,0.5); transition: border-color 0.2s, color 0.2s; }
        .tool-tag:hover { border-color: rgba(255,255,255,0.4); color: rgba(250,250,248,0.9); }

        /* ── CONTACT ── */
        .contact-split { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .contact-big { font-family: 'Instrument Serif', serif; font-size: clamp(2.2rem,4.5vw,4.5rem); line-height: 1.05; letter-spacing: -0.03em; color: var(--fg); }
        .contact-big em { font-style: italic; color: var(--fg3); }
        .contact-sub { font-size: 0.95rem; line-height: 1.8; color: var(--fg2); margin-top: 1.5rem; max-width: 380px; }
        .contact-items { display: flex; flex-direction: column; gap: 0.75rem; }
        .c-item {
          display: flex; align-items: center; gap: 1rem; padding: 1.15rem 1.25rem;
          border: 1px solid var(--border); border-radius: 14px;
          text-decoration: none; color: var(--fg);
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          background: var(--bg);
        }
        .c-item:hover { border-color: var(--fg); transform: translateX(6px); box-shadow: -6px 0 0 var(--fg); }
        .c-icon { width: 38px; height: 38px; border-radius: 10px; background: var(--bg3); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; color: var(--fg); }
        .c-lbl { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--fg3); margin-bottom: 0.15rem; }
        .c-val { font-size: 0.88rem; font-weight: 500; color: var(--fg); word-break: break-all; }
        .c-arr { margin-left: auto; font-size: 1rem; color: var(--fg3); transition: transform 0.2s, color 0.2s; flex-shrink: 0; }
        .c-item:hover .c-arr { transform: translateX(4px); color: var(--fg); }

        /* ── FOOTER ── */
        .footer-bar {
          padding: 1.75rem 2.5rem;
          max-width: 1180px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 0.5rem;
        }
        .footer-l { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 0.9rem; color: var(--fg3); }
        .footer-r { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--fg3); letter-spacing: 0.06em; }

        /* ── HERO ENTRANCE ── */
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-label      { animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .hero-name       { animation: heroIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .hero-type       { animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.28s both; }
        .hero-bio        { animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.38s both; }
        .hero-cta        { animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.48s both; }
        .avail-badge     { animation: heroIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .hero-stats-grid { animation: heroIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.30s both; }
        .hero-scroll     { animation: heroIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.50s both; }

        /* ── SCROLL REVEAL ── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* ── HOVER EFFECTS (mouse-only) ── */
        @media (hover: hover) and (pointer: fine) {
          .exp-row:hover { background: var(--bg2); margin: 0 -1.5rem; padding: 2rem 1.5rem; border-radius: 12px; border-bottom-color: transparent; }
          .exp-row:hover + .exp-row { border-top-color: transparent; }
          .proj-row:hover { padding-left: 1.5rem; padding-right: 1.5rem; margin: 0 -1.5rem; background: var(--bg2); border-radius: 12px; border-color: transparent; }
          .proj-row:hover .proj-arrow { color: var(--fg); transform: translate(4px,-4px); }
        }

        /* ── TABLET (≤1024px) ── */
        @media (max-width: 1024px) {
          .wrap { padding: 0 2rem; }
          .hero-left { padding: 70px 2.5rem 70px 2rem; }
          .hero-right { padding: 70px 2rem 70px 2.5rem; }
          .about-grid { gap: 3rem; }
          .contact-split { gap: 3rem; }
          .skills-top { gap: 3rem; }
          .exp-row { grid-template-columns: 160px 1fr 110px; gap: 1.5rem; }
        }

        /* ── MOBILE (≤768px) ── */
        @media (max-width: 768px) {
          .wrap { padding: 0 1.25rem; }
          .section { padding-top: 80px; padding-bottom: 70px; }

          .dm-toggle { top: 1rem; right: 1rem; }

          /* Hero */
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-left { border-right: none; border-bottom: 1px solid var(--border); padding: 56px 1.25rem 48px; }
          .hero-right { padding: 36px 1.25rem 56px; gap: 2rem; }
          .hero-bio { max-width: 100%; }
          .hero-scroll { display: none; }

          /* About */
          .about-grid { grid-template-columns: 1fr; gap: 2rem; }
          .about-sticky { position: static; }

          /* Experience */
          .exp-row { grid-template-columns: 1fr; gap: 0.75rem; padding: 1.5rem 0; }
          .exp-period-loc { text-align: left; }

          /* Projects */
          .proj-row { grid-template-columns: 40px 1fr; gap: 1.25rem; padding: 1.5rem 0; }
          .proj-arrow { display: none; }

          /* Skills */
          .skills-inner { padding: 70px 1.25rem; }
          .skills-top { grid-template-columns: 1fr; gap: 2rem; margin-bottom: 2.5rem; }

          /* Contact */
          .contact-split { grid-template-columns: 1fr; gap: 2.5rem; }

          /* Footer */
          .footer-bar { padding: 1.5rem 1.25rem; flex-direction: column; align-items: flex-start; gap: 0.35rem; }
        }

        /* ── SMALL PHONES (≤480px) ── */
        @media (max-width: 480px) {
          .wrap { padding: 0 1rem; }
          .section { padding-top: 64px; padding-bottom: 56px; }

          .hero-left { padding: 48px 1rem 40px; }
          .hero-right { padding: 28px 1rem 48px; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr; }
          .hero-cta { flex-direction: column; }
          .btn-dark, .btn-outline { width: 100%; justify-content: center; }

          .about-grid { gap: 1.5rem; }
          .work-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; margin-bottom: 2rem; }

          .exp-row { padding: 1.25rem 0; }
          .proj-row { grid-template-columns: 1fr; gap: 0.75rem; padding: 1.25rem 0; }
          .proj-num { display: none; }

          .skills-inner { padding: 56px 1rem; }

          .contact-split { gap: 2rem; }
          .c-item { padding: 1rem; }
          .c-val { font-size: 0.82rem; }

          .footer-bar { padding: 1.25rem 1rem; }
        }
      `}</style>

      {/* Cursor */}
      <div className="cursor" ref={cursorRef} />

      {/* Dark mode toggle */}
      <button className="dm-toggle" onClick={() => setDark((d) => !d)} aria-label="Toggle dark mode">
        <div className="dm-track">
          <div className={`dm-thumb${dark ? " on" : ""}`}>{dark ? "☾" : "☀"}</div>
        </div>
      </button>

      {/* ── HERO ── */}
      <div ref={(el) => (refs.current["home"] = el)} className="hero">
        <div className="hero-left">
          <div className="hero-label"><span className="hero-label-dot" />Senior Frontend Engineer</div>
          <h1 className="hero-name">
            China<wbr/>gorom<br />
            <span className="it">Owoamanam</span>
          </h1>
          <div className="hero-type">
            {typed}<span className="type-cursor">&nbsp;</span>
          </div>
          <p className="hero-bio">{CV.about}</p>
          <div className="hero-cta">
            <a href={`mailto:${CV.email}`} className="btn-dark">Say Hello →</a>
            <button className="btn-outline" onClick={() => go("projects")}>See my Work</button>
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

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(2)].map((_, pass) =>
            ["React.js","Next.js","TypeScript","Tailwind CSS","Redux","Zustand","Node.js","Jest","Figma","PostgreSQL","MongoDB","LiveKit"].map((t, i) => (
              <div className="marquee-item" key={`${pass}-${i}`}>
                <strong>✦</strong>&nbsp; {t} &nbsp;
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div ref={(el) => (refs.current["about"] = el)} className="wrap section">
        <div className="about-grid">
          <div className="about-sticky reveal">
            <div className="sec-num">00 — About</div>
            <div className="sec-title">The person<br />behind the<br />code.</div>
          </div>
          <div>
            <div className="about-body reveal" style={{ transitionDelay: "0.1s" }}>
              <p>
                I'm a <strong>Senior Frontend Engineer</strong> based in Lagos, Nigeria with a deep passion for turning complex product requirements into clean, fast, and beautiful user interfaces. I live at the intersection of design and engineering.
              </p>
              <p>
                From <strong>fintech dashboards</strong> at Holmen Consulting to <strong>neobanking apps</strong> at Kuda, from <strong>real-time video platforms</strong> to <strong>regulated trading interfaces</strong> — I've built products that millions of users trust.
              </p>
              <p>
                I believe great frontend engineering isn't just code — it's <strong>empathy, craft, and performance</strong>. Every millisecond matters. Every interaction tells a story.
              </p>
            </div>
            <div className="about-cards">
              <div className="about-card reveal" style={{ transitionDelay: "0.15s" }}>
                <div>
                  <div className="about-card-label">Education</div>
                  <div className="about-card-val">BSc Computer Science · Federal University Birnin Kebbi</div>
                </div>
                <div className="about-card-arrow">→</div>
              </div>
              {CV.certs.map((c, ci) => (
                <div className="about-card reveal" key={c} style={{ transitionDelay: `${(ci + 2) * 0.1}s` }}>
                  <div>
                    <div className="about-card-label">Certificate</div>
                    <div className="about-card-val">{c}</div>
                  </div>
                  <div className="about-card-arrow">✓</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WORK ── */}
      <div ref={(el) => (refs.current["work"] = el)} className="wrap section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="work-header reveal">
          <div>
            <div className="sec-num">01 — Experience</div>
            <div className="sec-title">Where I've<br />made an impact.</div>
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
                  {e.stack.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="exp-period-loc">
                <div>{e.period}</div>
                <div style={{ marginTop: "0.25rem" }}>{e.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div ref={(el) => (refs.current["projects"] = el)} className="wrap section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="sec-num reveal">02 — Projects</div>
        <div className="sec-title reveal" style={{ marginBottom: "0.25rem", transitionDelay: "0.1s" }}>Things I've<br />shipped.</div>
        <div className="proj-list">
          {CV.projects.map((p, i) => (
            <div key={i} className="proj-row reveal" style={{ transitionDelay: `${i * 0.09}s` }} onMouseEnter={() => setHoveredProject(i)} onMouseLeave={() => setHoveredProject(null)}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-info">
                <div className="proj-client-tag">{p.client} · {p.year}</div>
                <div className="proj-title">{p.name}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-stacks">
                  {p.stack.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="proj-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div ref={(el) => (refs.current["skills"] = el)} className="skills-wrap">
        <div className="skills-inner" ref={skillRef}>
          <div className="skills-top">
            <div className="reveal">
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250,250,248,0.35)", marginBottom: "0.75rem" }}>03 — Skills</div>
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

      {/* ── CONTACT ── */}
      <div ref={(el) => (refs.current["contact"] = el)} className="wrap section">
        <div className="contact-split">
          <div className="reveal">
            <div className="sec-num">04 — Contact</div>
            <div className="contact-big">
              Let's build<br />something<br /><em>great.</em>
            </div>
            <p className="contact-sub">
              Open to Senior Frontend roles, contract work, and interesting collaborations. If you have a project or opportunity — let's talk.
            </p>
          </div>
          <div className="contact-items">
            <a href={`mailto:${CV.email}`} className="c-item reveal" style={{ transitionDelay: "0.05s" }}>
              <div className="c-icon">✉</div>
              <div><div className="c-lbl">Email</div><div className="c-val">{CV.email}</div></div>
              <div className="c-arr">→</div>
            </a>
            <a href={`tel:${CV.phone.replace(/\s/g,"")}`} className="c-item reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="c-icon">☎</div>
              <div><div className="c-lbl">Phone</div><div className="c-val">{CV.phone}</div></div>
              <div className="c-arr">→</div>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="c-item reveal" style={{ transitionDelay: "0.25s" }}>
              <div className="c-icon" style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.68rem" }}>GH</div>
              <div><div className="c-lbl">GitHub</div><div className="c-val">github.com/chinagorom</div></div>
              <div className="c-arr">→</div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="c-item reveal" style={{ transitionDelay: "0.35s" }}>
              <div className="c-icon" style={{ fontFamily:"'Cabinet Grotesk',sans-serif", fontSize:"0.68rem", fontWeight:700 }}>in</div>
              <div><div className="c-lbl">LinkedIn</div><div className="c-val">linkedin.com/in/chinagorom</div></div>
              <div className="c-arr">→</div>
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="footer-bar reveal">
          <div className="footer-l">Chinagorom Owoamanam — Senior Frontend Engineer</div>
          <div className="footer-r">Lagos, Nigeria 🇳🇬 · © 2026</div>
        </div>
      </div>
    </div>
  );
}
