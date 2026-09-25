import Link from 'next/link';

export default function VacuumPackagingMachineDoublePage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Packaging</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Vacuum Packaging Machine</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Vacuum Packaging Machine (Double Chamber)</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>DZ-500/2SB & DZ-600/2SB</p>
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
                  <i className="fas fa-cubes" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Double Chamber Vacuum Packaging Machine Image</p>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Applicable Products:</h4>
                <div className="applicable-products-grid">
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Bulk Meat & Seafood</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Dairy Products</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Nuts & Grains</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Medical Devices</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Industrial Parts</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Sausages & Frankfurters</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>High Output Double Chamber Vacuum Sealing</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our Double Chamber Vacuum Packaging Machines are built for high-throughput commercial and industrial applications. With two chambers and dual vacuum pumps, operators can load one chamber while the other is sealing, drastically reducing downtime and accelerating the packaging process.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Streamlined Process:</strong> Featuring dual seal bars per chamber, it performs vacuum extraction and sealing in one streamlined process.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Precision Control:</strong> The vacuum level is precisely controlled via a time potentiometer, while the sealing temperature is adjustable across levels for compatibility with various packaging materials.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Dual Pump Power:</strong> It comes with dual vacuum pumps (20 x 2 m³/h) for significantly faster operation, making this machine ideal for food, medical, and industrial packaging.</span>
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
            <p className="section-subtitle mx-auto">Detailed specifications for our DZ500/2SB and DZ600/2SB Double Chamber Vacuum models.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', maxWidth: '900px', margin: '0 auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)', width: '30%' }}>MODEL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)', width: '35%' }}>DZ500/2SB</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', width: '35%' }}>DZ600/2SB</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Voltage</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>380 V</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>380 V</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Power</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>800 W</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>1000 W</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Motor Power</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1500 W</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>1500 W</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Ultimate Vacuum Pressure</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>1 Kpa</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>No. of Sealing Bar</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>4</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>4</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Chamber Dimension</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>500 x 410 x 100 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>655 x 525 x 100 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Length</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>500 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>600 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Width</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>10 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Vacuum Pump Rate</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>20 x 2 m³/h</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>20 x 2 m³/h</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Dimension (LxWxH)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1230 x 600 x 950 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>1450 x 650 x 950 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Weight</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>140 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>170 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
