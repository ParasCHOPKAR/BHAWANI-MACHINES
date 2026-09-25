import Link from 'next/link';

export default function AutoFlapCartonSealerPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Wrapping & Strapping</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Auto Flap Carton Sealer</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Auto Flap Carton Sealer</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>Automatic Carton Packing Line - Model: CF-20TX</p>
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
                  <i className="fas fa-box" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Auto Flap Carton Sealer Image</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div style={{ display: 'inline-block', background: 'var(--primary-color)', color: 'white', padding: '5px 15px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                MODEL: CF-20TX
              </div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Efficient Flap Folding & Sealing</h2>
              
              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}>Suitable for automatic packing line.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}>Sensor based auto folding top flaps of carton.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}>Manual adjustments for carton width and height.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}>Side belt conveyor for carton movement.</span>
                </li>
              </ul>

              <div className="product-actions" style={{ display: 'flex', gap: '1rem' }}>
                <a href="/#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Request a Quote</a>
                <a href="https://wa.me/917038300451" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
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
            <p className="section-subtitle mx-auto">Detailed specifications for our CF-20TX Auto Flap Carton Sealer.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>Specification</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea', width: '40%' }}>Power</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>220V 50Hz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Air Pressure</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>6 Kg/cm²</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Tape Width</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>4.8 - 7.5 cm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Min. Case Dimension (LxWxH)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>250 x 150 x 190 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Max. Case Dimension (LxWxH)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>550 x 390 x 400 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Dimension (LxWxH)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>2005 x 1950 x 1285 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Weight</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>600 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
