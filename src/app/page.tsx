"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ======================== COUNTDOWN ========================
function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
}

// ======================== FAQ ========================
const faqs = [
  { q: "Who can participate in Hyperlan?", a: "Hyperlan is open to students, professionals, and anyone passionate about technology and innovation. All skill levels are welcome — whether you're a first-time hacker or a seasoned developer." },
  { q: "Is it free to participate?", a: "Yes! Participation in Hyperlan is completely free. We provide food, drinks, swag, mentorship, and access to all resources throughout the event." },
  { q: "Do I need to form a team before registering?", a: "You can register individually or as a team of 2–4 members. We'll also host a team-formation activity at the start of the event so solo participants can find teammates." },
  { q: "What should I bring?", a: "Bring your laptop, charger, any hardware you plan to use, and your creative spirit! We'll have power strips, high-speed WiFi, and hardware kits available." },
  { q: "Will there be mentors available?", a: "Absolutely! Industry experts and engineers from our sponsor companies will be available throughout the event to provide guidance, technical support, and feedback." },
  { q: "What kinds of projects can I build?", a: "You can build anything within the defined tracks: AI/ML, Web3, Sustainability, EdTech, HealthTech, or Open Innovation. Projects must be started at the hackathon." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" style={{ marginBottom: "0.75rem" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          padding: "1.25rem 1.5rem",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span style={{ color: "#e2e8f0", fontWeight: 500, fontSize: "1rem", lineHeight: 1.5 }}>{q}</span>
        <span
          style={{
            color: "#3b82f6",
            fontSize: "1.25rem",
            fontWeight: 300,
            flexShrink: 0,
            transition: "transform 0.25s ease",
            transform: open ? "rotate(45deg)" : "none",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 1.5rem 1.25rem", color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.7 }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ======================== TRACKS DATA ========================
const tracks = [
  { icon: "🤖", color: "#3b82f6", gradient: "linear-gradient(135deg, #3b82f6, #6366f1)", label: "AI / ML", description: "Build intelligent systems, predictive models, and next-gen AI-powered applications that solve real-world challenges.", badge: "Hot Track" },
  { icon: "⛓️", color: "#a855f7", gradient: "linear-gradient(135deg, #a855f7, #ec4899)", label: "Web3 & DeFi", description: "Create decentralized applications, smart contracts, DeFi protocols, and blockchain-powered solutions for the future economy.", badge: "High Demand" },
  { icon: "🌱", color: "#22c55e", gradient: "linear-gradient(135deg, #22c55e, #06b6d4)", label: "Sustainability", description: "Tackle climate change, energy efficiency, and environmental challenges with technology-driven green solutions.", badge: null },
  { icon: "📚", color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)", label: "EdTech", description: "Revolutionize how people learn with adaptive learning platforms, gamification, and accessible educational tools.", badge: null },
  { icon: "💊", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", label: "HealthTech", description: "Improve healthcare delivery, patient outcomes, and medical research through innovative digital health solutions.", badge: null },
  { icon: "🚀", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #f59e0b)", label: "Open Innovation", description: "No limits. Build whatever excites you — IoT, gaming, developer tools, productivity apps, or something totally new.", badge: "Wild Card" },
];

// ======================== PRIZES ========================
const prizes = [
  {
    rank: "1st Place",
    emoji: "🥇",
    amount: "₹1,00,000",
    perks: ["Amazon Gift Cards", "Internship Fast-Track", "Trophy + Certificate", "Lifetime Alumni Access"],
    cardClass: "prize-card-gold",
    borderColor: "#fbbf24",
  },
  {
    rank: "2nd Place",
    emoji: "🥈",
    amount: "₹60,000",
    perks: ["Amazon Gift Cards", "Interview Opportunity", "Silver Trophy", "Community Recognition"],
    cardClass: "prize-card-silver",
    borderColor: "#94a3b8",
  },
  {
    rank: "3rd Place",
    emoji: "🥉",
    amount: "₹30,000",
    perks: ["Amazon Gift Cards", "Bronze Trophy", "Mentorship Session", "LinkedIn Feature"],
    cardClass: "prize-card-bronze",
    borderColor: "#b45309",
  },
];

// ======================== SPEAKERS ========================
const speakers = [
  { name: "Priya Sharma", role: "AI Research Lead", company: "Google DeepMind", color: "#3b82f6", initials: "PS" },
  { name: "Rohan Mehta", role: "CTO & Co-founder", company: "Polygon Labs", color: "#a855f7", initials: "RM" },
  { name: "Sarah Chen", role: "Principal Engineer", company: "Microsoft Azure", color: "#06b6d4", initials: "SC" },
  { name: "Arjun Kapoor", role: "Open Source Advocate", company: "GitHub", color: "#22c55e", initials: "AK" },
  { name: "Meera Iyer", role: "Product Director", company: "Razorpay", color: "#ec4899", initials: "MI" },
  { name: "Daniel Park", role: "Blockchain Engineer", company: "Coinbase", color: "#f59e0b", initials: "DP" },
];

// ======================== SCHEDULE ========================
const schedule = [
  { day: "Day 1 — Opening", date: "April 18, 2025", events: [
    { time: "09:00 AM", title: "Check-in & Registration", type: "Logistics" },
    { time: "10:30 AM", title: "Opening Ceremony & Keynote", type: "Keynote" },
    { time: "12:00 PM", title: "Team Formation Activity", type: "Networking" },
    { time: "01:00 PM", title: "Hacking Begins! 🚀", type: "Hack" },
    { time: "03:00 PM", title: "Workshop: Building with AI APIs", type: "Workshop" },
    { time: "06:00 PM", title: "Dinner + Mentor Office Hours", type: "Networking" },
    { time: "09:00 PM", title: "Midnight Snacks & Gaming Break", type: "Social" },
  ]},
  { day: "Day 2 — Main Hack", date: "April 19, 2025", events: [
    { time: "07:00 AM", title: "Breakfast & Health Break", type: "Logistics" },
    { time: "09:00 AM", title: "Workshop: Pitching Like a Pro", type: "Workshop" },
    { time: "12:00 PM", title: "Halfway Check-in with Mentors", type: "Hack" },
    { time: "02:00 PM", title: "Workshop: UI/UX for Hackers", type: "Workshop" },
    { time: "06:00 PM", title: "Hacking Ends — Submission Deadline", type: "Hack" },
    { time: "07:30 PM", title: "Project Demonstrations", type: "Demo" },
  ]},
  { day: "Day 3 — Finale", date: "April 20, 2025", events: [
    { time: "10:00 AM", title: "Finals Round — Top 10 Teams", type: "Demo" },
    { time: "01:00 PM", title: "Judges Deliberation", type: "Logistics" },
    { time: "02:00 PM", title: "Awards Ceremony & Closing", type: "Keynote" },
    { time: "03:30 PM", title: "Networking & Farewell", type: "Networking" },
  ]},
];

const typeColors: Record<string, string> = {
  Keynote: "#3b82f6",
  Workshop: "#a855f7",
  Networking: "#22c55e",
  Hack: "#f59e0b",
  Logistics: "#64748b",
  Demo: "#ec4899",
  Social: "#06b6d4",
};

// ======================== STATS ========================
const stats = [
  { number: "500+", label: "Hackers", icon: "👥" },
  { number: "₹2L+", label: "Total Prizes", icon: "🏆" },
  { number: "48", label: "Hours of Hacking", icon: "⏱️" },
  { number: "30+", label: "Mentors", icon: "🧠" },
  { number: "6", label: "Tracks", icon: "🎯" },
  { number: "20+", label: "Sponsors", icon: "🤝" },
];

// ======================== MARQUEE TECH STACK ========================
const techStack = ["React", "Next.js", "Python", "TensorFlow", "Solidity", "Rust", "TypeScript", "Flutter", "Node.js", "Web3.js", "LangChain", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Figma"];

// ======================== SPONSORS ========================
const sponsors = {
  Gold: ["TechCorp India", "InnovatePro", "FutureTech"],
  Silver: ["CodeLabs", "DevForge", "CloudNine"],
  Bronze: ["StartupHub", "TechMentor", "DigitalEdge", "CodeCraft"],
};

// ======================== MAIN PAGE ========================
export default function HomePage() {
  const hackathonDate = new Date("2025-04-18T09:00:00+05:30");
  const countdown = useCountdown(hackathonDate);
  const [activeDay, setActiveDay] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div style={{ background: "#050810" }}>
      {/* ==================== HERO ==================== */}
      <section
        ref={heroRef}
        id="hero"
        className="bg-hero-gradient grid-bg"
        style={{
          minHeight: "100vh",
          paddingTop: "8rem",
          paddingBottom: "6rem",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbs */}
        <div className="orb orb-blue animate-orb" style={{ width: "600px", height: "600px", top: "-200px", left: "-200px", opacity: 0.3 }} />
        <div className="orb orb-green animate-orb" style={{ width: "400px", height: "400px", bottom: "-100px", right: "-100px", opacity: 0.2, animationDelay: "3s" }} />
        <div className="orb orb-purple animate-orb" style={{ width: "300px", height: "300px", top: "40%", right: "10%", opacity: 0.15, animationDelay: "5s" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* Live badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
              <div className="pulse-dot" />
              <span className="badge badge-green" style={{ fontSize: "0.8125rem" }}>Registration Open — April 18–20, 2025</span>
            </div>

            {/* Logo */}
            <div
              className="animate-float"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "24px",
                overflow: "hidden",
                marginBottom: "2rem",
                boxShadow: "0 0 50px rgba(59,130,246,0.4), 0 0 100px rgba(59,130,246,0.15)",
                border: "2px solid rgba(59,130,246,0.3)",
              }}
            >
              <Image src="/logo.jpeg" alt="Hyperlan Logo" width={100} height={100} style={{ objectFit: "cover", width: "100%", height: "100%" }} priority />
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ display: "block", color: "#f0f6ff" }}>Build The</span>
              <span className="gradient-text-blue-green" style={{ display: "block" }}>Future.</span>
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#94a3b8", maxWidth: "54ch", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Hyperlan is a 48-hour hackathon where 500+ builders, designers, and innovators come together to turn ideas into reality. Join us in Bangalore, India.
            </p>

            {/* Event meta */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2.5rem" }}>
              {[
                { icon: "📍", text: "Bangalore, India" },
                { icon: "📅", text: "April 18–20, 2025" },
                { icon: "👥", text: "500+ Participants" },
              ].map(({ icon, text }) => (
                <span key={text} style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#64748b", fontSize: "0.9375rem", fontWeight: 500 }}>
                  <span aria-hidden="true">{icon}</span> {text}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "4rem" }}>
              <a href="#register" className="btn-primary" style={{ padding: "0.875rem 2.5rem", fontSize: "1rem" }} aria-label="Register for Hyperlan">
                Register for Free →
              </a>
              <a href="#about" className="btn-secondary" style={{ padding: "0.875rem 2.5rem", fontSize: "1rem" }} aria-label="Learn more about Hyperlan">
                Learn More
              </a>
            </div>

            {/* Countdown */}
            <div>
              <p style={{ color: "#475569", fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 600 }}>
                Hackathon Begins In
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hours" },
                  { value: countdown.minutes, label: "Mins" },
                  { value: countdown.seconds, label: "Secs" },
                ].map(({ value, label }) => (
                  <div key={label} className="countdown-box animate-countdown">
                    <span className="countdown-number">{String(value).padStart(2, "0")}</span>
                    <span className="countdown-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }} aria-hidden="true">
          <div style={{ width: "24px", height: "40px", border: "2px solid rgba(255,255,255,0.15)", borderRadius: "12px", display: "flex", justifyContent: "center", padding: "4px" }}>
            <div style={{ width: "3px", height: "8px", background: "#3b82f6", borderRadius: "2px", animation: "float 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <div style={{ background: "rgba(13,17,23,0.8)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "1rem 0", overflow: "hidden" }}>
        <div className="marquee-track" style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={`${tech}-${i}`} style={{ color: "#475569", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: '"JetBrains Mono", monospace' }}>
              <span style={{ color: "#1e3a5f", marginRight: "1rem" }}>◆</span>{tech}
            </span>
          ))}
        </div>
      </div>

      {/* ==================== STATS ==================== */}
      <section style={{ padding: "5rem 1.5rem", background: "#050810" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.25rem" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }} aria-hidden="true">{stat.icon}</div>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: "2rem", fontWeight: 800, marginBottom: "0.25rem" }} className="gradient-text-blue-green">{stat.number}</div>
                <div style={{ color: "#64748b", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.03em" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="bg-section-gradient" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            {/* Left: Text */}
            <div>
              <span className="section-label">About Hyperlan</span>
              <h2 className="section-heading">
                More than a <br />
                <span className="gradient-text-blue-green">Hackathon</span>
              </h2>
              <p className="section-subheading" style={{ marginBottom: "1.5rem" }}>
                Hyperlan is the flagship community hackathon that brings together the most passionate builders, creatives, and dreamers. We believe the best products are built at the intersection of speed, collaboration, and purpose.
              </p>
              <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "2rem" }}>
                Over 48 intense, exhilarating hours, teams compete across 6 tracks, guided by 30+ industry mentors and supported by world-class sponsors. Whether you ship a polished MVP or an audacious experiment — at Hyperlan, every idea matters.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#register" className="btn-primary" aria-label="Register for Hyperlan">Join the Hackathon</a>
                <a href="#tracks" className="btn-secondary" aria-label="View hackathon tracks">View Tracks</a>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "⚡", title: "Fast-Paced", desc: "48 hours to go from idea to working product" },
                { icon: "🧠", title: "Expert Guidance", desc: "30+ mentors from top tech companies" },
                { icon: "🤝", title: "Networking", desc: "Connect with 500+ like-minded builders" },
                { icon: "🏆", title: "Big Prizes", desc: "₹2L+ in prizes across all tracks" },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="glass-card card-hover"
                  style={{ padding: "1.5rem", borderRadius: "1rem" }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }} aria-hidden="true">{icon}</div>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: "1rem", color: "#e2e8f0", marginBottom: "0.375rem" }}>{title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRACKS ==================== */}
      <section id="tracks" style={{ padding: "7rem 1.5rem", background: "#050810" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Hackathon Tracks</span>
            <h2 className="section-heading">Pick Your <span className="gradient-text-blue-green">Battleground</span></h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Six specialized tracks designed to push boundaries. Each track comes with dedicated mentors, curated APIs, and track-specific prizes.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {tracks.map((track) => (
              <div
                key={track.label}
                className="track-card"
                style={{ position: "relative" }}
                role="article"
                aria-label={`${track.label} track`}
              >
                {/* Top gradient bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: track.gradient, borderRadius: "1.25rem 1.25rem 0 0" }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `${track.color}15`,
                      border: `1px solid ${track.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    {track.icon}
                  </div>
                  {track.badge && (
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "9999px", background: `${track.color}18`, color: track.color, border: `1px solid ${track.color}30`, letterSpacing: "0.05em" }}>{track.badge}</span>
                  )}
                </div>

                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: "1.25rem", color: "#f0f6ff", marginBottom: "0.625rem" }}>{track.label}</h3>
                <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{track.description}</p>

                <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.375rem", color: track.color, fontSize: "0.875rem", fontWeight: 500, cursor: "pointer" }}>
                  Learn more <span aria-hidden="true">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRIZES ==================== */}
      <section id="prizes" className="bg-section-gradient" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Prizes & Rewards</span>
            <h2 className="section-heading">Win <span className="gradient-text-blue-green">Big.</span></h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Over ₹2,00,000 in cash prizes, internship opportunities, and exclusive perks await the most innovative teams.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {prizes.map((prize) => (
              <div
                key={prize.rank}
                className={`${prize.cardClass} card-hover`}
                style={{ borderRadius: "1.5rem", padding: "2.5rem 2rem", textAlign: "center", cursor: "pointer" }}
                role="article"
                aria-label={`${prize.rank} prize`}
              >
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }} aria-hidden="true">{prize.emoji}</div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: "1.125rem", color: "#94a3b8", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{prize.rank}</h3>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: "2.5rem", fontWeight: 800, color: prize.borderColor, marginBottom: "1.5rem" }}>{prize.amount}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {prize.perks.map((perk) => (
                    <li key={perk} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#94a3b8", fontSize: "0.9rem" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7l3.5 3.5L12 3" stroke={prize.borderColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Track-specific prizes */}
          <div className="glass-card" style={{ borderRadius: "1.25rem", padding: "2rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: "1.125rem", color: "#f0f6ff", marginBottom: "0.75rem" }}>Track-Specific Prizes</h3>
            <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>Each track also awards its top team with ₹15,000 + sponsor gifts + fast-track hiring consideration</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {tracks.map((t) => (
                <span key={t.label} style={{ padding: "0.375rem 1rem", borderRadius: "9999px", background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25`, fontSize: "0.875rem", fontWeight: 500 }}>
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPEAKERS ==================== */}
      <section id="speakers" style={{ padding: "7rem 1.5rem", background: "#050810" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Speakers & Mentors</span>
            <h2 className="section-heading">Learn From <span className="gradient-text-blue-green">The Best</span></h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Industry leaders, founders, and engineers from top companies sharing their knowledge and guiding teams throughout the hackathon.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {speakers.map((speaker) => (
              <div key={speaker.name} className="speaker-card" role="article" aria-label={`${speaker.name}, ${speaker.role} at ${speaker.company}`}>
                {/* Avatar */}
                <div style={{ background: `linear-gradient(135deg, ${speaker.color}25, ${speaker.color}10)`, height: "140px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 100%, ${speaker.color}20 0%, transparent 60%)` }} aria-hidden="true" />
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: `linear-gradient(135deg, ${speaker.color} 0%, ${speaker.color}80 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: "1.25rem", color: "#fff" }} aria-hidden="true">{speaker.initials}</div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: "1.0625rem", color: "#f0f6ff", marginBottom: "0.25rem" }}>{speaker.name}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{speaker.role}</p>
                  <p style={{ color: speaker.color, fontSize: "0.8125rem", fontWeight: 600 }}>{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "#475569", fontSize: "0.9375rem" }}>+ 24 more mentors across all tracks to be announced</p>
          </div>
        </div>
      </section>

      {/* ==================== SCHEDULE ==================== */}
      <section id="schedule" className="bg-section-gradient" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Event Schedule</span>
            <h2 className="section-heading">48 Hours of <span className="gradient-text-blue-green">Action</span></h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Three packed days of hacking, workshops, networking, and demos. Every moment is designed to help you learn, build, and win.</p>
          </div>

          {/* Day Tabs */}
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {schedule.map((day, idx) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(idx)}
                aria-pressed={activeDay === idx}
                style={{
                  padding: "0.625rem 1.5rem",
                  borderRadius: "0.75rem",
                  border: activeDay === idx ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  background: activeDay === idx ? "rgba(59,130,246,0.12)" : "rgba(13,17,23,0.6)",
                  color: activeDay === idx ? "#93c5fd" : "#64748b",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {day.day}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="glass-card" style={{ borderRadius: "1.5rem", padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
            <p style={{ color: "#475569", fontSize: "0.875rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#475569" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {schedule[activeDay]?.date}
            </p>
            <div>
              {schedule[activeDay]?.events.map((event, idx) => (
                <div key={idx} className="timeline-item" style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
                    <div>
                      <p style={{ color: "#f0f6ff", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{event.title}</p>
                      <p style={{ color: "#64748b", fontSize: "0.875rem" }}>{event.time}</p>
                    </div>
                    <span style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      background: `${typeColors[event.type] ?? "#64748b"}15`,
                      color: typeColors[event.type] ?? "#64748b",
                      border: `1px solid ${typeColors[event.type] ?? "#64748b"}25`,
                      whiteSpace: "nowrap",
                    }}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPONSORS ==================== */}
      <section id="sponsors" style={{ padding: "7rem 1.5rem", background: "#050810" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Our Sponsors</span>
            <h2 className="section-heading">Powered By <span className="gradient-text-blue-green">Industry Leaders</span></h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Leading companies that believe in the next generation of builders and are investing in the future of tech.</p>
          </div>

          {Object.entries(sponsors).map(([tier, companies]) => (
            <div key={tier} style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <span style={{ color: tier === "Gold" ? "#fbbf24" : tier === "Silver" ? "#94a3b8" : "#b45309", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {tier === "Gold" ? "🥇" : tier === "Silver" ? "🥈" : "🥉"} {tier} Sponsors
                </span>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${tier === "Gold" ? "200px" : "160px"}, 1fr))`, gap: "1rem" }}>
                {companies.map((company) => (
                  <div key={company} className="sponsor-card" role="img" aria-label={`${company} — ${tier} sponsor`}>
                    <span style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: tier === "Gold" ? "1.125rem" : "1rem",
                      color: tier === "Gold" ? "#fbbf24" : tier === "Silver" ? "#94a3b8" : "#b45309",
                    }}>
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Become Sponsor CTA */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <div className="glass-card" style={{ borderRadius: "1.5rem", padding: "2.5rem 2rem", maxWidth: "600px", margin: "0 auto" }}>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: "1.375rem", color: "#f0f6ff", marginBottom: "0.75rem" }}>Want to Sponsor Hyperlan?</h3>
              <p style={{ color: "#64748b", marginBottom: "1.5rem", lineHeight: 1.7 }}>Connect your brand with 500+ talented developers, designers, and entrepreneurs. Gain visibility, recruit top talent, and make a real impact.</p>
              <a href="mailto:sponsors@hyperlan.dev" className="btn-primary" aria-label="Contact Hyperlan for sponsorship">Get in Touch →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="bg-section-gradient" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-heading">Got <span className="gradient-text-blue-green">Questions?</span></h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Everything you need to know about participating in Hyperlan.</p>
          </div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "#64748b", fontSize: "0.9375rem" }}>
              Still have questions?{" "}
              <a href="mailto:hello@hyperlan.dev" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: 600 }}>Email us</a>{" "}
              or join our{" "}
              <a href="https://discord.gg/hyperlan" style={{ color: "#a855f7", textDecoration: "none", fontWeight: 600 }}>Discord</a>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== REGISTER ==================== */}
      <section id="register" style={{ padding: "7rem 1.5rem", background: "#050810", position: "relative", overflow: "hidden" }}>
        <div className="orb orb-blue" style={{ width: "500px", height: "500px", top: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.15 }} aria-hidden="true" />
        <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Register Now</span>
            <h2 className="section-heading">
              Ready to <span className="gradient-text-blue-green">Build?</span>
            </h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>
              Spots are limited. Register today and secure your place at Hyperlan 2025.
            </p>
          </div>

          <div className="glass-card" style={{ borderRadius: "1.5rem", padding: "2.5rem" }}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Registration submitted! We'll be in touch soon."); }}
              aria-label="Hyperlan registration form"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label htmlFor="firstName" style={{ display: "block", color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>First Name *</label>
                  <input id="firstName" type="text" required placeholder="Rohan" className="form-input" aria-required="true" />
                </div>
                <div>
                  <label htmlFor="lastName" style={{ display: "block", color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Last Name *</label>
                  <input id="lastName" type="text" required placeholder="Mehta" className="form-input" aria-required="true" />
                </div>
              </div>
              <div>
                <label htmlFor="email" style={{ display: "block", color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Email *</label>
                <input id="email" type="email" required placeholder="rohan@example.com" className="form-input" aria-required="true" />
              </div>
              <div>
                <label htmlFor="college" style={{ display: "block", color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>College / Company</label>
                <input id="college" type="text" placeholder="IIT Bangalore / Google" className="form-input" />
              </div>
              <div>
                <label htmlFor="track" style={{ display: "block", color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Preferred Track *</label>
                <select id="track" required className="form-input" aria-required="true" style={{ appearance: "none" }}>
                  <option value="" disabled>Select a track</option>
                  {tracks.map((t) => <option key={t.label} value={t.label}>{t.icon} {t.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="experience" style={{ display: "block", color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Experience Level</label>
                <select id="experience" className="form-input" style={{ appearance: "none" }}>
                  <option>Beginner (0–1 years)</option>
                  <option>Intermediate (1–3 years)</option>
                  <option>Advanced (3+ years)</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" style={{ padding: "1rem", fontSize: "1rem", marginTop: "0.5rem", width: "100%" }} aria-label="Submit registration">
                Register for Free 🚀
              </button>
              <p style={{ textAlign: "center", color: "#475569", fontSize: "0.8125rem" }}>
                No cost to participate · We&apos;ll confirm within 48 hours
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA BANNER ==================== */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(168,85,247,0.05) 50%, rgba(34,197,94,0.05) 100%)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <div className="pulse-dot" />
              <span style={{ color: "#86efac", fontSize: "0.875rem", fontWeight: 600 }}>Limited spots available</span>
            </div>
          </div>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f0f6ff", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Your next big idea<br />starts at <span className="gradient-text-blue-green">Hyperlan</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Join 500+ innovators. Ship something legendary. April 18–20, 2025, Bangalore.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#register" className="btn-primary" style={{ padding: "1rem 3rem", fontSize: "1.0625rem" }} aria-label="Register for Hyperlan hackathon">
              Register Now — It&apos;s Free
            </a>
            <a href="https://discord.gg/hyperlan" className="btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.0625rem" }} aria-label="Join Hyperlan Discord community">
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
