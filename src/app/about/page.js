export const metadata = {
  title: 'About Us - Bhawani Machines',
  description: 'Learn about Bhawani Machines, a premier provider of industrial machinery solutions in India.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* About Page Hero */}
      <section className="about-page-hero">
        <div className="header-container text-center">
          <h1 className="hero-title" style={{color: 'white', margin: '0 auto'}}>About Us</h1>
          <p className="hero-subtitle mx-auto" style={{maxWidth: '800px', color: 'rgba(255,255,255,0.8)'}}>
            Engineering solutions for a better tomorrow. Discover the journey of Bhawani Machines.
          </p>
        </div>
      </section>

      {/* Introduction / Who We Are (Using about-section) */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-pre-title">WHO WE ARE</span>
              <h2 className="section-title text-left">Pioneering Industrial Machinery in India</h2>
              <div className="section-divider mb-4"></div>
              <p className="lead-text">Established in 2021 as BHAWANI MACHINES, we have emerged as a premier provider of industrial machinery solutions.</p>
              <p className="secondary-text">Our journey began with a vision to revolutionize the food processing and packaging industry through innovation and excellence. We are dedicated to providing state-of-the-art equipment that ensures high efficiency, durability, and top-tier performance for all our clients.</p>
              <div className="about-bullets">
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Comprehensive Range</strong>
                    <span>Food, hotel equipment & packaging machines.</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Custom Solutions</strong>
                    <span>Advanced machinery tailored to capacity.</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Quality Assured</strong>
                    <span>Built with industrial-grade materials.</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Expert Support</strong>
                    <span>Dedicated team for installation & maintenance.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image-placeholder" style={{ background: 'url(/industrial_bg_1789711919350.jpg) center/cover' }}>
                 <div style={{background: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center'}}>
                    <i className="fas fa-industry" style={{color: 'white', fontSize: '3rem', marginBottom: '1rem'}}></i>
                    <span style={{color: 'white', fontWeight: 'bold', fontSize: '1.2rem'}}>State-of-the-art Manufacturing</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <span className="stat-label">Years of Excellence</span>
              <span className="stat-sub">Since 2021</span>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <span className="stat-label">Machines Installed</span>
              <span className="stat-sub">Across India</span>
            </div>
            <div className="stat-item">
              <div className="stat-number">300+</div>
              <span className="stat-label">Happy Clients</span>
              <span className="stat-sub">Satisfied customers</span>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <span className="stat-label">Product Categories</span>
              <span className="stat-sub">Diverse solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section history-section">
        <div className="header-container">
          <div className="history-content">
            <span className="section-pre-title text-center">OUR JOURNEY</span>
            <h2 className="section-title text-center">A Legacy of Industrial Excellence</h2>
            <div className="section-divider mx-auto mb-4" style={{width: '100px'}}></div>
            
            <div className="history-bullets">
              <div className="history-bullet">
                <div className="bullet-icon"><i className="fas fa-rocket"></i></div>
                <div className="bullet-text">
                  <strong>The Beginning:</strong> Established in 2021 as BHAWANI MACHINES, we set out with a vision to revolutionize the food processing and packaging industry. From day one, our focus has been on innovation, reliability, and unmatched quality.
                </div>
              </div>

              <div className="history-bullet">
                <div className="bullet-icon"><i className="fas fa-cogs"></i></div>
                <div className="bullet-text">
                  <strong>Expanding Horizons:</strong> We quickly expanded to offer an extensive selection of machinery that caters to diverse industrial needs. Our comprehensive range includes food and hotel equipment, sophisticated packaging machines, atta plants, and cattle feed plants.
                </div>
              </div>

              <div className="history-bullet">
                <div className="bullet-icon"><i className="fas fa-industry"></i></div>
                <div className="bullet-text">
                  <strong>Custom Solutions:</strong> Recognizing that every business is unique, we began offering advanced custom machinery tailored to specific production capacities, ensuring our clients find all their industrial solutions under one roof.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision-section">
        <div className="header-container">
          <div className="mission-vision-grid">
            
            {/* Mission */}
            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <div className="mv-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
              </div>
              <h3 className="mv-title">OUR MISSION</h3>
              <div className="mv-divider"></div>
              <p className="mv-text">
                To empower our clients with the tools & expertise they need to succeed. We strive to deliver tailor-made solutions that not only meet but exceed their expectations, enabling them to achieve their business goals and stay ahead of the competition. We are driven by a passion for innovation and dedication to providing unparalleled customer satisfaction.
              </p>
            </div>

            {/* Vision */}
            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <div className="mv-icon">
                  <i className="fas fa-eye"></i>
                </div>
              </div>
              <h3 className="mv-title">OUR VISION</h3>
              <div className="mv-divider"></div>
              <p className="mv-text">
                To be recognised as an industrial machinery solution leader, setting new standards of excellence and innovation. We aim to continuously evolve and adapt to industry advancements, ensuring that we remain at the forefront of delivering cutting-edge solutions to our clients across the globe.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="features-section" style={{ backgroundColor: '#f4f6f8' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-pre-title" style={{color: '#f26522'}}>WHY BHAWANI MACHINES</span>
            <h2 className="section-title" style={{color: '#2b4592'}}>Our Core Values</h2>
            <div className="section-divider mx-auto mb-4" style={{width: '100px'}}></div>
          </div>
          <div className="features-grid-new">
            <div className="feature-block" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div className="feature-metric"><i className="fas fa-gem"></i></div>
              <h4 style={{ color: '#2b4592' }}>Quality Uncompromised</h4>
              <p style={{ color: '#666666' }}>We adhere strictly to highest manufacturing standards, ensuring our machines are durable, efficient, and robust.</p>
            </div>
            <div className="feature-block" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div className="feature-metric"><i className="fas fa-handshake"></i></div>
              <h4 style={{ color: '#2b4592' }}>Customer First</h4>
              <p style={{ color: '#666666' }}>Our clients are at the center of everything we do. We provide end-to-end support from consultation to after-sales service.</p>
            </div>
            <div className="feature-block" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div className="feature-metric"><i className="fas fa-lightbulb"></i></div>
              <h4 style={{ color: '#2b4592' }}>Innovation Driven</h4>
              <p style={{ color: '#666666' }}>Continuous improvement is our mantra. We integrate the latest technological advancements into our machinery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
