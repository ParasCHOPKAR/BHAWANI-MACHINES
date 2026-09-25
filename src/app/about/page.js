"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('abt-visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.abt-animate').forEach((el) => {
      observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-page-hero">
        <div className="about-hero-inner">
          <nav className="about-breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>About Us</span>
          </nav>
          <h1 className="about-hero-heading">About Us</h1>
          <p className="about-hero-desc">
            Engineering solutions for a better tomorrow — pioneering industrial machinery since 2021.
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="abt-who-section">
        <div className="container">
          <div className="abt-who-grid">
            <div className="abt-who-content abt-animate">
              <span className="abt-label">WHO WE ARE</span>
              <h2 className="abt-heading">Pioneering Industrial<br />Machinery in India</h2>
              <div className="abt-accent-line"></div>
              <p className="abt-lead">
                Established in 2021 as <strong>BHAWANI MACHINES</strong>, we have emerged as a premier provider of industrial machinery solutions — empowering food processing, packaging, and manufacturing industries across the nation.
              </p>
              <p className="abt-body">
                Our journey began with a vision to revolutionize the food processing and packaging industry through innovation and excellence. We are dedicated to providing state-of-the-art equipment that ensures high efficiency, durability, and top-tier performance for all our clients.
              </p>
              <div className="abt-features-row">
                <div className="abt-feature-chip">
                  <i className="fas fa-check"></i>
                  <span>Comprehensive Range</span>
                </div>
                <div className="abt-feature-chip">
                  <i className="fas fa-check"></i>
                  <span>Custom Solutions</span>
                </div>
                <div className="abt-feature-chip">
                  <i className="fas fa-check"></i>
                  <span>Quality Assured</span>
                </div>
                <div className="abt-feature-chip">
                  <i className="fas fa-check"></i>
                  <span>Expert Support</span>
                </div>
              </div>
            </div>
            <div className="abt-who-image abt-animate">
              <img src="/about-section-right-img_01.png" alt="Bhawani Machines Facility" />
              <div className="abt-experience-badge">
                <span className="abt-experience-num">5+</span>
                <span className="abt-experience-text">Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="abt-stats-bar abt-animate">
        <div className="container">
          <div className="abt-stats-row">
            <div className="abt-stat-block">
              <span className="abt-stat-num">500+</span>
              <span className="abt-stat-text">Machines Installed</span>
            </div>
            <div className="abt-stat-block">
              <span className="abt-stat-num">300+</span>
              <span className="abt-stat-text">Satisfied Clients</span>
            </div>
            <div className="abt-stat-block">
              <span className="abt-stat-num">50+</span>
              <span className="abt-stat-text">Product Categories</span>
            </div>
            <div className="abt-stat-block">
              <span className="abt-stat-num">24/7</span>
              <span className="abt-stat-text">After-Sales Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="abt-journey-section">
        <div className="container">
          <div className="text-center abt-animate">
            <span className="abt-label">OUR JOURNEY</span>
            <h2 className="abt-heading">Milestones That Define Us</h2>
            <div className="abt-accent-line" style={{margin: '0 auto 3rem'}}></div>
          </div>
          <div className="abt-timeline">
            <div className="abt-timeline-line"></div>

            <div className="abt-timeline-item abt-animate">
              <div className="abt-timeline-dot"><span>01</span></div>
              <div className="abt-timeline-card">
                <span className="abt-timeline-year">2021</span>
                <h3>The Foundation</h3>
                <p>Founded as BHAWANI MACHINES with a singular vision — to deliver reliable, high-quality food processing and packaging machinery to Indian industry.</p>
              </div>
            </div>

            <div className="abt-timeline-item abt-timeline-right abt-animate">
              <div className="abt-timeline-dot"><span>02</span></div>
              <div className="abt-timeline-card">
                <span className="abt-timeline-year">2022</span>
                <h3>Rapid Expansion</h3>
                <p>Expanded our catalogue to include food & hotel equipment, sophisticated packaging machines, atta plants, and cattle feed plants for diverse industrial needs.</p>
              </div>
            </div>

            <div className="abt-timeline-item abt-animate">
              <div className="abt-timeline-dot"><span>03</span></div>
              <div className="abt-timeline-card">
                <span className="abt-timeline-year">2023</span>
                <h3>Custom Engineering</h3>
                <p>Began offering bespoke machinery tailored to exact production capacities — ensuring every client gets a purpose-built solution under one roof.</p>
              </div>
            </div>

            <div className="abt-timeline-item abt-timeline-right abt-animate">
              <div className="abt-timeline-dot"><span>04</span></div>
              <div className="abt-timeline-card">
                <span className="abt-timeline-year">Today</span>
                <h3>Industry Leadership</h3>
                <p>Serving 300+ clients across India with 500+ machines installed, we continue to set benchmarks in quality, innovation, and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="abt-mv-section">
        <div className="container">
          <div className="text-center abt-animate" style={{marginBottom: '3rem'}}>
            <span className="abt-label" style={{color: 'rgba(255,255,255,0.6)'}}>OUR PURPOSE</span>
            <h2 className="abt-heading" style={{color: 'white'}}>Mission & Vision</h2>
            <div className="abt-accent-line" style={{margin: '0 auto'}}></div>
          </div>
          <div className="abt-mv-grid">
            <div className="abt-mv-card abt-animate">
              <div className="abt-mv-icon-ring">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <div className="abt-mv-line"></div>
              <p>
                To empower our clients with the tools & expertise they need to succeed. We deliver tailor-made solutions that not only meet but exceed expectations — enabling businesses to achieve their goals and stay ahead of the competition.
              </p>
            </div>
            <div className="abt-mv-card abt-animate">
              <div className="abt-mv-icon-ring">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <div className="abt-mv-line"></div>
              <p>
                To be recognised as an industrial machinery solution leader, setting new standards of excellence and innovation. We aim to continuously evolve and adapt to industry advancements, delivering cutting-edge solutions to clients across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="abt-values-section">
        <div className="container">
          <div className="text-center abt-animate">
            <span className="abt-label">WHY BHAWANI MACHINES</span>
            <h2 className="abt-heading">Our Core Values</h2>
            <div className="abt-accent-line" style={{margin: '0 auto 3rem'}}></div>
          </div>
          <div className="abt-values-grid">
            <div className="abt-value-card abt-animate">
              <div className="abt-value-icon"><i className="fas fa-gem"></i></div>
              <h4>Quality Uncompromised</h4>
              <p>We adhere strictly to the highest manufacturing standards, ensuring our machines are durable, efficient, and robust.</p>
              <div className="abt-value-number">01</div>
            </div>
            <div className="abt-value-card abt-animate">
              <div className="abt-value-icon"><i className="fas fa-handshake"></i></div>
              <h4>Customer First</h4>
              <p>Our clients are at the center of everything we do. We provide end-to-end support from consultation to after-sales service.</p>
              <div className="abt-value-number">02</div>
            </div>
            <div className="abt-value-card abt-animate">
              <div className="abt-value-icon"><i className="fas fa-lightbulb"></i></div>
              <h4>Innovation Driven</h4>
              <p>Continuous improvement is our mantra. We integrate the latest technological advancements into our machinery.</p>
              <div className="abt-value-number">03</div>
            </div>
            <div className="abt-value-card abt-animate">
              <div className="abt-value-icon"><i className="fas fa-shield-alt"></i></div>
              <h4>Trust & Reliability</h4>
              <p>Every machine we deliver is a promise of performance. Our clients trust us because we never compromise on commitment.</p>
              <div className="abt-value-number">04</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="abt-cta-section">
        <div className="container text-center">
          <h2 className="abt-animate">Ready to Elevate Your Production?</h2>
          <p className="abt-animate">Talk to our experts and discover the right machinery solution for your business.</p>
          <div className="abt-cta-btns abt-animate">
            <Link href="/contact" className="btn btn-primary">
              Get a Free Consultation <i className="fas fa-arrow-right" style={{marginLeft: '8px'}}></i>
            </Link>
            <a href="tel:+917038300451" className="btn abt-cta-outline-btn">
              <i className="fas fa-phone" style={{marginRight: '8px'}}></i> +91 7038300451
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
