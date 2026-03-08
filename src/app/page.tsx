"use client";

import { useState, useEffect } from "react";
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
  { q: "Who can participate in Hyprlan?", a: "Hyprlan is open to students, professionals, and anyone passionate about technology and innovation. All skill levels are welcome." },
  { q: "Is it free to participate?", a: "Yes! Participation in Hyprlan is completely free. We provide food, drinks, swag, mentorship, and access to all resources." },
  { q: "Do I need a team?", a: "You can register individually or as a team of 2–4. We'll also host team-formation activities so solo participants can find teammates." },
  { q: "What should I bring?", a: "Bring your laptop, charger, and creativity! We'll have power strips, WiFi, and hardware kits available." },
  { q: "Will there be mentors?", a: "Absolutely! Industry experts from top tech companies will be available to provide guidance and feedback." },
  { q: "What projects can I build?", a: "You can build anything within our tracks: AI/ML, Web3, Sustainability, EdTech, HealthTech, or Open Innovation." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question" aria-expanded={open}>
        {q}
        <span className={`faq-toggle ${open ? "open" : ""}`}>+</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

// ======================== TRACKS ========================
const tracks = [
  { icon: "🤖", label: "AI / ML", description: "Build intelligent systems and AI-powered applications that solve real-world challenges." },
  { icon: "⛓️", label: "Web3 & DeFi", description: "Create decentralized applications, smart contracts, and blockchain solutions." },
  { icon: "🌱", label: "Sustainability", description: "Tackle climate change and environmental challenges with tech-driven solutions." },
  { icon: "📚", label: "EdTech", description: "Revolutionize learning with adaptive platforms and educational tools." },
  { icon: "💊", label: "HealthTech", description: "Improve healthcare delivery through innovative digital health solutions." },
  { icon: "🚀", label: "Open Innovation", description: "Build whatever excites you — IoT, gaming, developer tools, or something new." },
];

// ======================== SPEAKERS ========================
const speakers = [
  { name: "Priya Sharma", role: "AI Research Lead", company: "Google DeepMind", initials: "PS" },
  { name: "Rohan Mehta", role: "CTO & Co-founder", company: "Polygon Labs", initials: "RM" },
  { name: "Sarah Chen", role: "Principal Engineer", company: "Microsoft Azure", initials: "SC" },
  { name: "Arjun Kapoor", role: "Open Source Advocate", company: "GitHub", initials: "AK" },
  { name: "Meera Iyer", role: "Product Director", company: "Razorpay", initials: "MI" },
  { name: "Daniel Park", role: "Blockchain Engineer", company: "Coinbase", initials: "DP" },
];

// ======================== SCHEDULE ========================
const schedule = [
  { day: "Day 1", date: "April 18, 2025", events: [
    { time: "09:00 AM", title: "Check-in & Registration", type: "Logistics" },
    { time: "10:30 AM", title: "Opening Ceremony & Keynote", type: "Keynote" },
    { time: "12:00 PM", title: "Team Formation", type: "Networking" },
    { time: "01:00 PM", title: "Hacking Begins!", type: "Hack" },
    { time: "03:00 PM", title: "Workshop: AI APIs", type: "Workshop" },
    { time: "06:00 PM", title: "Dinner + Mentors", type: "Networking" },
  ]},
  { day: "Day 2", date: "April 19, 2025", events: [
    { time: "07:00 AM", title: "Breakfast", type: "Logistics" },
    { time: "09:00 AM", title: "Workshop: Pitching", type: "Workshop" },
    { time: "12:00 PM", title: "Mentor Check-in", type: "Hack" },
    { time: "02:00 PM", title: "Workshop: UI/UX", type: "Workshop" },
    { time: "06:00 PM", title: "Hacking Ends", type: "Hack" },
    { time: "07:30 PM", title: "Project Demos", type: "Demo" },
  ]},
  { day: "Day 3", date: "April 20, 2025", events: [
    { time: "10:00 AM", title: "Finals — Top 10", type: "Demo" },
    { time: "01:00 PM", title: "Judges Deliberation", type: "Logistics" },
    { time: "02:00 PM", title: "Awards Ceremony", type: "Keynote" },
    { time: "03:30 PM", title: "Networking & Farewell", type: "Networking" },
  ]},
];

// ======================== STATS ========================
const stats = [
  { number: "500+", label: "Hackers" },
  { number: "₹2L+", label: "Prizes" },
  { number: "48", label: "Hours" },
  { number: "30+", label: "Mentors" },
  { number: "6", label: "Tracks" },
  { number: "20+", label: "Sponsors" },
];

// ======================== MAIN PAGE ========================
export default function HomePage() {
  const hackathonDate = new Date("2025-04-18T09:00:00+05:30");
  const countdown = useCountdown(hackathonDate);
  const [activeDay, setActiveDay] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Speakers", href: "#speakers" },
    { label: "Schedule", href: "#schedule" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div style={{ background: "var(--bg-primary)" }}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="/" className="navbar-brand">
            <Image src="/logo.jpeg" alt="Hyprlan" width={40} height={40} style={{ borderRadius: "0.5rem", objectFit: "cover" }} />
            <span>HYPR<span style={{ color: "var(--accent-primary)" }}>LAN</span></span>
          </a>
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navbar-link">{link.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a href="#register" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>Register</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="navbar-toggle">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="mobile-menu-link">{link.label}</a>
          ))}
          <a href="#register" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Register</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ marginBottom: "2rem" }}>
              <span className="badge badge-accent">
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                Registration Open — April 18–20, 2025
              </span>
            </div>
            <h1 className="hero-title">Build the Future with Hyprlan</h1>
            <p className="hero-subtitle">
              Hyprlan is a 48-hour hackathon where 500+ builders, designers, and innovators come together to turn ideas into reality. Join us in Bangalore, India.
            </p>
            <div className="hero-meta">
              <span className="hero-meta-item">📍 Bangalore, India</span>
              <span className="hero-meta-item">📅 April 18–20, 2025</span>
              <span className="hero-meta-item">👥 500+ Participants</span>
            </div>
            <div className="hero-cta">
              <a href="#register" className="btn btn-primary">Register →</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
            <div>
              <p style={{ fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 600, color: "var(--text-muted)" }}>Hackathon Begins In</p>
              <div className="countdown">
                {[{ value: countdown.days, label: "Days" }, { value: countdown.hours, label: "Hours" }, { value: countdown.minutes, label: "Mins" }, { value: countdown.seconds, label: "Secs" }].map(({ value, label }) => (
                  <div key={label} className="countdown-item">
                    <span className="countdown-number">{String(value).padStart(2, "0")}</span>
                    <span className="countdown-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="section-label">About Hyprlan</span>
              <h2 className="section-heading">More than a <span className="text-gradient">Hackathon</span></h2>
              <p className="section-subheading" style={{ marginBottom: "1.5rem" }}>
                Hyprlan brings together passionate builders, creatives, and dreamers. We believe the best products are built at the intersection of speed, collaboration, and purpose.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Over 48 hours, teams compete across 6 tracks, guided by 30+ mentors and supported by world-class sponsors.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#register" className="btn btn-primary">Join</a>
                <a href="#tracks" className="btn btn-secondary">View Tracks</a>
              </div>
            </div>
            <div className="grid grid-2">
              {[{ icon: "⚡", title: "Fast-Paced", desc: "48 hours from idea to product" }, { icon: "🧠", title: "Expert Guidance", desc: "30+ mentors from top companies" }, { icon: "🤝", title: "Networking", desc: "500+ like-minded builders" }, { icon: "🏆", title: "Prizes", desc: "₹2L+ across all tracks" }].map(({ icon, title, desc }) => (
                <div key={title} className="card feature-card">
                  <div className="feature-icon">{icon}</div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-description">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-3">
            <span className="section-label">Tracks</span>
            <h2 className="section-heading">Pick Your Battleground</h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Six specialized tracks designed to push boundaries.</p>
          </div>
          <div className="grid grid-3">
            {tracks.map((track) => (
              <div key={track.label} className="card track-card">
                <div className="track-icon">{track.icon}</div>
                <h3 className="track-title">{track.label}</h3>
                <p className="track-description">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="section">
        <div className="container">
          <div className="text-center mb-3">
            <span className="section-label">Speakers</span>
            <h2 className="section-heading">Learn From The Best</h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Industry leaders guiding teams throughout.</p>
          </div>
          <div className="grid grid-3">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="card speaker-card">
                <div className="speaker-avatar">{speaker.initials}</div>
                <div className="speaker-info">
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-role">{speaker.role}</p>
                  <p className="speaker-company">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-3">
            <span className="section-label">Schedule</span>
            <h2 className="section-heading">48 Hours of Action</h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Three days of hacking, workshops, and networking.</p>
          </div>
          <div className="schedule-tabs">
            {schedule.map((day, idx) => (
              <button key={day.day} onClick={() => setActiveDay(idx)} className={`schedule-tab ${activeDay === idx ? "active" : ""}`}>{day.day}</button>
            ))}
          </div>
          <div className="schedule-list">
            {schedule[activeDay]?.events.map((event, idx) => (
              <div key={idx} className="schedule-item">
                <div className="schedule-time">{event.time}</div>
                <div className="schedule-content">
                  <div className="schedule-title">{event.title}</div>
                  <span className="schedule-type">{event.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center mb-3">
            <span className="section-label">FAQ</span>
            <h2 className="section-heading">Got Questions?</h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Everything about participating.</p>
          </div>
          <div>{faqs.map((faq) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "640px" }}>
          <div className="text-center mb-3">
            <span className="section-label">Register</span>
            <h2 className="section-heading">Ready to Build?</h2>
            <p className="section-subheading" style={{ margin: "0 auto" }}>Spots are limited. Secure your place.</p>
          </div>
          <div className="card">
            <form onSubmit={(e) => { e.preventDefault(); alert("Registration submitted!"); }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group" style={{ marginBottom: 0 }}><label className="form-label">First Name *</label><input type="text" required placeholder="Rohan" className="form-input" /></div>
                <div className="form-group" style={{ marginBottom: 0 }}><label className="form-label">Last Name *</label><input type="text" required placeholder="Mehta" className="form-input" /></div>
              </div>
              <div className="form-group"><label className="form-label">Email *</label><input type="email" required placeholder="rohan@example.com" className="form-input" /></div>
              <div className="form-group"><label className="form-label">College / Company</label><input type="text" placeholder="IIT Bangalore" className="form-input" /></div>
              <div className="form-group"><label className="form-label">Track *</label><select required className="form-input"><option value="">Select</option>{tracks.map((t) => <option key={t.label} value={t.label}>{t.label}</option>)}</select></div>
              <button type="submit" className="btn btn-primary" style={{ padding: "1rem" }}>Register 🚀</button>
              <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.8125rem" }}>Free to participate · Confirmation in 48 hours</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-name">
                <Image src="/logo.jpeg" alt="Hyprlan" width={40} height={40} style={{ borderRadius: "0.5rem", objectFit: "cover" }} />
                <span>HYPR<span style={{ color: "var(--accent-primary)" }}>LAN</span></span>
              </div>
              <p className="footer-description">Where builders come together to change the world.</p>
            </div>
            <div><h4 className="footer-title">Event</h4><ul className="footer-links"><li><a href="#about" className="footer-link">About</a></li><li><a href="#tracks" className="footer-link">Tracks</a></li><li><a href="#schedule" className="footer-link">Schedule</a></li></ul></div>
            <div><h4 className="footer-title">Community</h4><ul className="footer-links"><li><a href="https://discord.gg/hyperlan" className="footer-link">Discord</a></li><li><a href="https://twitter.com/hyperlan" className="footer-link">Twitter</a></li><li><a href="https://linkedin.com/company/hyperlan" className="footer-link">LinkedIn</a></li></ul></div>
            <div><h4 className="footer-title">Contact</h4><ul className="footer-links"><li><a href="mailto:hello@hyprlan.dev" className="footer-link">Email</a></li><li><a href="#" className="footer-link">Sponsor</a></li><li><a href="#" className="footer-link">Code of Conduct</a></li></ul></div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} Hyprlan. All rights reserved.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} /><span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Registration <strong>open</strong></span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
