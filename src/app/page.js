"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const heroImages = [
    '/hero_01.png',
    '/hero_02.png',
    '/hero_03.png',
    '/hero_04.png'
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    {
      number: "01",
      icon: "fa-box-open",
      title: "PACKAGING",
      subtitle: "Filling, Pouch & Vacuum",
      image: "/packing_machine_home_01.png",
      description: "High-speed precision filling, automatic pouch packaging, flow wrapping, and vacuum preservation equipment built for high-throughput factory lines.",
      link: "/automatic-pouch-packing-machine",
      list: [
        "Filling Machines (Particle, Powder, Liquid & Paste)",
        "Automatic Pouch Packing Machines (100 - 5000 Series)",
        "Flow Wrap Horizontal Packaging Machines",
        "Vacuum Packaging Machines (Single, Double & Outside)"
      ]
    },
    {
      number: "02",
      icon: "fa-tape",
      title: "SEALING & CAPPING",
      subtitle: "Band, Induction & Cap Sealers",
      image: "/siling_machine_home_01.png",
      description: "Heavy-duty continuous band sealers, electromagnetic induction foil sealers, ROPP cappers, and industrial carton & L-sealing systems.",
      link: "/continuous-band-sealer",
      list: [
        "Continuous Band Sealers (FR-900 & FR-1100 Series)",
        "Induction Foil Sealers (Manual & Continuous Line)",
        "Cap Sealing & ROPP Capping Machinery",
        "Carton Sealing & L-Sealing Machines"
      ]
    },
    {
      number: "03",
      icon: "fa-layer-group",
      title: "WRAPPING & STRAPPING",
      subtitle: "Stretch, Shrink & Box Strapping",
      image: "/wrapping_machine_home_01.png",
      description: "Heavy-duty wrapping and strapping machines for securing boxes, pallets, and cartons during warehousing, transit, and distribution.",
      link: "/stretch-wrapping-machine",
      list: [
        "Box & Carton Stretch Wrapping Machines (DBC-800 Series)",
        "Heat Shrink Wrapping Machines (BS & BSG Series)",
        "Web Sealer with Shrink Tunnel (LT-5040 A & BSE-6040)",
        "Semi & Automatic Box Strapping Machines",
        "Automated Carton Packing Lines (Erector & Sealer)"
      ]
    },
    {
      number: "04",
      icon: "fa-robot",
      title: "AUTOMATION & CODING",
      subtitle: "Labelling, Conveyors & Printers",
      image: "/Labbeling_machine_home_01.png",
      description: "Industrial continuous inkjet (CIJ) & thermal inkjet (TIJ) date coding printers, automatic bottle labelling, and modular conveyors.",
      link: "/conveyor",
      list: [
        "Semi & Automatic Bottle Labelling Machines",
        "Continuous & Thermal Inkjet Printers (TIJ & CIJ)",
        "Standard Industrial Flat Belt Conveyors",
        "Automatic Paging & Feeding Machinery"
      ]
    }
  ];

  const popularProducts = [
    {
      badge: "🔥 #1 Best Seller",
      image: "/packing_machine_home_01.png",
      title: "Automatic Pouch Packing Machine",
      category: "Form-Fill-Seal Packaging Line",
      rating: "4.9",
      reviews: 128,
      features: [
        "Multi-Head High Accuracy Weighing & Packing",
        "Granules, Powders, Seeds, Snacks & Pulses",
        "High Speed: 20-60 Pouches/Min Continuous Sealing",
        "Smart Touchscreen PLC Digital Control"
      ],
      link: "/automatic-pouch-packing-machine"
    },
    {
      badge: "⭐ Top Rated",
      image: "/siling_machine_home_01.png",
      title: "Continuous Band Sealer",
      category: "FR-900 & FR-1100 Series",
      rating: "4.9",
      reviews: 142,
      features: [
        "Heavy-Duty Continuous Conveyorized Sealing",
        "Integrated Solid-Ink Batch & Expiry Coding",
        "Precision Digital Temp Controller (0-300°C)",
        "Aluminium Foil, Plastic & Multi-layer Pouches"
      ],
      link: "/continuous-band-sealer"
    },
    {
      badge: "⚡ High Demand",
      image: "/Labbeling_machine_home_01.png",
      title: "Semi-Automatic Bottle Labelling Machine",
      category: "Precision Round Bottle Labeller",
      rating: "4.8",
      reviews: 96,
      features: [
        "Spot-On Optical Fiber Sensor Positioning",
        "High Speed Output: Up to 50 Bottles/Minute",
        "PET, Glass, Metal & HDPE Round Containers",
        "Adjustable Bottle Diameter: 15mm – 120mm"
      ],
      link: "/bottle-labelling-machine"
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero" id="home">
        {heroImages.map((img, index) => (
          <div 
            key={img}
            className={`hero-bg ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <span className="hero-pre-title">ENGINEERING SOLUTIONS FOR A BETTER TOMORROW</span>
            <h1 className="hero-title">
              Trusted Machinery for a Stronger, Smarter Business
            </h1>
            <p className="hero-subtitle">
              Bhawani Machines delivers high-quality, reliable and efficient machinery for Food Processing, Packaging, Atta Plants and Cattle Feed Plants, helping businesses grow with innovation and trust.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <i className="fas fa-cog"></i> High Performance
              </div>
              <div className="hero-feature">
                <i className="fas fa-shield-alt"></i> Reliable & Durable
              </div>
              <div className="hero-feature">
                <i className="fas fa-users"></i> Customized Solutions
              </div>
              <div className="hero-feature">
                <i className="fas fa-headset"></i> Complete Support
              </div>
            </div>

            <div className="hero-actions">
              <Link href="#products" className="btn btn-primary">
                Explore Our Products <i className="fas fa-arrow-right cta-icon"></i>
              </Link>
              <div className="hero-tagline">
                Quality Machines.<br />
                Better Business.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Progress Bar */}
      <div className="hero-progress-bar">
        {heroImages.map((_, index) => (
          <div 
            key={index}
            className={`hero-progress-segment ${index <= currentSlide ? 'active' : ''}`}
          ></div>
        ))}
      </div>

      {/* About Section */}
      <section id="about-us" className="section about-section">
        <div className="header-container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-pre-title">ABOUT BHAWANI MACHINES</span>
              <h2 className="section-title text-left">Powering Industries Across India Since 2021</h2>
              <p className="lead-text">Bhawani Machines is a trusted name in the industrial machinery sector with over 15 years of excellence. We specialize in providing high-quality food processing equipment, packaging machines, atta plants, and cattle feed plants to businesses across India.</p>
              <p className="secondary-text">From small-scale food manufacturers to large industrial plants, we deliver machinery that combines performance, durability, and value — backed by dedicated after-sales support that keeps your operations running smoothly.</p>
              
              <div className="about-bullets">
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Reliable Machinery</strong>
                    <span>Built for continuous industrial use</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Quality Assurance</strong>
                    <span>Every machine is rigorously tested</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>After-Sales Support</strong>
                    <span>Dedicated team post-delivery</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>PAN India Supply</strong>
                    <span>Delivery across all 28 states</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Customized Solutions</strong>
                    <span>Machines tailored to your needs</span>
                  </div>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Competitive Pricing</strong>
                    <span>Factory-direct pricing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img src="/about-section-right-img_01.png" alt="Bhawani Machines Facility" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Stats */}
      <section className="stats-section">
        <div className="header-container stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">5+</h3>
            <span className="stat-label">Years of Excellence</span>
            <span className="stat-sub">Established 2021</span>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <span className="stat-label">Machines Installed</span>
            <span className="stat-sub">Across India</span>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">20+</h3>
            <span className="stat-label">States Covered</span>
            <span className="stat-sub">Pan India Network</span>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <span className="stat-label">Happy Clients</span>
            <span className="stat-sub">100% Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="section best-sellers-section bg-light">
        <div className="header-container">
          <div className="section-header text-center">
            <span className="section-pre-title">BEST SELLING PRODUCTS</span>
            <h2 className="section-title">Our Most Popular Machines</h2>
            <p className="section-subtitle mx-auto">Trusted by 500+ businesses across India — these machines deliver unmatched performance and reliability.</p>
          </div>
          
          <div className="best-sellers-grid">
            {popularProducts.map((product, idx) => (
              <div className="product-card" key={idx}>
                <div className="product-badge">{product.badge}</div>
                <div className="product-img-box">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-card-img" 
                    loading="lazy" 
                  />
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="fas fa-star"></i> <span>{product.rating}</span> ({product.reviews} reviews)
                  </div>
                  <span className="product-cat-tag">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <ul className="product-features">
                    {product.features.map((feat, fIdx) => (
                      <li key={fIdx}><i className="fas fa-check-circle"></i> {feat}</li>
                    ))}
                  </ul>
                  <div className="product-card-actions">
                    <a href="#contact" className="btn btn-primary product-btn" style={{ width: '100%', justifyContent: 'center' }}>
                      Get a Quote <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="products" className="section categories-section">
        <div className="header-container">
          <div className="section-header text-center">
            <span className="section-pre-title">OUR PRODUCTS</span>
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle mx-auto">Industrial-grade machinery built for performance, durability, and reliability — delivered across India.</p>
          </div>
          
          <div className="categories-grid-new">
            {categories.map((cat, idx) => (
              <div className="category-item" key={idx}>
                <div className="cat-top-bar">
                  <div className="cat-badge-wrap">
                    <span className="cat-num-tag">{cat.number}</span>
                    <div className="cat-icon-box">
                      <i className={`fas ${cat.icon}`}></i>
                    </div>
                  </div>
                  <div className="cat-number-bg">{cat.number}</div>
                </div>

                {cat.image && (
                  <Link href={cat.link} className="cat-image-link" title={`View ${cat.title} Products`}>
                    <div className="cat-image-box">
                      <img 
                        src={cat.image} 
                        alt={`${cat.title} - ${cat.subtitle}`} 
                        className="cat-image" 
                        loading="lazy" 
                      />
                    </div>
                  </Link>
                )}

                <div className="cat-header">
                  <span className="cat-subtitle">{cat.subtitle}</span>
                  <Link href={cat.link} className="cat-title-link">
                    <h3 className="cat-title">{cat.title}</h3>
                  </Link>
                </div>
                <p className="cat-desc">{cat.description}</p>
                <ul className="cat-list">
                  {cat.list.map((item, i) => (
                    <li key={i}><i className="fas fa-check-circle"></i> {item}</li>
                  ))}
                </ul>
                <div className="cat-card-actions">
                  <a href="#contact" className="btn btn-primary cat-quote-btn">
                    Get a Quote <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="custom-machine-cta">
            <h3>Need a Custom Machinery Solution?</h3>
            <p>We build machines tailored to your exact production requirements.</p>
            <a href="#contact" className="btn btn-primary">Request Custom Quote</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="section features-section">
        <div className="header-container">
          <div className="section-header text-center">
            <span className="section-pre-title">WHY BHAWANI</span>
            <h2 className="section-title" style={{color: 'white'}}>Why Choose Us?</h2>
            <p className="section-subtitle mx-auto" style={{color: '#a0aec0'}}>We combine engineering excellence with customer-first values to deliver machinery you can rely on.</p>
          </div>
          
          <div className="features-grid-new">
            <div className="feature-block">
              <div className="feature-metric">99.9%</div>
              <div className="feature-metric-label">Uptime</div>
              <h4>High Performance</h4>
              <p>Maximum output with minimal downtime. Engineered for continuous 24/7 industrial operations.</p>
            </div>
            <div className="feature-block">
              <div className="feature-metric">10yr+</div>
              <div className="feature-metric-label">Machine Life</div>
              <h4>Durable Build</h4>
              <p>Premium-grade steel and certified components. Machines engineered to last for decades.</p>
            </div>
            <div className="feature-block">
              <div className="feature-metric">30%</div>
              <div className="feature-metric-label">Cost Savings</div>
              <h4>Best Pricing</h4>
              <p>Factory-direct pricing. No middlemen, no hidden costs — maximum value for your investment.</p>
            </div>
            <div className="feature-block">
              <div className="feature-metric">98%</div>
              <div className="feature-metric-label">On-Time Rate</div>
              <h4>On-Time Delivery</h4>
              <p>We respect your deadlines. Pan-India logistics network for prompt & safe delivery.</p>
            </div>
            <div className="feature-block">
              <div className="feature-metric">24/7</div>
              <div className="feature-metric-label">Support</div>
              <h4>Expert Support</h4>
              <p>Dedicated technical team for installation, training, and post-sale service. Always available.</p>
            </div>
            <div className="feature-block">
              <div className="feature-metric">48hr</div>
              <div className="feature-metric-label">Service TAT</div>
              <h4>Easy Maintenance</h4>
              <p>Simple maintenance design with readily available spare parts and service centers across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section testimonials-section bg-light">
        <div className="header-container">
          <div className="section-header text-center">
            <span className="section-pre-title">TESTIMONIALS</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">Trusted by hundreds of businesses across India. Here's what they have to say.</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <h4 className="test-product">Atta Plant</h4>
              <p className="test-text">"We purchased a complete atta plant from Bhawani Machines. The quality is exceptional and after-sales support is outstanding. Our production capacity has doubled in just 3 months!"</p>
              <div className="client-info">
                <div className="client-avatar">RK</div>
                <div>
                  <div className="client-name">Rajesh Kumar</div>
                  <div className="client-role">Factory Owner, Punjab</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <h4 className="test-product">Packaging Machine</h4>
              <p className="test-text">"The packaging machines delivered by Bhawani Machines are top-notch. Very durable, easy to operate, and the team provided excellent installation support. Highly recommended!"</p>
              <div className="client-info">
                <div className="client-avatar">SP</div>
                <div>
                  <div className="client-name">Suresh Patel</div>
                  <div className="client-role">Food Manufacturer, Gujarat</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <h4 className="test-product">Hotel Equipment</h4>
              <p className="test-text">"We equipped our hotel kitchen with commercial food processing equipment. The machines are efficient, hygienic, and have made our kitchen operations much smoother."</p>
              <div className="client-info">
                <div className="client-avatar">AS</div>
                <div>
                  <div className="client-name">Anil Sharma</div>
                  <div className="client-role">Hotel Owner, Rajasthan</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <h4 className="test-product">Cattle Feed Plant</h4>
              <p className="test-text">"The complete cattle feed plant setup has transformed our business. Great pricing, on-time delivery, and the technical team was very professional throughout."</p>
              <div className="client-info">
                <div className="client-avatar">MY</div>
                <div>
                  <div className="client-name">Mahesh Yadav</div>
                  <div className="client-role">Cattle Feed Manufacturer, Haryana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="header-container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <span className="section-pre-title">CONTACT US</span>
              <h2 className="section-title text-left">Let's Talk Business</h2>
              <p className="lead-text mb-4">Have a query or need a custom machine? Our team is ready to build the right solution for you.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="cm-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="cm-details">
                    <h4>Call Us</h4>
                    <a href="tel:+917038300451">+91 7038300451</a>
                    <span>Mon–Sat, 9 AM – 7 PM</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="cm-icon"><i className="fab fa-whatsapp"></i></div>
                  <div className="cm-details">
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/917517950451">+91 7517950451</a>
                    <span>Quick response guaranteed</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="cm-icon"><i className="fas fa-envelope"></i></div>
                  <div className="cm-details">
                    <h4>Email Us</h4>
                    <a href="mailto:info@bhawanimachines.com">info@bhawanimachines.com</a>
                    <span>We reply within 24 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="cm-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="cm-details">
                    <h4>Our Location</h4>
                    <p>Ambegaon Bk., Dalvinagar, Katraj-Narhe Road, Pune – 411046</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <div className="form-box">
                <h3>Send an Inquiry</h3>
                <p>Fill the form and we'll respond within a few hours.</p>
                <form>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" className="form-control" placeholder="+91 xxxxx xxxxx" required />
                  </div>
                  <div className="form-group">
                    <label>Product Interested In *</label>
                    <select className="form-control" required>
                      <option value="">Select a product category</option>
                      <option value="packaging">Packaging</option>
                      <option value="sealing">Sealing</option>
                      <option value="wrapping">Wrapping & Strapping</option>
                      <option value="automation">Automation & Conveying</option>
                      <option value="custom">Other / Custom Requirement</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
                  <p className="privacy-note"><i className="fas fa-lock"></i> Your information is safe. We never share your details.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
