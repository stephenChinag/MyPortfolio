import React, { useState, useEffect } from "react";
import {
  CalendarCheck, DoorOpen, ShieldCheck, MessageCircle, LineChart,
  ClipboardCheck, ArrowRight, Globe2, KeyRound, UtensilsCrossed,
  Users, Lock, Percent, Smartphone, Waves, ChevronDown,
  Star, CheckCircle, Clock, Award, Wifi, Coffee, Car, TreePine,
  Building2, FileText, Target, TrendingUp, Zap, BarChart3, Bell,
  CreditCard, MapPin, Shield,
} from "lucide-react";

const C = {
  ink: "#0f1f16", inkSoft: "#172a1e", cream: "#f7f2e8",
  creamSoft: "#ede6d4", text: "#1a2e1f", textSoft: "#4a5c45",
  onDark: "#f0ead8", onDarkSoft: "#b8c8ae", brass: "#c49a3c",
  clay: "#a04030", sage: "#5a7a5c", green: "#2d6a4f",
  accent: "#e8b84b",
};

const FONTS = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap";

// Nigerian/African hotel & landscape photos
const IMG = {
  hero: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1800&q=85&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1566073771259-470a39aade3a?w=900&q=80&auto=format&fit=crop",
  room1: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&auto=format&fit=crop",
  room2: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80&auto=format&fit=crop",
  room3: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80&auto=format&fit=crop",
  dining: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop",
  pool: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80&auto=format&fit=crop",
  lobby: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=700&q=80&auto=format&fit=crop",
  exterior: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80&auto=format&fit=crop",
  g1: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&auto=format&fit=crop",
  g2: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80&auto=format&fit=crop",
  g3: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80&auto=format&fit=crop",
  g4: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80&auto=format&fit=crop",
};

