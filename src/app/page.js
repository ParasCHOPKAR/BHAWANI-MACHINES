"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const heroImages = [
    '/hero-bg-image_03.png',
    '/hero-bg-image_04.png',
    '/hero-bg-image_05.png',
    '/hero-bg-image_06.png'
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
      subtitle: "Fast & Accurate",
      title: "Packaging",
      description: "A wide range of packaging solutions including filling, pouch packing, and vacuum packing machines to streamline your packaging process.",
      link: "/automatic-pouch-packing-machine",
      list: ["Filling Machine", "Automatic Pouch Packing Machine", "Flow Wrap Machine", "Vacuum Packaging Machine"]
    },
    {
      number: "02",
      subtitle: "Secure & Tight",
      title: "Sealing",
      description: "Reliable sealing equipment designed for secure closure of pouches, bottles, and cartons to ensure product safety and longevity.",
      link: "/continuous-band-sealer",
      list: ["Continuous Band Sealer", "Induction Sealing Machine", "Cap Sealing Machine", "Carton Sealing Machine", "L Sealing Machine"]
    },
    {
      number: "03",
      subtitle: "Safe Transit",
      title: "Wrapping & Strapping",
      description: "Heavy-duty wrapping and strapping machines for securing boxes, pallets, and cartons during storage and transportation.",
      link: "/stretch-wrapping-machine",
      list: ["Stretch Wrapping Machine", "Shrink Wrapping Machine", "Box Strapping Machine", "Auto Carton Packing Line"]
    },
    {
      number: "04",
      subtitle: "High Efficiency",
      title: "Automation & Conveying",
      description: "Advanced automation solutions including coding, labelling, and conveyor systems for continuous high-speed production lines.",
      link: "/conveyor",
      list: ["Bottle Labelling Machine", "Conveyor Systems", "Coding Machine"]
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

      {/* Divider */}
      <div className="section-divider"></div>

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
              <img src="/about-section-right-img.png" alt="Bhawani Machines Facility" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
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
            <div className="product-card">
              <div className="product-badge">🔥 #1 Best Seller</div>
              <div className="product-img-placeholder"><i className="fas fa-hamburger"></i></div>
              <div className="product-content">
                <div className="product-rating"><i className="fas fa-star"></i> <span>4.9</span> (128 reviews)</div>
                <h3 className="product-title">Chapati Making Machine</h3>
                <ul className="product-features">
                  <li><i className="fas fa-chevron-right"></i> Fully Automatic | 1000+ Chapatis/Hr</li>
                  <li><i className="fas fa-chevron-right"></i> Food-Grade Stainless Steel</li>
                  <li><i className="fas fa-chevron-right"></i> Adjustable Thickness & Size</li>
                  <li><i className="fas fa-chevron-right"></i> Low Power Consumption</li>
                </ul>
                <a href="#contact" className="btn btn-outline product-btn">Get Best Quote</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-badge">⭐ Top Rated</div>
              <div className="product-img-placeholder"><i className="fas fa-seedling"></i></div>
              <div className="product-content">
                <div className="product-rating"><i className="fas fa-star"></i> <span>4.8</span> (96 reviews)</div>
                <h3 className="product-title">Atta Plant</h3>
                <ul className="product-features">
                  <li><i className="fas fa-chevron-right"></i> Complete Turnkey Flour Mill Solution</li>
                  <li><i className="fas fa-chevron-right"></i> Fully Automatic Operation</li>
                  <li><i className="fas fa-chevron-right"></i> Cleaning & Grinding System</li>
                  <li><i className="fas fa-chevron-right"></i> High Output Capacity</li>
                </ul>
                <a href="#contact" className="btn btn-outline product-btn">Get Best Quote</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-badge">📦 High Demand</div>
              <div className="product-img-placeholder"><i className="fas fa-box"></i></div>
              <div className="product-content">
                <div className="product-rating"><i className="fas fa-star"></i> <span>4.7</span> (84 reviews)</div>
                <h3 className="product-title">Packaging Machine</h3>
                <ul className="product-features">
                  <li><i className="fas fa-chevron-right"></i> Multi-Head Weigher | Pouch Packing</li>
                  <li><i className="fas fa-chevron-right"></i> Auto Pouch Fill & Seal</li>
                  <li><i className="fas fa-chevron-right"></i> Touch Screen PLC Control</li>
                  <li><i className="fas fa-chevron-right"></i> Multiple Bag Sizes</li>
                </ul>
                <a href="#contact" className="btn btn-outline product-btn">Get Best Quote</a>
              </div>
            </div>
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
                <div className="cat-number">{cat.number}</div>
                <div className="cat-header">
                  <span className="cat-subtitle">{cat.subtitle}</span>
                  <h3 className="cat-title">{cat.title}</h3>
                </div>
                <p className="cat-desc">{cat.description}</p>
                <ul className="cat-list">
                  {cat.list.map((item, i) => (
                    <li key={i}><i className="fas fa-check"></i> {item}</li>
                  ))}
                </ul>
                <Link href={cat.link} className="cat-link">View Products &rarr;</Link>
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
