import Link from 'next/link';

export default function AutomaticPouchPackingMachinePage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Packaging</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Automatic Pouch Packing Machine</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Automatic Pouch Packing Machine</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>Automatic Particle Filling Machine 100 (AGS-100 & AGS-100D Series)</p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section">
        <div className="container">
          <div className="product-layout">
            
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image" style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '1.2rem', flexDirection: 'column' }}>
                  <i className="fas fa-shopping-bag" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Automatic Pouch Packing Machine Image</p>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Applicable Products:</h4>
                <div className="applicable-products-grid">
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Flour & Powders</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Rice & Grains</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Coffee Beans</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Seeds & Nuts</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Dry Fruits</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Small Components</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>High-Speed Automated Pouch Packing</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                The Automatic Particle Filling Machine 100 series (AGS-100 and AGS-100D) is a fully automated form-fill-seal packaging solution. Designed for efficiency and accuracy, it handles a wide variety of non-sticky solid particles and powders, streamlining your entire packaging line from filling to final sealing.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Intelligent Control:</strong> Controlled by a microchip computer and assisted with a high-precision sensor for accurate dosing.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Versatile Packaging:</strong> Easy to use and able to switch different sizes of bag formers as per your requirements. Available in center-sealing, side sealing, and 4-side sealing options.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Multiple Drive Options:</strong> Choose between electric or pneumatic actuation, and straight or pulling frame configurations to suit your operational needs.</span>
                </li>
              </ul>

              <div className="product-actions" style={{ display: 'flex', gap: '1rem' }}>
                <a href="/#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Request a Quote</a>
                <a href="https://wa.me/917517950451" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> WhatsApp Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="section bg-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Technical Specifications</h2>
            <p className="section-subtitle mx-auto">Detailed specifications for our AGS-100 and AGS-100D Automatic Pouch Packing models.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th rowSpan="2" style={{ padding: '1rem', borderBottom: '2px solid #eaeaea', borderRight: '1px solid rgba(255,255,255,0.2)' }}>MODEL</th>
                  <th colSpan="3" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.2)' }}>AGS-100</th>
                  <th colSpan="3" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>AGS-100D (Double Head)</th>
                </tr>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '0.8rem', borderBottom: '2px solid #eaeaea', borderRight: '1px solid rgba(255,255,255,0.2)', fontWeight: '500', fontSize: '0.85rem' }}>Electric<br/>(Straight Frame)</th>
                  <th style={{ padding: '0.8rem', borderBottom: '2px solid #eaeaea', borderRight: '1px solid rgba(255,255,255,0.2)', fontWeight: '500', fontSize: '0.85rem' }}>Electric<br/>(Pulling Frame)</th>
                  <th style={{ padding: '0.8rem', borderBottom: '2px solid #eaeaea', borderRight: '1px solid rgba(255,255,255,0.2)', fontWeight: '500', fontSize: '0.85rem' }}>Pneumatic<br/>(Pulling Frame)</th>
                  <th style={{ padding: '0.8rem', borderBottom: '2px solid #eaeaea', borderRight: '1px solid rgba(255,255,255,0.2)', fontWeight: '500', fontSize: '0.85rem' }}>Electric<br/>(Straight Frame)</th>
                  <th style={{ padding: '0.8rem', borderBottom: '2px solid #eaeaea', borderRight: '1px solid rgba(255,255,255,0.2)', fontWeight: '500', fontSize: '0.85rem' }}>Electric<br/>(Pulling Frame)</th>
                  <th style={{ padding: '0.8rem', borderBottom: '2px solid #eaeaea', fontWeight: '500', fontSize: '0.85rem' }}>Pneumatic<br/>(Pulling Frame)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Voltage</td>
                  <td colSpan="6" style={{ padding: '1rem', color: 'var(--text-light)' }}>220V 50Hz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Sealing Type</td>
                  <td colSpan="6" style={{ padding: '1rem', color: 'var(--text-light)' }}>Center Sealing / Side Sealing</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Filling Range</td>
                  <td colSpan="3" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1 - 100 g</td>
                  <td colSpan="3" style={{ padding: '1rem', color: 'var(--text-light)' }}>1 - 100 g x 2</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Drive Type</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Electric</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Pneumatic</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Electric</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>Pneumatic</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Power</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1 KW</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>500 W</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1 KW</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>500 W</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Air Pressure</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>-</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>0.4 - 0.6 MPa</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>-</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>0.4 - 0.6 MPa</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Film Width (Max)</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>240 mm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>240 mm</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>240 mm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>240 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Sealing Length (Max)</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>170 mm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>190 mm</td>
                  <td colSpan="2" style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>170 mm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>190 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Working Speed</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>10-15 bag/min</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>12-18 bag/min</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>12-18 bag/min</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>12-18 bag/min</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>12-25 bag/min</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>12-25 bag/min</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Frame Type</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Straight Frame</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Pulling Frame</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Pulling Frame</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Straight Frame</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>Pulling Frame</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>Pulling Frame</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Machine Dimension (LxWxH)</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>45 x 52 x 165 cm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>45 x 81 x 150 cm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>56 x 83 x 157 cm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>45 x 52 x 165 cm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>45 x 81 x 150 cm</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>56 x 83 x 157 cm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--secondary-color)', textAlign: 'left' }}>Machine Weight</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>67 Kg</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>68 Kg</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>73 Kg</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>75 Kg</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>76 Kg</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>81 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
