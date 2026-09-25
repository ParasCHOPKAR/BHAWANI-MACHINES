import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Gallery - Coming Soon | Bhawani Machines",
  description: "Browse high-definition photos, operational videos, and client site installations of Bhawani Machines' packaging, sealing, and industrial machinery.",
};

export default function GalleryPage() {
  const categories = [
    {
      title: "Packaging & Filling Lines",
      count: "85+ Photos & Videos",
      icon: "fa-box-open",
      desc: "Pouch packing, liquid filling, powder augers, and particle batching machines."
    },
    {
      title: "Sealing & Capping Machinery",
      count: "40+ HD Demonstrations",
      icon: "fa-tape",
      desc: "Continuous band sealers, induction foil sealers, and ROPP capping units."
    },
    {
      title: "Automated Packaging Lines",
      count: "Case Studies & Live Footage",
      icon: "fa-robot",
      desc: "End-to-end carton erecting, flap sealing, edge taping, and box strapping."
    },
    {
      title: "Coding & Conveyor Automation",
      count: "30+ High-Speed Clips",
      icon: "fa-barcode",
      desc: "Thermal inkjet coding, online batch printing, and customized conveyor systems."
    }
  ];

  return (
    <div className="gallery-page">
      {/* Hero Header */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Gallery</span>
          </div>
          <span className="gallery-tag">MEDIA & EXHIBITION CENTER</span>
          <h1 className="gallery-title">Machinery Gallery</h1>
          <p className="gallery-subtitle">
            A comprehensive visual showcase of our industrial packaging, sealing, and automation systems in real factory environments.
          </p>
        </div>
      </section>

      {/* Main Coming Soon Section */}
      <section className="gallery-body-section">
        <div className="container">
          
          {/* Coming Soon Card */}
          <div className="gallery-cs-card">
            <div className="cs-pulse-badge">
              <span className="pulse-dot"></span>
              GALLERY UNDER CURATION • COMING SOON
            </div>

            <div className="cs-icon-wrapper">
              <div className="cs-icon-circle">
                <i className="fas fa-photo-video"></i>
              </div>
            </div>

            <h2 className="cs-heading">Capturing Precision Engineering</h2>
            <p className="cs-lead">
              We are assembling high-resolution photo galleries, 4K operational video demonstrations, and client installation case studies for our entire lineup.
            </p>

            <div className="cs-divider"></div>

            {/* Sneak Peek Category Grid */}
            <div className="cs-grid-title">Upcoming Media Collections</div>
            <div className="gallery-preview-grid">
              {categories.map((cat, idx) => (
                <div key={idx} className="preview-card">
                  <div className="preview-icon">
                    <i className={`fas ${cat.icon}`}></i>
                  </div>
                  <div className="preview-content">
                    <span className="preview-count-tag">{cat.count}</span>
                    <h3 className="preview-card-title">{cat.title}</h3>
                    <p className="preview-card-desc">{cat.desc}</p>
                  </div>
                  <div className="preview-badge">
                    <i className="fas fa-lock"></i> Coming Soon
                  </div>
                </div>
              ))}
            </div>

            {/* Instant Media Request Banner */}
            <div className="gallery-cta-box">
              <div className="cta-box-left">
                <div className="cta-box-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <div>
                  <h3 className="cta-box-title">Need Machine Photos or Trial Videos Right Now?</h3>
                  <p className="cta-box-text">
                    Our technical sales team can immediately share machine test videos, product catalogs, and installation photos directly on WhatsApp or Email.
                  </p>
                </div>
              </div>
              <div className="cta-box-actions">
                <a
                  href="https://wa.me/917038300451?text=Hi%20Bhawani%20Machines%2C%20I%20would%20like%20to%20request%20photos%20and%20videos%20of%20your%20machines."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> Request on WhatsApp
                </a>
                <a href="tel:+917038300451" className="btn btn-outline-light">
                  <i className="fas fa-phone-alt"></i> Call +91 7038300451
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