function Mark({ size = 28, color = C.brass }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M4 10 C4 20 14 16 14 26 C14 34 24 34 24 26 C24 18 34 22 34 12"
        stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const Kicker = ({ children, dark }) => (
  <div style={{
    fontFamily: "'Inter',sans-serif", fontSize: 10.5, letterSpacing: 3.5,
    textTransform: "uppercase", fontWeight: 700,
    color: dark ? C.brass : C.clay, marginBottom: 14,
  }}>{children}</div>
);

const H = ({ children, dark, size = 42, tag = "h2", style }) => {
  const Tag = tag;
  return (
    <Tag style={{
      fontFamily: "'Fraunces',serif", fontWeight: 400,
      fontSize: size, lineHeight: 1.1,
      color: dark ? C.onDark : C.text, margin: "0 0 18px", ...style,
    }}>{children}</Tag>
  );
};

const P = ({ children, dark, style }) => (
  <p style={{
    fontFamily: "'Inter',sans-serif", fontSize: 15, lineHeight: 1.82,
    color: dark ? C.onDarkSoft : C.textSoft, margin: "0 0 16px", ...style,
  }}>{children}</p>
);

const Wrap = ({ children, style }) => (
  <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px", ...style }}>{children}</div>
);

const Bar = ({ color = C.brass, center }) => (
  <div style={{ width: 52, height: 3, background: color, marginBottom: 28, ...(center ? { margin: "0 auto 28px" } : {}) }} />
);

const Tag = ({ children, color = C.brass }) => (
  <span style={{
    fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600,
    background: `${color}18`, color, border: `1px solid ${color}40`,
    borderRadius: 20, padding: "4px 14px", letterSpacing: 0.3,
  }}>{children}</span>
);

export default function OxbowProposal() {
  const [scrolled, setScrolled] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const rooms = [
    {
      name: "Deluxe King Room", price: "₦85,000", img: IMG.room1, tag: "Most Popular",
      desc: "A well-appointed king room with warm earth tones, premium Nigerian fabrics and a city view that captures Lagos at its most beautiful — day and night.",
      perks: ["King bed", "City view", "Smart TV", "Mini bar", "Rainfall shower", "Complimentary breakfast"],
    },
    {
      name: "Executive Suite", price: "₦165,000", img: IMG.room2, tag: "Best Value",
      desc: "Generous living space with a separate lounge, a private dining area and a master bathroom finished in Eko marble. Ideal for extended stays or business travel.",
      perks: ["Super-king bed", "Separate lounge", "Eko marble bath", "Kitchenette", "Premium minibar", "Butler service"],
    },
    {
      name: "Presidential Suite", price: "₦340,000", img: IMG.room3, tag: "Signature",
      desc: "Our finest offering. Two floors, panoramic views of Lagos Lagoon, a private pool terrace, home cinema and a dedicated 24-hour butler. For guests who expect nothing less than the best.",
      perks: ["Private pool terrace", "Two-floor layout", "Home cinema", "24hr butler", "Lagoon panorama", "Private dining"],
    },
  ];

  const problems = [
    { icon: Clock, title: "Manual booking process", text: "Reservations handled over phone and WhatsApp lead to double-bookings, lost enquiries and frustrated guests who can't book at 2am." },
    { icon: FileText, title: "Paper-based accounting", text: "Revenue figures are reconciled manually at month-end. Errors surface late, discrepancies are hard to trace and audit trails don't exist." },
    { icon: Users, title: "No role-based controls", text: "Every staff member uses the same systems with the same access. There's no separation between front desk, management and accounting." },
    { icon: BarChart3, title: "Zero visibility on performance", text: "Occupancy rates, revenue per room and guest satisfaction data live in separate places — or nowhere at all." },
  ];

  const coreFeatures = [
    { icon: CalendarCheck, title: "Online Booking Engine", text: "A fully branded booking website with real-time availability, room photography, pricing tiers and secure card payment. Guests book in under 3 minutes — without calling." },
    { icon: DoorOpen, title: "Front Desk Management", text: "Digital check-in and check-out with automatic room status updates, housekeeping alerts and a live arrivals dashboard. Your desk team always knows exactly what's happening." },
    { icon: ClipboardCheck, title: "Accounting & Audit", text: "Every transaction is logged automatically and reconciled daily against payment records. Month-end becomes a review, not a rescue mission. Full audit trail always available." },
    { icon: ShieldCheck, title: "Role-based Access Control", text: "Granular permissions for every role — owner, general manager, front desk, housekeeping, accountant, restaurant manager. Each person sees only what their job requires." },
    { icon: MessageCircle, title: "AI Guest Chat", text: "An intelligent assistant that answers questions, handles room requests, processes complaints and assists with bookings — 24 hours a day in English, Pidgin and other languages." },
    { icon: LineChart, title: "Live Reporting Dashboard", text: "Occupancy rates, RevPAR, ADR, revenue by room type, staff performance and guest satisfaction — all on a single screen, updated in real time, accessible from any device." },
  ];

  const extras = [
    { icon: Globe2, title: "OTA Channel Manager", text: "Auto-syncs availability with Booking.com, Expedia, Airbnb and Jumia Travel. One update, everywhere." },
    { icon: Percent, title: "Dynamic Rate Pricing", text: "Intelligent pricing engine that adjusts room rates based on demand, seasonality and competitor rates." },
    { icon: Smartphone, title: "Guest Mobile App", text: "Guests can check in, request services, order room service and checkout — all from their phone." },
    { icon: KeyRound, title: "Multi-currency Billing", text: "Accept payment in Naira, USD and GBP. Automatic exchange rate handling for international guests." },
    { icon: UtensilsCrossed, title: "Restaurant & Bar POS", text: "Food and beverage charges post directly to guest folios. One bill at checkout, zero manual entry." },
    { icon: Bell, title: "Housekeeping Workflow", text: "Digital task assignment, room status tracking and inspection sign-off from any mobile device." },
    { icon: CreditCard, title: "POS & Payment Gateway", text: "Flutterwave and Paystack integration for seamless Naira payments, card and transfer." },
    { icon: Shield, title: "NDPR Compliance", text: "Built to meet Nigeria Data Protection Regulation requirements. Guest data is encrypted and protected." },
  ];

  const techStack = [
    { label: "Guest Booking Site", sub: "React JS · Next.js", desc: "Fast, SEO-optimised booking website that works on any device. Loads in under 2 seconds even on 3G." },
    { label: "Staff Dashboard", sub: "React JS · PWA", desc: "A progressive web app that works offline. Front desk and housekeeping can use it on any phone or tablet." },
    { label: "API & Business Logic", sub: "Node.js · Express", desc: "A secure REST API handling all reservations, payments, audit logs and user authentication." },
    { label: "Database", sub: "PostgreSQL · Encrypted", desc: "Bank-grade encrypted database with automated daily backups and point-in-time recovery." },
  ];

  const timeline = [
    { t: "Discovery & Design", w: "Week 1–2", d: "Full requirements workshop with your team. We map every room type, rate plan, staff role and workflow before writing a single line of code. Wireframes and designs submitted for sign-off.", icon: Target },
    { t: "Booking Website & Engine", w: "Week 3–5", d: "We build the guest-facing booking website with live availability calendar, room photography integration, pricing rules and Paystack/Flutterwave payment processing.", icon: Globe2 },
    { t: "Front Desk & Room Management", w: "Week 5–7", d: "Check-in/check-out flow, housekeeping module, room status board and arrivals dashboard. Your front desk team reviews and tests this phase before we move on.", icon: DoorOpen },
    { t: "Accounting, Audit & Access Control", w: "Week 8–9", d: "Full accounting module with daily reconciliation, audit logs and financial reporting. Role-based permissions configured for every staff level.", icon: ClipboardCheck },
    { t: "AI Chat, Channel Manager & Extras", w: "Week 10–11", d: "AI guest assistant trained on your hotel's services and FAQs. OTA channel manager connected. Restaurant POS link and mobile app delivered.", icon: MessageCircle },
    { t: "Training, Testing & Go-Live", w: "Week 12", d: "Full staff training sessions for each role. UAT with your team. Final QA sweep, data migration from existing records, and go-live with on-site support.", icon: Award },
  ];

  const deliverables = [
    "Branded guest booking website with mobile app",
    "Front desk management system",
    "Real-time reporting dashboard",
    "Accounting module with daily audit",
    "AI-powered guest chat assistant",
    "OTA channel manager integration",
    "Restaurant & bar POS integration",
    "Role-based staff access for all levels",
    "Paystack & Flutterwave payment gateway",
    "NDPR-compliant data infrastructure",
    "30-day post-launch support",
    "Full staff training for every role",
  ];

  const whyUs = [
    { icon: Award, a: "Dedicated project team", b: "One project manager and one lead developer from kickoff to launch — one number to call, always." },
    { icon: Zap, a: "Phased, visible delivery", b: "Working software at the end of every phase. You review and approve before we move forward." },
    { icon: Users, a: "Staff training included", b: "Role-specific training sessions for owners, managers, front desk, housekeeping and accounting." },
    { icon: Shield, a: "30-day post-launch support", b: "Bug fixes, adjustments and guidance covered for a full month after go-live at no extra cost." },
    { icon: TrendingUp, a: "Built to scale", b: "The architecture supports multiple properties, hundreds of rooms and thousands of reservations." },
    { icon: MapPin, a: "Nigerian market expertise", b: "Built specifically for the Nigerian hospitality market — Naira billing, Paystack, NDPR and local OTAs." },
  ];

  const navLinks = [
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#rooms", label: "Rooms" },
    { href: "#timeline", label: "Timeline" },
    { href: "#investment", label: "Investment" },
  ];

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", background: C.cream, color: C.text, cursor: "default" }}>
      <link rel="stylesheet" href={FONTS} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? "rgba(15,31,22,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}>
        <Wrap style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px" }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", cursor: "pointer" }}>
            <Mark size={24} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11.5, letterSpacing: 2.5, color: C.onDarkSoft, textTransform: "uppercase", fontWeight: 600 }}>
              Oxbow Lake Hotel · Project Proposal
            </span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500,
                color: C.onDarkSoft, textDecoration: "none", cursor: "pointer", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = C.brass}
                onMouseLeave={e => e.currentTarget.style.color = C.onDarkSoft}
              >{l.label}</a>
            ))}
          </div>
        </Wrap>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <img src={IMG.hero} alt="Oxbow Lake Hotel" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,31,22,0.6) 0%, rgba(15,31,22,0.78) 50%, rgba(15,31,22,0.95) 100%)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "100px 32px 60px" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32, background: "rgba(196,154,60,0.15)", border: "1px solid rgba(196,154,60,0.35)", borderRadius: 24, padding: "8px 20px" }}>
            <Building2 size={14} color={C.brass} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, letterSpacing: 3, color: C.brass, textTransform: "uppercase", fontWeight: 700 }}>Hotel Management System · Proposal 2026</span>
          </div>

          <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: "clamp(48px, 9vw, 92px)", lineHeight: 1.06, color: C.onDark, margin: "0 0 12px", maxWidth: 820 }}>
            Oxbow Lake Hotel
          </h1>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: "clamp(22px, 4vw, 38px)", lineHeight: 1.2, color: C.brass, margin: "0 0 32px" }}>
            A complete digital management system
          </h2>
          <P dark style={{ fontSize: 17, maxWidth: 580, margin: "0 auto 52px" }}>
            A detailed proposal for transforming hotel operations through a single, integrated platform — covering bookings, front desk, accounting, guest experience and reporting.
          </P>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#problem" style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: C.brass, color: "#fff",
              textDecoration: "none", padding: "15px 36px", borderRadius: 8,
              fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer",
            }}>Read the proposal <ArrowRight size={17} /></a>
            <a href="#timeline" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.22)",
              color: C.onDark, textDecoration: "none", padding: "15px 36px", borderRadius: 8,
              fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer",
            }}>View timeline</a>
          </div>

          <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: C.onDarkSoft, letterSpacing: 2, textTransform: "uppercase" }}>Scroll to explore</span>
            <ChevronDown size={18} color={C.brass} style={{ animation: "bounce 1.8s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* PROPOSAL OVERVIEW STRIP */}
      <div style={{ background: C.green, padding: "0 32px" }}>
        <Wrap style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: "0 0" }}>
          {[
            { label: "Prepared for", value: "Oxbow Lake Hotel" },
            { label: "Project type", value: "Hotel Management System" },
            { label: "Timeline", value: "12 Weeks" },
            { label: "Location", value: "Lagos, Nigeria" },
            { label: "Date", value: "July 2026" },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: "22px 0", flex: 1, textAlign: "center",
              borderRight: i < 4 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: "#fff", fontWeight: 400 }}>{s.value}</div>
            </div>
          ))}
        </Wrap>
      </div>

      {/* PROBLEM */}
      <section id="problem" style={{ padding: "100px 32px", background: "#fff" }}>
        <Wrap>
          <div style={{ maxWidth: 760, marginBottom: 64 }}>
            <Kicker>The challenge</Kicker>
            <H size={44}>The problems we're solving</H>
            <Bar />
            <P style={{ fontSize: 16 }}>
              Oxbow Lake Hotel operates in one of Nigeria's most competitive hospitality markets. The current reliance on manual processes, WhatsApp bookings and spreadsheet accounting is creating real, measurable problems — problems that cost the hotel revenue, reputation and staff time every single day.
            </P>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 64 }}>
            {problems.map(p => (
              <div key={p.title} style={{ border: "1px solid #e8e0cc", borderLeft: `4px solid ${C.clay}`, borderRadius: 10, padding: "24px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: `${C.clay}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p.icon size={18} color={C.clay} />
                  </div>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: 17, color: C.text, fontWeight: 500 }}>{p.title}</div>
                </div>
                <P style={{ margin: 0, fontSize: 13.5 }}>{p.text}</P>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            <img src={IMG.about} alt="Hotel" style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 14 }} />
            <div>
              <Kicker>Our answer</Kicker>
              <H size={32}>One system. Every department. All connected.</H>
              <Bar />
              <P>We're proposing a fully integrated hotel management platform built specifically for Oxbow Lake Hotel — not a generic off-the-shelf product, but a system designed around exactly how your hotel operates, staffed and priced for the Nigerian market.</P>
              <P>From the moment a guest finds your website to the moment they check out, every touchpoint is handled in one place — with every naira accounted for, every room status visible and every team member seeing exactly what they need to do their job.</P>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
                {["Built for the Nigerian hospitality market", "Naira billing with Paystack & Flutterwave", "NDPR-compliant data infrastructure", "Fully branded to Oxbow Lake Hotel"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle size={15} color={C.sage} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: C.textSoft }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* HOTEL PHOTOS */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: 360 }}>
        {[IMG.pool, IMG.dining, IMG.spa].map((src, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden" }}>
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(15,31,22,0.3)" }} />
            <div style={{ position: "absolute", bottom: 20, left: 24, fontFamily: "'Fraunces',serif", fontSize: 18, color: "#fff", fontWeight: 400 }}>
              {["Swimming Pool", "Restaurant", "Wellness Spa"][i]}
            </div>
          </div>
        ))}
      </section>

      {/* ROOMS */}
      <section id="rooms" style={{ padding: "100px 32px", background: C.cream }}>
        <Wrap>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <Kicker>Accommodation</Kicker>
            <H>Rooms we'll be managing</H>
            <Bar center />
            <P style={{ maxWidth: 520, margin: "0 auto" }}>The system will handle booking, pricing, housekeeping and billing for all three room categories — with individual rate management and availability controls per room type.</P>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 36 }}>
            {rooms.map((r, i) => (
              <button key={r.name} onClick={() => setActiveRoom(i)} style={{
                fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600,
                padding: "11px 26px", borderRadius: 8, cursor: "pointer",
                border: `1px solid ${i === activeRoom ? C.brass : "#d4c8a8"}`,
                background: i === activeRoom ? C.brass : "transparent",
                color: i === activeRoom ? "#fff" : C.textSoft, transition: "all 0.2s",
              }}>{r.name}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(15,31,22,0.16)" }}>
            <div style={{ position: "relative" }}>
              <img src={rooms[activeRoom].img} alt={rooms[activeRoom].name} style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", top: 20, left: 20 }}>
                <Tag>{rooms[activeRoom].tag}</Tag>
              </div>
            </div>
            <div style={{ background: "#fff", padding: "52px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: 3, color: C.clay, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Room Category</div>
              <H size={28} style={{ marginBottom: 6 }}>{rooms[activeRoom].name}</H>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: 30, color: C.brass, marginBottom: 20 }}>
                {rooms[activeRoom].price}
                <span style={{ fontSize: 14, color: C.textSoft, fontFamily: "'Inter',sans-serif" }}> / night</span>
              </div>
              <P style={{ marginBottom: 24, fontSize: 14 }}>{rooms[activeRoom].desc}</P>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {rooms[activeRoom].perks.map(p => (
                  <span key={p} style={{
                    background: C.creamSoft, border: "1px solid #ddd4b8",
                    borderRadius: 20, padding: "5px 14px",
                    fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: C.text,
                  }}>{p}</span>
                ))}
              </div>
              <div style={{ background: C.creamSoft, borderRadius: 10, padding: "16px 18px", borderLeft: `3px solid ${C.brass}` }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 700, color: C.brass, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>System features for this room type</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12.5, color: C.textSoft, lineHeight: 1.65 }}>
                  Dynamic rate management, OTA sync, housekeeping task assignment, minibar billing, and guest communication — all automated.
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* SOLUTION / FEATURES */}
      <section id="solution" style={{ padding: "100px 32px", background: "#fff" }}>
        <Wrap>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Kicker>The system</Kicker>
            <H>Six core modules</H>
            <Bar center />
            <P style={{ maxWidth: 560, margin: "0 auto", fontSize: 15.5 }}>
              Every module is designed to work independently if needed but performs best as an integrated system — where a booking updates the front desk, which triggers housekeeping, which posts to accounting automatically.
            </P>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {coreFeatures.map((f, i) => (
              <div key={f.title} style={{ background: C.cream, border: "1px solid #e4dabd", borderTop: `3px solid ${C.brass}`, borderRadius: 12, padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 10, background: C.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <f.icon size={22} color={C.brass} />
                  </div>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.textSoft, fontWeight: 600, background: "#e8e0cc", padding: "3px 10px", borderRadius: 10 }}>Module {i + 1}</span>
                </div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: 18, color: C.text, marginBottom: 10, fontWeight: 500 }}>{f.title}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: C.textSoft, lineHeight: 1.7 }}>{f.text}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* EXTRAS + GALLERY */}
      <section style={{ padding: "100px 32px", background: C.creamSoft }}>
        <Wrap>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 96 }}>
              <Kicker>Beyond the basics</Kicker>
              <H size={34}>Extended capabilities</H>
              <Bar />
              <P>These eight additional features are included in the proposal because they directly impact revenue, guest experience and operational efficiency — not as add-ons, but as part of the core delivery.</P>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 28 }}>
                <img src={IMG.exterior} alt="Hotel exterior" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }} />
                <img src={IMG.lobby} alt="Hotel lobby" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }} />
                <img src={IMG.g1} alt="" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }} />
                <img src={IMG.g2} alt="" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {extras.map((f, i) => (
                <div key={f.title} style={{ display: "flex", gap: 16, background: "#fff", border: "1px solid #e4dabd", borderRadius: 10, padding: "20px 20px", alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: 8, background: C.sage, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <f.icon size={19} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: C.text, fontWeight: 500, marginBottom: 5 }}>{f.title}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.textSoft, lineHeight: 1.65 }}>{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* TECH */}
      <section style={{
        padding: "100px 32px", position: "relative", overflow: "hidden",
        background: `linear-gradient(155deg, ${C.ink} 0%, ${C.inkSoft} 100%)`,
      }}>
        <Wrap>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Kicker dark>Technical approach</Kicker>
            <H dark>How it will be built</H>
            <Bar color={C.brass} />
            <P dark style={{ maxWidth: 520, margin: "0 auto" }}>Modern, scalable technology chosen for reliability, performance and long-term maintainability — not the cheapest option, but the right one.</P>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 56 }}>
            {techStack.map((f, i) => (
              <div key={f.label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "28px 28px" }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: C.brass, fontWeight: 700, marginBottom: 10 }}>Layer {i + 1}</div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: 20, color: C.onDark, marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.brass, marginBottom: 14, fontWeight: 600 }}>{f.sub}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: C.onDarkSoft, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "28px 32px" }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: C.brass, fontWeight: 700, marginBottom: 20 }}>Data flow</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              {["Guest Booking", "Payment Gateway", "Reservation Engine", "Front Desk", "Housekeeping", "Accounting", "Reporting"].map((s, i, arr) => (
                <React.Fragment key={s}>
                  <div style={{ background: i === 3 ? C.brass : "rgba(255,255,255,0.08)", borderRadius: 8, padding: "12px 18px", textAlign: "center" }}>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: C.onDark, whiteSpace: "nowrap" }}>{s}</div>
                  </div>
                  {i < arr.length - 1 && <ArrowRight size={14} color={C.brass} style={{ flexShrink: 0 }} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* TIMELINE */}
      <section id="timeline" style={{ padding: "100px 32px", background: "#fff" }}>
        <Wrap>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 96 }}>
              <Kicker>Delivery plan</Kicker>
              <H size={36}>12 weeks from kickoff to launch</H>
              <Bar />
              <P>Six clear phases. Working software delivered at the end of each one. You review, test and approve before we move forward — no surprises, no delays that catch you off guard.</P>
              <div style={{ background: C.creamSoft, borderRadius: 12, padding: "24px 24px", marginTop: 32, border: "1px solid #e4dabd" }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 700, color: C.clay, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>What you get</div>
                {deliverables.map(d => (
                  <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <CheckCircle size={14} color={C.sage} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12.5, color: C.textSoft, lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {timeline.map((s, i) => (
                <div key={s.t} style={{ display: "flex", gap: 24, marginBottom: 8 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: "50%", background: C.ink, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                      <s.icon size={20} color={C.brass} />
                    </div>
                    {i < timeline.length - 1 && <div style={{ width: 2, flex: 1, background: "#e4dabd", margin: "4px 0", minHeight: 24 }} />}
                  </div>
                  <div style={{ background: C.cream, border: "1px solid #e4dabd", borderRadius: 12, padding: "22px 24px", marginBottom: 16, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <div style={{ fontFamily: "'Fraunces',serif", fontSize: 17, color: C.text, fontWeight: 500 }}>{s.t}</div>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.brass, fontWeight: 700, background: `${C.brass}18`, padding: "3px 12px", borderRadius: 10 }}>{s.w}</span>
                    </div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: C.textSoft, lineHeight: 1.7 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* WHY US */}
      <section style={{ padding: "100px 32px", background: C.cream }}>
        <Wrap>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Kicker>Partnership</Kicker>
            <H>Why work with us</H>
            <Bar center />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {whyUs.map(w => (
              <div key={w.a} style={{ background: "#fff", border: "1px solid #e4dabd", borderRadius: 12, padding: "28px 24px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: C.ink, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <w.icon size={21} color={C.brass} />
                </div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: 17, color: C.text, fontWeight: 500, marginBottom: 8 }}>{w.a}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: C.textSoft, lineHeight: 1.65 }}>{w.b}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* INVESTMENT */}
      <section id="investment" style={{ padding: "100px 32px", background: "#fff" }}>
        <Wrap>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Kicker>Investment</Kicker>
            <H>What's included</H>
            <Bar center />
            <P style={{ maxWidth: 520, margin: "0 auto" }}>One engagement. Everything listed above. No hidden costs, no per-module pricing, no surprise invoices after go-live.</P>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { tier: "System Build", items: ["All 6 core modules", "8 extended features", "Custom branding & UI", "Nigerian market configuration", "Paystack & Flutterwave integration", "OTA channel manager"] },
              { tier: "Delivery", items: ["12-week delivery timeline", "Phased, reviewable delivery", "UAT with your team", "Data migration from existing records", "Go-live with on-site support", "Dedicated project manager"] },
              { tier: "After Launch", items: ["30-day post-launch support", "Full staff training (all roles)", "System documentation", "Video walkthrough library", "Bug fixes at no extra cost", "Handover to your team"] },
            ].map(t => (
              <div key={t.tier} style={{ background: C.cream, border: "1px solid #e4dabd", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ background: C.ink, padding: "20px 24px" }}>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: 20, color: C.onDark }}>{t.tier}</div>
                </div>
                <div style={{ padding: "24px 24px" }}>
                  {t.items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                      <CheckCircle size={14} color={C.brass} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.textSoft, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, background: `${C.green}12`, border: `1px solid ${C.green}30`, borderRadius: 12, padding: "24px 32px", display: "flex", alignItems: "center", gap: 20 }}>
            <TrendingUp size={28} color={C.green} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: 18, color: C.text, marginBottom: 4 }}>Return on investment</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: C.textSoft, lineHeight: 1.65 }}>
                Based on similar hotel system deployments in Lagos, hotels recover their investment within 2–4 months through reduced booking errors, caught accounting discrepancies and increased direct bookings that avoid OTA commission fees (typically 15–25% per booking).
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* NEXT STEPS */}
      <section style={{ padding: "100px 32px", background: C.creamSoft }}>
        <Wrap>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Kicker>Next steps</Kicker>
            <H>How we move forward</H>
            <Bar center />
          </div>
          <div style={{ display: "flex", gap: 0, maxWidth: 860, margin: "0 auto" }}>
            {[
              { n: "01", t: "Review this proposal", d: "Share it with your team. We're available to answer any questions or clarify any aspect of the scope." },
              { n: "02", t: "Agree & sign off", d: "Once you're ready to proceed, we confirm the scope, timeline and start date in writing." },
              { n: "03", t: "Discovery workshop", d: "A 2-day session with your team to map every workflow, room type, rate plan and staff role before we begin building." },
              { n: "04", t: "Build begins", d: "Week 1 of the 12-week delivery plan starts. You have visibility into every phase from day one." },
            ].map((s, i, arr) => (
              <div key={s.n} style={{ flex: 1, padding: "0 24px", borderRight: i < arr.length - 1 ? "1px solid #d8ceb0" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: 36, color: C.brass, marginBottom: 12 }}>{s.n}</div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: C.text, marginBottom: 10 }}>{s.t}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.textSoft, lineHeight: 1.65 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FOOTER */}
      <div style={{ background: `linear-gradient(155deg, ${C.ink} 0%, ${C.inkSoft} 100%)`, padding: "40px 32px" }}>
        <Wrap style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Mark size={22} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, letterSpacing: 2.5, color: C.onDarkSoft, textTransform: "uppercase" }}>Oxbow Lake Hotel · Project Proposal</span>
          </div>
          <span style={{ fontFamily: "'Fraunces',serif", fontSize: 13, color: C.onDarkSoft, fontStyle: "italic" }}>Prepared with care · Lagos, Nigeria · July 2026</span>
        </Wrap>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        html, html *, body { cursor: default !important; margin: 0; }
        a, button { cursor: pointer !important; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
}
