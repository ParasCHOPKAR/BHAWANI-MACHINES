import Link from 'next/link';

export default function AutomaticPowderFillingMachinePage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Packaging</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Automatic Pouch Packing Machine</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Automatic Powder Filling Machine</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>APF-100, APF-250 & APF-1000 Series</p>
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
                  <i className="fas fa-magic" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Automatic Powder Filling Machine Image</p>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Applicable Products:</h4>
                <div className="applicable-products-grid">
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Spices</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Flour</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Milk Powder</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Cocoa Powder</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Chemical Powder</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Paint Powder</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Versatile & Accurate Powder Packaging</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                The Automatic Powder Filling Machine (APF Series) provides an automated, form-fill-seal packaging solution specifically engineered for powders. It ensures clean, precise dosing using a straight screw mechanism, preventing dust generation and material waste during the packaging process.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Highly Adjustable:</strong> Easily adjust packaging weight, bag length, production speed, and other parameters to meet different production needs.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Flexible Tooling:</strong> Easy to use and capable of switching different sizes of bag formers as per your pouch dimension requirements.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Wide Compatibility:</strong> Suitable for filling and packing varieties of powders such as spices, flour, milk powder, cocoa powder, chemical powder, and paint powder.</span>
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
            <p className="section-subtitle mx-auto">Detailed specifications for our APF-100, APF-250, and APF-1000 Automatic Powder Packing models.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>MODEL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>APF-100</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>APF-250</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>APF-1000</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Screw Type</td>
                  <td colSpan="3" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>Straight Screw</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Voltage</td>
                  <td colSpan="3" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>220V 50Hz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Power</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1 KW</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1 KW</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>1.5 KW</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Air Pressure</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>0.4 - 0.6 MPa</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>0.4 - 0.6 MPa</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>0.5 - 0.7 MPa</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Filling Range</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>3 - 100 g</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>5 - 250 g</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>100 - 1000 g</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Working Speed</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>20 - 35 pcs/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>20 - 30 pcs/min</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>15 - 25 pcs/min</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Film Width (Max)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>260 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>340 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>480 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Length (Max)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>190 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>280 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>390 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Dimension (LxWxH)</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>62 x 116 x 118 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>62 x 116 x 178 cm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Weight</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>100 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>105 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>115 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
