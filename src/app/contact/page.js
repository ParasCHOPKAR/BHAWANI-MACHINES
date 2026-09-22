export const metadata = {
  title: 'Contact Us - Bhawani Machines',
  description: 'Get in touch with Bhawani Machines for all your industrial machinery needs. Contact our team in Pune today.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Contact Page Hero */}
      <section style={{ backgroundColor: '#fff', padding: '20px 0 10px', position: 'relative' }}>
        <div className="header-container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="section-title" style={{ color: 'var(--secondary-color)', margin: '0 auto', fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase', display: 'inline-block', position: 'relative' }}>
            Contact
            <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section contact-section" style={{ backgroundColor: '#f7f8fa' }}>
        <div className="header-container">
          <div className="contact-grid">
            {/* Contact Details */}
            <div className="contact-info-panel" style={{ background: '#fff', padding: '3rem', borderLeft: '4px solid var(--primary-color)', boxShadow: 'var(--shadow)' }}>
              <span className="section-pre-title">GET IN TOUCH</span>
              <h2 className="section-title text-left">We're Here to Help</h2>
              <p className="lead-text mb-4">Reach out to our experts for inquiries, support, or custom machinery solutions.</p>
              
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

            {/* Contact Form */}
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
                      <option value="food">Food & Hotel Equipments</option>
                      <option value="packaging">Packaging Machines</option>
                      <option value="atta">Atta Plants</option>
                      <option value="cattle">Cattle Feed Plant</option>
                      <option value="custom">Other / Custom Requirement</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea className="form-control" rows="5" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
                  <p className="privacy-note"><i className="fas fa-lock"></i> Your information is safe. We never share your details.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93187091694!2d73.79292695509935!3d18.524761375330372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="500" 
          style={{ border: 0, display: 'block' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Bhawani Machines Location"
        ></iframe>
      </section>
    </div>
  );
}
