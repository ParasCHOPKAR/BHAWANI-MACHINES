import Link from 'next/link';

export default function VacuumPackagingMachinePage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Packaging</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Vacuum Packaging Machine</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Vacuum Packaging Machine</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>Single Chamber DZ Series</p>
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
                  <i className="fas fa-cube" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p>Vacuum Packaging Machine Image</p>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Applicable Products:</h4>
                <div className="applicable-products-grid">
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Meats & Poultry</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Seafood</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Cheese & Dairy</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Dry Fruits & Nuts</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Electronic Parts</div>
                  <div style={{ background: '#f9f9f9', padding: '10px', textAlign: 'center', borderRadius: '4px', border: '1px solid #eee', fontSize: '0.9rem' }}>Medical Devices</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Extend Shelf Life with Reliable Vacuum Sealing</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our Single Chamber Vacuum Packaging Machines (DZ Series) are essential for preserving the quality of perishable goods and protecting sensitive electronics. By removing air from the package, these machines prevent oxidation, mildew, insects, and moisture, thereby dramatically extending the storage period of your product.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
              <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Secure Sealing:</strong> The robust seal bar ensures a secure and completely airtight seal immediately following the vacuum process.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Adjustable Vacuum:</strong> The vacuum degree within the chamber is easily adjusted using a precision time potentiometer setting switch.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Variable Temperature:</strong> Accommodate various pouch thicknesses—different sealing temperatures are achieved by adjusting the transformer heating voltage level.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                  <span><strong>Maximum Protection:</strong> Effectively prevents oxidation, mildew, worms, and moisture, extending the freshness and viability of the packaged items.</span>
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
            <p className="section-subtitle mx-auto">Detailed specifications for our DZ Series Single Chamber Vacuum models.</p>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--secondary-color)', color: 'white' }}>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>MODEL</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>DZ - 260 L</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>DZ - 260</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>DZ - 500 / 2E</th>
                  <th style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #eaeaea', fontSize: '1.1rem' }}>DZ - 645 / 2E</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Voltage</td>
                  <td colSpan="4" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>220V 50Hz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Power</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>300W</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>370W</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>900W</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>900W</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Ultimate Vacuum Pressure</td>
                  <td colSpan="4" style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', textAlign: 'center' }}>1 Kpa</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>No. of Sealing Bar</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>1</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>2</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>2</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Chamber Dimension</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>330 x 285 x 50 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>390 x 280 x 50 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>525 x 520 x 75 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>670 x 210 x 350 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Length</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>260 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>260 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>500 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>645 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Sealing Width</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>10 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>10 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>10 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>10 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Vacuum Pump rate</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>6.5 m³/h</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>7.5 m³/h</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>20 m³/h</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>20 m³/h</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Dimension</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>405 x 320 x 350 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>495 x 335 x 380 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>650 x 575 x 950 mm</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>730 x 460 x 830 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea' }}>Machine Weight</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>21.7 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>27 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: '1px solid #eaeaea' }}>75 Kg</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)' }}>85 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
