import Link from 'next/link';

export default function ContinuousBandSealerPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Sealing</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Continuous Band Sealer</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Continuous Band Sealer</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>FR-900 Horizontal & Vertical Series</p>
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
                  <i className="fas fa-tape" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Continuous Band Sealer Image</p>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Available Variants:</h4>
                <div className="applicable-products-grid">
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>FR-900 Horizontal MS</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>FR-900 Horizontal SS</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>FR-900 Vertical MS</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>FR-900 Vertical SS</div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '10px', textAlign: 'center' }}>MS: Mild Steel | SS: Stainless Steel</p>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Fast & Efficient Continuous Sealing</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                The FR-900 Continuous Band Sealer is an essential tool for fast, reliable packaging operations. Available in both horizontal (for dry items) and vertical (for liquids/powders) configurations, and in both Mild Steel and Stainless Steel bodies, it offers unmatched versatility for any production line.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Versatile Models:</strong> Both economy and heavy-duty models are available as per your production needs.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>High Efficiency:</strong> High strength continuous flow operation provides fast and efficient sealing up to 12 meters per minute.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Smart Control:</strong> Simple operation panel with electronic constant temperature control (0-300 °C) for simple and safe operation.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Reliable Build:</strong> Equipped with air cooling heat dissipation and a wear-resistant conveyor belt that supports loads up to 5 Kg.</span>
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
            <p className="section-subtitle mx-auto">Detailed specifications for our FR-900 Horizontal and Vertical Continuous Band Sealers.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>MODEL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>FR-900 HORIZONTAL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>FR-900 VERTICAL</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Body Material</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>Mild Steel / Stainless Steel</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Voltage</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>220V 50Hz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Power</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>500W</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Speed</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>0 - 12 m/min</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Thickness</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>0.02 - 0.80 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Width</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>6 - 12 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Temperature Range</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>0 - 300 °C</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Conveyor Load</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>≤ 5 Kg</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Dimension (LxWxH)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>810 x 380 x 310 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>810 x 380 x 500 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Weight</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>25 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>30 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
