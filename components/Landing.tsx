"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";

/**
 * Landing — the Nexbuild Studios marketing page.
 *
 * Ported verbatim from the original static index.html so the design is
 * pixel-identical; only framework plumbing changed (class -> className,
 * inline style strings -> objects, the two inline onclick handlers -> React,
 * and the <script> block -> the effects below).
 */
export default function Landing() {
  const navRef = useRef<HTMLElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  // Navbar gains a "scrolled" style once the page is scrolled past the hero top.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cards fade/slide in as they enter the viewport (mirrors the original observer).
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".service-card, .portfolio-card, .process-step, .pricing-card, .ai-card"
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══════════════════ NAVIGATION ═══════════════════ */}
      <nav id="navbar" ref={navRef}>
        <a href="#" className="nav-logo">
          <img src="/assets/nexbuild-logo-cropped.png" alt="Nexbuild Studios" />
        </a>
        <ul className={navOpen ? "nav-links show" : "nav-links"}>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#ai-agents">AI Agents</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Start a Project</a>
        <button
          className="nav-toggle"
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-content">
          <div className="hero-tag">
            <span className="line"></span>
            Web Development &amp; AI Studio
          </div>
          <h1>We build digital<br />products that<br /><span className="accent-text">grow businesses.</span></h1>
          <p className="hero-sub">Nexbuild Studios designs and develops high-performance websites, web applications, mobile apps, and AI-powered agents — backed by SEO strategies that drive real growth. Based in Cape Town, serving clients worldwide.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start Your Project
              <span className="arrow">→</span>
            </a>
            <a href="#work" className="btn-secondary">
              View Our Work
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">4+</div>
              <div className="label">Projects Delivered</div>
            </div>
            <div className="hero-stat">
              <div className="number">100%</div>
              <div className="label">Client Satisfaction</div>
            </div>
            <div className="hero-stat">
              <div className="number">2x</div>
              <div className="label">Avg. Traffic Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="services">
        <div className="section-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Services built around<br />your growth.</h2>
          <p className="section-desc">Every service we offer is designed to work together — so your website, your app, and your search visibility all push in the same direction.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Web Development</h3>
            <p>Custom websites and landing pages built for speed, conversion, and scale. From business sites to complex platforms — we build it right the first time.</p>
            <div className="service-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>WordPress</span>
              <span>E-commerce</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Web Applications</h3>
            <p>Full-stack web applications that solve real business problems. Dashboards, portals, booking systems, and custom tools tailored to your operations.</p>
            <div className="service-tags">
              <span>SaaS</span>
              <span>Dashboards</span>
              <span>APIs</span>
              <span>Databases</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform mobile applications that your customers will actually want to use. Clean UI, smooth performance, and built for both iOS and Android.</p>
            <div className="service-tags">
              <span>iOS</span>
              <span>Android</span>
              <span>React Native</span>
              <span>Flutter</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3>SEO &amp; Digital Growth</h3>
            <p>Search engine optimisation and digital marketing strategies that drive organic traffic and turn visitors into customers. We don&apos;t just build — we grow.</p>
            <div className="service-tags">
              <span>Technical SEO</span>
              <span>Content</span>
              <span>Analytics</span>
              <span>Strategy</span>
            </div>
          </div>
          <div className="service-card" style={{ gridColumn: "1 / -1" }}>
            <div className="service-icon">🤖</div>
            <h3>AI Agents &amp; Automation</h3>
            <p>Custom AI-powered agents that automate lead qualification, document processing, reporting, and internal workflows. Built to integrate seamlessly with your existing systems and work around the clock.</p>
            <div className="service-tags">
              <span>Lead Generation</span>
              <span>Document Processing</span>
              <span>Workflow Automation</span>
              <span>Reporting</span>
              <span>Claude API</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section id="process">
        <div className="section-header">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">A process designed<br />for results.</h2>
          <p className="section-desc">No surprises. No scope creep. Just a clear, proven process that delivers on time and on budget.</p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Discovery</h3>
            <p>We learn your business, your goals, and your audience. Free audit included to show you exactly where the opportunities are.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Strategy &amp; Design</h3>
            <p>We map out the architecture, design the interface, and align every decision with your business objectives.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Build &amp; Test</h3>
            <p>Clean code, rigorous testing, and transparent progress updates. You see exactly what&apos;s being built, every step of the way.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Launch &amp; Grow</h3>
            <p>We launch, monitor, and optimise. Ongoing hosting, maintenance, and SEO ensure your investment keeps delivering returns.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PORTFOLIO ═══════════════════ */}
      <section id="work">
        <div className="section-header">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Projects that speak<br />for themselves.</h2>
          <p className="section-desc">Real projects, real results. Here&apos;s a look at some of the work we&apos;ve delivered for our clients.</p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-card portfolio-featured" onClick={() => window.open("https://cabman.co.za", "_blank")} style={{ cursor: "pointer" }}>
            <div className="portfolio-preview" style={{ background: "linear-gradient(135deg, #1a1f2e, #252d40)" }}>
              <div className="mock-browser">
                <div className="mock-browser-bar">
                  <div className="mock-dot"></div><div className="mock-dot"></div><div className="mock-dot"></div>
                  <div style={{ marginLeft: "10px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)" }}>cabman.co.za</div>
                </div>
                <div className="mock-content">
                  <div className="mock-line" style={{ width: "40%", background: "#f5a623", opacity: 0.7 }}></div>
                  <div className="mock-line" style={{ width: "65%", background: "#e2ddd6", opacity: 0.4 }}></div>
                  <div className="mock-block" style={{ height: "70px", background: "rgba(245,166,35,0.12)", borderColor: "rgba(245,166,35,0.2)" }}></div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div className="mock-block" style={{ flex: 1, height: "44px", background: "rgba(245,166,35,0.08)", borderColor: "rgba(245,166,35,0.15)" }}></div>
                    <div className="mock-block" style={{ flex: 1, height: "44px" }}></div>
                    <div className="mock-block" style={{ flex: 1, height: "44px" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-info" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div className="portfolio-type">Web Application · Transport &amp; Logistics</div>
                <h3>CABMAN</h3>
                <p>A full-featured cab management platform for fleet operators — driver tracking, booking management, dispatching, and real-time analytics built for the South African market.</p>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", whiteSpace: "nowrap", marginLeft: "24px", flexShrink: 0 }}>cabman.co.za →</div>
            </div>
          </div>
          <div className="portfolio-card" onClick={() => window.open("https://halal-bites-web-user-production.up.railway.app/", "_blank")} style={{ cursor: "pointer" }}>
            <div className="portfolio-preview" style={{ background: "linear-gradient(135deg, #1e2d1e, #2a3d2a)" }}>
              <div className="mock-browser">
                <div className="mock-browser-bar">
                  <div className="mock-dot"></div><div className="mock-dot"></div><div className="mock-dot"></div>
                  <div style={{ marginLeft: "10px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)" }}>halalbites.app</div>
                </div>
                <div className="mock-content">
                  <div className="mock-line" style={{ width: "50%", background: "#4ade80", opacity: 0.5 }}></div>
                  <div className="mock-line" style={{ width: "75%", background: "#e2ddd6", opacity: 0.3 }}></div>
                  <div className="mock-block" style={{ height: "58px", background: "rgba(74,222,128,0.1)", borderColor: "rgba(74,222,128,0.2)" }}></div>
                  <div className="mock-line" style={{ width: "60%", background: "#e2ddd6", opacity: 0.3 }}></div>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-type">Web Application · Food &amp; Lifestyle</div>
              <h3>HalalBites</h3>
              <p>A halal food discovery and ordering platform connecting Muslim consumers with certified halal restaurants across South Africa.</p>
            </div>
          </div>
          <div className="portfolio-card" onClick={() => window.open("https://arturfarena.co.za/", "_blank")} style={{ cursor: "pointer" }}>
            <div className="portfolio-preview" style={{ background: "linear-gradient(135deg, #1c2a1c, #243324)" }}>
              <div className="mock-browser">
                <div className="mock-browser-bar">
                  <div className="mock-dot"></div><div className="mock-dot"></div><div className="mock-dot"></div>
                  <div style={{ marginLeft: "10px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)" }}>arturfarena.co.za</div>
                </div>
                <div className="mock-content">
                  <div className="mock-line" style={{ width: "35%", background: "#86efac", opacity: 0.5 }}></div>
                  <div className="mock-block" style={{ height: "62px", background: "rgba(134,239,172,0.1)", borderColor: "rgba(134,239,172,0.2)" }}></div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div className="mock-block" style={{ flex: 1, height: "38px" }}></div>
                    <div className="mock-block" style={{ flex: 1, height: "38px", background: "rgba(134,239,172,0.08)", borderColor: "rgba(134,239,172,0.15)" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-type" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                Web Application · Sports &amp; Recreation
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", padding: "3px 8px", background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: "4px", color: "#4ade80", letterSpacing: "1px" }}>In Progress</span>
              </div>
              <h3>Arturf Arena</h3>
              <p>Booking and management system for an artificial turf sports arena — real-time court availability, online reservations, and operations dashboard. Currently being revamped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ AI AGENTS ═══════════════════ */}
      <section id="ai-agents">
        <div className="section-header">
          <div className="section-label">AI-Powered Solutions</div>
          <h2 className="section-title">Intelligent agents that<br />work while you sleep.</h2>
          <p className="section-desc">Custom-built AI agents that automate your lead generation, workflows, and reporting — so you can focus on growing your business.</p>
        </div>
        <div className="ai-grid">
          <div className="ai-card">
            <div className="ai-card-status live"><span className="status-dot"></span> Live Demo</div>
            <div className="ai-card-icon">🎯</div>
            <h3>Lead Qualifier &amp; Booking Agent</h3>
            <p>An AI agent that engages website visitors, qualifies leads by asking the right questions, scores them, and books qualified prospects directly into your calendar.</p>
            <ul className="ai-card-features">
              <li><span className="feat-check">✓</span> Natural conversation flow</li>
              <li><span className="feat-check">✓</span> Custom qualification criteria</li>
              <li><span className="feat-check">✓</span> Calendar integration</li>
              <li><span className="feat-check">✓</span> Lead scoring &amp; CRM sync</li>
              <li><span className="feat-check">✓</span> 24/7 automated follow-ups</li>
            </ul>
            <div className="ai-card-bottom">
              <div className="ai-card-price">R12,000 <span>+ R2k/mo</span></div>
              <a href="#contact" className="ai-card-btn">Learn More</a>
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-status live"><span className="status-dot"></span> Live Demo</div>
            <div className="ai-card-icon">⚙️</div>
            <h3>Invoice &amp; Document Processor</h3>
            <p>Upload invoices, receipts, or documents — this agent extracts key data, categorises it, and outputs clean spreadsheets or summaries. Hours of admin work done in seconds.</p>
            <ul className="ai-card-features">
              <li><span className="feat-check">✓</span> PDF &amp; image processing</li>
              <li><span className="feat-check">✓</span> Automatic data extraction</li>
              <li><span className="feat-check">✓</span> Smart categorisation</li>
              <li><span className="feat-check">✓</span> Export to Excel / CSV</li>
              <li><span className="feat-check">✓</span> Multi-document batch processing</li>
            </ul>
            <div className="ai-card-bottom">
              <div className="ai-card-price">R15,000 <span>+ R3k/mo</span></div>
              <a href="#contact" className="ai-card-btn">Learn More</a>
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-status live"><span className="status-dot"></span> Live Demo</div>
            <div className="ai-card-icon">📊</div>
            <h3>Weekly Business Report Agent</h3>
            <p>Connects to your data sources and automatically generates a formatted weekly report with key metrics, trends, and actionable insights — delivered to your inbox every Monday.</p>
            <ul className="ai-card-features">
              <li><span className="feat-check">✓</span> Multi-source data integration</li>
              <li><span className="feat-check">✓</span> Automated trend analysis</li>
              <li><span className="feat-check">✓</span> Custom KPI tracking</li>
              <li><span className="feat-check">✓</span> Branded PDF reports</li>
              <li><span className="feat-check">✓</span> Scheduled email delivery</li>
            </ul>
            <div className="ai-card-bottom">
              <div className="ai-card-price">R18,000 <span>+ R3.5k/mo</span></div>
              <a href="#contact" className="ai-card-btn">Learn More</a>
            </div>
          </div>
        </div>
        <p className="ai-section-note"><strong>Need a custom agent?</strong> We build tailored AI solutions for any business process. Tell us what you want to automate and we&apos;ll design an agent for it.</p>
      </section>

      {/* ═══════════════════ PRICING ═══════════════════ */}
      <section id="pricing">
        <div className="section-header">
          <div className="section-label">Investment</div>
          <h2 className="section-title">Transparent pricing.<br />No hidden costs.</h2>
          <p className="section-desc">Choose a starting point that fits your needs. Every package includes hosting setup and basic SEO foundations.</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-tier">Starter</div>
            <div className="pricing-amount">R8,500</div>
            <div className="pricing-note">Perfect for small businesses getting online</div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> Up to 5-page website</li>
              <li><span className="check">✓</span> Mobile responsive design</li>
              <li><span className="check">✓</span> Basic SEO setup</li>
              <li><span className="check">✓</span> Contact form integration</li>
              <li><span className="check">✓</span> 2 rounds of revisions</li>
              <li><span className="check">✓</span> 2-week delivery</li>
            </ul>
            <a href="#contact" className="pricing-btn pricing-btn-outline">Get Started</a>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-tier">Growth</div>
            <div className="pricing-amount">R25,000</div>
            <div className="pricing-note">For businesses ready to scale online</div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> Custom design &amp; development</li>
              <li><span className="check">✓</span> Advanced functionality</li>
              <li><span className="check">✓</span> Full SEO optimisation</li>
              <li><span className="check">✓</span> CMS / Admin panel</li>
              <li><span className="check">✓</span> Analytics &amp; tracking setup</li>
              <li><span className="check">✓</span> 3–4 week delivery</li>
            </ul>
            <a href="#contact" className="pricing-btn pricing-btn-filled">Get Started</a>
          </div>
          <div className="pricing-card">
            <div className="pricing-tier">Premium</div>
            <div className="pricing-amount">Custom</div>
            <div className="pricing-note">Web apps, mobile apps &amp; complex builds</div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> Full-stack web applications</li>
              <li><span className="check">✓</span> Mobile app development</li>
              <li><span className="check">✓</span> API integrations</li>
              <li><span className="check">✓</span> Ongoing SEO retainer</li>
              <li><span className="check">✓</span> Priority support</li>
              <li><span className="check">✓</span> Dedicated project manager</li>
            </ul>
            <a href="#contact" className="pricing-btn pricing-btn-outline">Let&apos;s Talk</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section id="contact">
        <div className="contact-wrapper">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let&apos;s build something<br />great together.</h2>
          <p className="section-desc">Ready to start? Tell us about your project and we&apos;ll get back to you within 24 hours with a free audit and proposal.</p>
          <div className="contact-methods">
            <a href="mailto:hello@nexbuildstudios.com" className="contact-pill">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              hello@nexbuildstudios.com
            </a>
            <a href="#" className="contact-pill">
              <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              WhatsApp
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer>
        <div className="footer-left">
          © 2026 Nexbuild Studios. Cape Town, South Africa.
        </div>
        <div className="footer-right">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </>
  );
}
