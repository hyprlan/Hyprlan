"use client";

import { useState } from "react";
import Image from "next/image";

// ======================== TRACKS DATA ========================
const tracks = [
  { 
    icon: "🤖", 
    color: "#3b82f6", 
    gradient: "linear-gradient(135deg, #3b82f6, #6366f1)", 
    label: "AI / ML", 
    description: "Build intelligent systems, predictive models, and next-gen AI-powered applications that solve real-world challenges.",
    tags: ["LLMs", "Computer Vision", "NLP", "MLOps"]
  },
  { 
    icon: "⛓️", 
    color: "#a855f7", 
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)", 
    label: "Web3 & DeFi", 
    description: "Create decentralized applications, smart contracts, DeFi protocols, and blockchain-powered solutions for the future economy.",
    tags: ["Smart Contracts", "DApps", "DeFi", "NFTs"]
  },
  { 
    icon: "🌱", 
    color: "#22c55e", 
    gradient: "linear-gradient(135deg, #22c55e, #06b6d4)", 
    label: "Sustainability", 
    description: "Tackle climate change, energy efficiency, and environmental challenges with technology-driven green solutions.",
    tags: ["Clean Tech", "Carbon", "Energy", "ESG"]
  },
  { 
    icon: "📚", 
    color: "#f59e0b", 
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)", 
    label: "EdTech", 
    description: "Revolutionize how people learn with adaptive learning platforms, gamification, and accessible educational tools.",
    tags: ["e-Learning", "Gamification", "VR/AR", "Accessibility"]
  },
  { 
    icon: "💊", 
    color: "#06b6d4", 
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", 
    label: "HealthTech", 
    description: "Improve healthcare delivery, patient outcomes, and medical research through innovative digital health solutions.",
    tags: ["Telemedicine", "Wearables", "AI Diagnosis", "Health Data"]
  },
  { 
    icon: "🚀", 
    color: "#ec4899", 
    gradient: "linear-gradient(135deg, #ec4899, #f59e0b)", 
    label: "Open Innovation", 
    description: "No limits. Build whatever excites you — IoT, gaming, developer tools, productivity apps, or something totally new.",
    tags: ["IoT", "Gaming", "DevTools", "Productivity"]
  },
];

// ======================== PRIZES ========================
const prizes = [
  {
    rank: "1st Place",
    emoji: "🥇",
    amount: "₹1,00,000",
    perks: ["Amazon Gift Cards", "Internship Fast-Track", "Trophy + Certificate", "Lifetime Alumni Access"],
    cardClass: "gold",
  },
  {
    rank: "2nd Place",
    emoji: "🥈",
    amount: "₹60,000",
    perks: ["Amazon Gift Cards", "Interview Opportunity", "Silver Trophy", "Community Recognition"],
    cardClass: "silver",
  },
  {
    rank: "3rd Place",
    emoji: "🥉",
    amount: "₹30,000",
    perks: ["Amazon Gift Cards", "Bronze Trophy", "Mentorship Session", "LinkedIn Feature"],
    cardClass: "bronze",
  },
];

// ======================== SCHEDULE ========================
const schedule = [
  { day: "Day 1", date: "April 18, 2025", events: [
    { time: "09:00 AM", title: "Check-in & Registration", type: "Logistics" },
    { time: "10:30 AM", title: "Opening Ceremony & Keynote", type: "Keynote" },
    { time: "12:00 PM", title: "Team Formation Activity", type: "Networking" },
    { time: "01:00 PM", title: "Hacking Begins!", type: "Hack" },
    { time: "03:00 PM", title: "Workshop: Building with AI APIs", type: "Workshop" },
    { time: "06:00 PM", title: "Dinner + Mentor Office Hours", type: "Networking" },
    { time: "09:00 PM", title: "Midnight Snacks & Gaming Break", type: "Social" },
  ]},
  { day: "Day 2", date: "April 19, 2025", events: [
    { time: "07:00 AM", title: "Breakfast & Health Break", type: "Logistics" },
    { time: "09:00 AM", title: "Workshop: Pitching Like a Pro", type: "Workshop" },
    { time: "12:00 PM", title: "Halfway Check-in with Mentors", type: "Hack" },
    { time: "02:00 PM", title: "Workshop: UI/UX for Hackers", type: "Workshop" },
    { time: "06:00 PM", title: "Hacking Ends — Submission Deadline", type: "Hack" },
    { time: "07:30 PM", title: "Project Demonstrations", type: "Demo" },
  ]},
  { day: "Day 3", date: "April 20, 2025", events: [
    { time: "10:00 AM", title: "Finals Round — Top 10 Teams", type: "Demo" },
    { time: "01:00 PM", title: "Judges Deliberation", type: "Logistics" },
    { time: "02:00 PM", title: "Awards Ceremony & Closing", type: "Keynote" },
    { time: "03:30 PM", title: "Networking & Farewell", type: "Networking" },
  ]},
];

