import Link from 'next/link';

export default function ContinuousInkjetPrinterPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Automation & Conveying</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Coding Machine</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Continuous Inkjet Printer (CIJ)</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>Model PM-3001+</p>
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
                  <i className="fas fa-print" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Continuous Inkjet Printer Image</p>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Applicable Materials:</h4>
                <div className="applicable-products-grid">
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Metals</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Plastics & PVC</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Glass Bottles</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Flexible Packaging</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Ultra High-Speed Continuous Coding</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                The PM-3001+ Continuous Inkjet Printer (CIJ) is engineered for the most demanding, ultra high-speed production environments. Powered by a 4-Core CPU and featuring an automatic monitoring system, it delivers rapid, non-contact variable data printing (up to 285 m/min) onto almost any substrate or surface geometry.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Comprehensive Coding:</strong> Supports a full variable data coding solution to apply identification markings such as variable dates, traceability codes, logos, and batch codes on most surfaces.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Smart Operation:</strong> Features a 10.1 inch LVDS high resolution big touch screen along with a built-in automatic monitoring system for smooth, error-free operation.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Low Maintenance:</strong> Designed to be exceptionally easy to install and operate, boasting a long 6000-hour filter change interval.</span>
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
            <p className="section-subtitle mx-auto">Detailed specifications for our PM-3001+ Continuous Inkjet Printer.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', maxWidth: '700px', margin: '0 auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>MODEL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>PM-3001+</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Hardware Configuration</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>4 Core CPU, main frequency 1.4 GHz, Std 1 G RAM, 8G EMCC</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Print Lines</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>Up to 5 lines (5x5 dot)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Screen Size</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10.1 inch LVDS High Resolution big touch screen</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Print Height</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>1.2 to 15 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Row Distance</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>Max 30 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Printing Speed</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>Up to 285 m/min</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Input Voltage</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>220VAC ± 10 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Filter Change</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>6000 Hours</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Main Controller Dimension</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>370 x 310 x 510 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Printhead Dimension</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>230 x 44 x 41 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
