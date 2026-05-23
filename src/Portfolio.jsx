import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import { chipColor } from "./utils/chipColor.js";
import { CV } from "./data/cv.js";
import BotanicalPanel from "./components/BotanicalPanel.jsx";
import BackgroundText from "./components/BackgroundText.jsx";
import DarkToggle from "./components/DarkToggle.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import HireForm from "./components/HireForm.jsx";
import Footer from "./components/Footer.jsx";

// ── EmailJS config (keys live in .env.local) ──
// Still needed: set VITE_EJS_SERVICE and VITE_EJS_TEMPLATE in .env.local
// after creating your service and template at https://emailjs.com
const EJS_SERVICE = import.meta.env.VITE_EJS_SERVICE;
const EJS_TEMPLATE = import.meta.env.VITE_EJS_TEMPLATE;
const EJS_KEY = import.meta.env.VITE_EJS_PUBLIC_KEY;

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [tagIdx, setTagIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [dark, setDark] = useState(false);
  const [ripples, setRipples] = useState([]);
  const refs = useRef({});
  const cursorRef = useRef(null);

  // Typewriter
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


  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHire = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(false);
    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          from_name: form.name,
          from_company: form.company,
          from_email: form.email,
          budget: form.budget,
          message: form.message,
        },
        EJS_KEY,
      );
      setFormSent(true);
      setForm({ name: "", company: "", email: "", budget: "", message: "" });
      setTimeout(() => setFormSent(false), 6000);
    } catch {
      setFormError(true);
      setTimeout(() => setFormError(false), 5000);
    } finally {
      setFormLoading(false);
    }
  };

  const go = (id) => {
    const el = refs.current[id];
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" });
  };

  const getChipColor = (name) => chipColor(name, dark);

  const handleClick = (e) => {
    const id = Date.now() + Math.random();
    setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setRipples((r) => r.filter((rip) => rip.id !== id)), 750);
  };

  return (
    <div className={`root-wrap${dark ? " dark" : ""}`} onClick={handleClick}>
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />
      <div className="bg-glow">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
        <div className="glow-orb glow-orb-4" />
        <div className="glow-orb glow-orb-5" />
      </div>
      <div className="bg-grid" />
      <BackgroundText />
      <div className="bg-art">
        <BotanicalPanel />
        <BotanicalPanel mirrored />
      </div>
      {ripples.map((r) => (
        <div key={r.id} className="click-ripple" style={{ left: r.x, top: r.y }} />
      ))}
      <div className="cursor" ref={cursorRef} />
      <DarkToggle dark={dark} setDark={setDark} />
      <main>
        <Hero
          typed={typed}
          go={go}
          sectionRef={(el) => (refs.current["home"] = el)}
        />
        <Marquee />
        <About sectionRef={(el) => (refs.current["about"] = el)} />
        <Experience
          sectionRef={(el) => (refs.current["work"] = el)}
          chipColor={getChipColor}
        />
        <Projects
          sectionRef={(el) => (refs.current["projects"] = el)}
          chipColor={getChipColor}
        />
        <Skills sectionRef={(el) => (refs.current["skills"] = el)} />
        <Contact sectionRef={(el) => (refs.current["contact"] = el)} />
        <HireForm
          sectionRef={(el) => (refs.current["hire"] = el)}
          form={form}
          setForm={setForm}
          formSent={formSent}
          formLoading={formLoading}
          formError={formError}
          onSubmit={handleHire}
        />
      </main>
      <Footer />
    </div>
  );
}