// ======================== MAIN PAGE ========================
export default function HomePage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div style={{ background: "#0a0a0f" }}>
      {/* ==================== HERO ==================== */}
      <section className="hero-section">
        <div className="hero-background" />
        <div className="hero-pattern" />
        
        <div className="hero-content">
          {/* Logo */}
          <div className="hero-logo">
            <Image src="/logo.jpeg" alt="Hyprlan Logo" width={120} height={120} style={{ objectFit: "cover", width: "100%", height: "100%" }} priority />
          </div>

          {/* Location */}
          <p className="hero-location">Bangalore, India</p>
          
          {/* Dates */}
          <p className="hero-dates">April 18–20, 2025</p>
          
          {/* Venue */}
          <div className="hero-venue">
            <span>📍</span>
            <span>Jio World Centre, Bangalore</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            <span className="gradient-text">Hyprlan</span>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline">
            A 48-hour hackathon where 500+ builders, designers, and innovators come together to turn ideas into reality.
          </p>

          {/* CTA */}
          <a href="#register" className="hero-cta">
            Register for Free →
          </a>
        </div>
      </section>

      {/* ==================== WHAT IS HYPRLAN ==================== */}
      <section className="what-is-section">
        <div className="what-is-content">
          <h2 className="what-is-title">What is Hyprlan?</h2>
          <p className="what-is-text">
            Hyprlan is a 48-hour hackathon dedicated to empowering students by helping them learn, build, and actively participate in hackathons. Our mission is to foster innovation, collaboration, and practical skill development among the next generation of creators.
          </p>
          <p className="what-is-text">
            We believe that hackathons are one of the best environments for students to gain hands-on engineering experience, meet like-minded peers, and build meaningful projects. Whether you're a first-time hacker or a seasoned developer, Hyprlan provides the platform and community resources to make this journey accessible, educational, and engaging for everyone.
          </p>
        </div>
      </section>

      {/* ==================== TRACKS ==================== */}
      <section className="tracks-section">
        <div className="tracks-header">
          <h2 className="tracks-title">Hackathon Tracks</h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Six specialized tracks designed to push boundaries. Each track comes with dedicated mentors, curated APIs, and track-specific prizes.
          </p>
        </div>

        <div className="tracks-scroll">
          {tracks.map((track) => (
            <div key={track.label} className="track-card">
              <div className="track-icon" style={{ background: `${track.color}20`, border: `1px solid ${track.color}30` }}>
                {track.icon}
              </div>
              <h3 className="track-title">{track.label}</h3>
              <p className="track-description">{track.description}</p>
              <div className="track-tags">
                {track.tags.map((tag) => (
                  <span key={tag} className="track-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== PRIZES ==================== */}
      <section className="prizes-section">
        <h2 className="prizes-title">Win Big</h2>
        <div className="prizes-grid">
          {prizes.map((prize) => (
            <div key={prize.rank} className={`prize-card ${prize.cardClass}`}>
              <div className="prize-emoji">{prize.emoji}</div>
              <p className="prize-rank">{prize.rank}</p>
              <p className="prize-amount">{prize.amount}</p>
              <ul className="prize-perks">
                {prize.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SCHEDULE ==================== */}
      <section className="schedule-section">
        <h2 className="schedule-title">48 Hours of Action</h2>
        
        <div className="schedule-tabs">
          {schedule.map((day, idx) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(idx)}
              className={`schedule-tab ${activeDay === idx ? "active" : ""}`}
            >
              {day.day} — {day.date}
            </button>
          ))}
        </div>

        <div className="schedule-timeline">
          {schedule[activeDay]?.events.map((event, idx) => (
            <div key={idx} className="schedule-item">
              <span className="schedule-time">{event.time}</span>
              <span className="schedule-event-title">{event.title}</span>
              <span className="schedule-event-type">{event.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/logo.jpeg" alt="Hyprlan Logo" width={60} height={60} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <p className="footer-description">
              Hyprlan is a dedicated hackathon community designed to empower students by helping them learn, build, and actively participate in hackathons.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com/hyprlan" aria-label="Twitter">𝕏</a>
              <a href="https://discord.gg/hyprlan" aria-label="Discord">💬</a>
              <a href="https://github.com/hyprlan" aria-label="GitHub">⬡</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Event</h4>
            <ul className="footer-links">
              <li><a href="#tracks">Tracks</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul className="footer-links">
              <li><a href="https://discord.gg/hyprlan">Discord</a></li>
              <li><a href="https://twitter.com/hyprlan">Twitter</a></li>
              <li><a href="https://github.com/hyprlan">GitHub</a></li>
              <li><a href="mailto:hello@hyprlan.dev">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@hyprlan.dev">hello@hyprlan.dev</a></li>
              <li><a href="mailto:sponsors@hyprlan.dev">sponsors@hyprlan.dev</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Hyprlan. All rights reserved. Built with passion by hackers, for hackers.</p>
        </div>
      </footer>
    </div>
  );
}
