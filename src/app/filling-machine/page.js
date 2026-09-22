import Link from 'next/link';

export default function FillingMachinePage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Packaging</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Filling Machine</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Particle Filling Machine - Table Type</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>Single Head & Double Head Models (GF Series)</p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section">
        <div className="container">
          <div className="product-layout">
            
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image" style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
                {/* Placeholder for the main image provided by user */}
                <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '1.2rem', flexDirection: 'column' }}>
                  <i className="fas fa-box-open" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Product Image (Single / Double Head)</p>
                </div>
              </div>
              <div className="thumbnail-gallery thumbnail-grid col-3">
                 <div style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '4px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Thumb 1</div>
                 <div style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '4px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Thumb 2</div>
                 <div style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '4px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Thumb 3</div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>High-Precision Filling for Granules & Powders</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our Digital Control Particle Filling Machine is engineered for fast, highly accurate, and reliable filling of various non-sticky solid particles. Available in both Single Head and Double Head configurations, it utilizes an advanced microcomputer intelligent control system to optimize your packaging workflow.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Key Features</h3>
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
                  <span><strong>Fast & Smooth:</strong> Strong vibration design, fast filling speed and no blocking.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Versatile Application:</strong> Suitable for flour, rice, coffee powder, coffee beans, seeds, dry fruits, micro and small components.</span>
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
            <p className="section-subtitle mx-auto">Detailed specifications for GF Series Single and Double Head models.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>MODEL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - 100</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - 100D (Double)</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - 500</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>GF - 500D (Double)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Voltage</td>
                  <td colSpan="4" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>220V 50Hz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Power</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>50W</td>
                  <td colSpan="2" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>100W</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Filling Range</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>1 - 100 g</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>1 - 100 g x 2</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>5 - 500 g</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>5 - 500 g x 2</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Working Speed</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 - 15 bags/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>20 - 30 bags/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>5 - 15 bags/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 - 30 bags/min</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Application</td>
                  <td colSpan="4" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>Granules & Powder</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Hopper Size</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>22 x 22 x 32 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>44 x 22 x 32 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>22 x 22 x 32 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>44 x 22 x 32 cm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Precision</td>
                  <td colSpan="4" style={{ padding: '1rem 1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>± 1 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Machine Dimension</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>38 x 26 x 70 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>53 x 46 x 70 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>38 x 26 x 72 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>81 x 26 x 72 cm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Machine Weight</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>18 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>11 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>22 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
