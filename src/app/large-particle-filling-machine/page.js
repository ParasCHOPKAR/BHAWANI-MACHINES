import Link from 'next/link';

export default function LargeParticleFillingMachinePage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Packaging</Link> &gt; <Link href="#">Filling Machine</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Floor Standing Type</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Particle Filling Machine - Floor Standing</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>High Capacity Models: GF-1000, GF-1000D, GF-5000, GF-C1000</p>
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
                  <i className="fas fa-industry" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Floor Standing Particle Filling Machine Image</p>
                </div>
              </div>
              <div className="thumbnail-gallery thumbnail-grid col-4">
                 <div style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '4px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', textAlign: 'center', padding: '5px' }}>GF-1000</div>
                 <div style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '4px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', textAlign: 'center', padding: '5px' }}>GF-1000D</div>
                 <div style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '4px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', textAlign: 'center', padding: '5px' }}>GF-5000</div>
                 <div style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '4px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', textAlign: 'center', padding: '5px' }}>GF-1000C</div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Applicable Products:</h4>
                <div className="applicable-products-grid">
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee' }}>Tea</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee' }}>Coffee bean</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee' }}>Seeds</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee' }}>Whole grains</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee' }}>Nut</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee' }}>Hardware parts</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>High Capacity Filling for Industrial Applications</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our Floor Standing Particle Filling Machine is built for high-volume packaging needs. Featuring a digital display controller and robust stainless steel construction, these models offer superior precision and efficiency for a wide variety of granular and solid materials.
              </p>

              <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eaeaea', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--secondary-color)', marginBottom: '10px' }}>Digital Display Controller</h4>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>More stable, more efficient, easier to operate. Features Set Weight, Filled Quantity, +/- Weight, Set Speed, and Start/Suspend controls.</p>
              </div>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Intelligent Control:</strong> Using microcomputer intelligent control, filling speed can be adjusted as slow, medium and fast.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>High Accuracy:</strong> Infrared sensor for high leakage prevention accuracy.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Versatile Application:</strong> Suitable for flour, rice, coffee powder, coffee beans, seeds, dry fruits, micro and small components such as non-sticky solid particles.</span>
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
            <p className="section-subtitle mx-auto">Detailed specifications for high-capacity floor-standing models.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>MODEL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - 1000</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - 1000D</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - 5000</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - C1000</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Voltage</td>
                  <td colSpan="4" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>220V 50Hz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Power</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>200W</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>300W</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Filling Range</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 - 1000 g</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 - 1000 g x 2</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>50 - 5000 g</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>50 - 5000 g</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Working Speed</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 - 20 bags/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>20 - 30 bags/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>5 - 15 bags/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>5 - 15 bags/min</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Application</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>Granules & Powder</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>Chips, etc</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Hopper Size</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>30 x 30.5 x 35 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>44 x 22 x 32 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>22 x 22 x 32 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>35 x 55 x 39 cm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Precision</td>
                  <td colSpan="4" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>± 1 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Machine Dimension</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>30.5 x 51 x 125 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>60 x 51 x 125 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>37 x 66 x 145 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>43 x 90 x 109 cm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Machine Weight</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>25 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>55 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>45 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>50 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
