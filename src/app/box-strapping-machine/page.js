import Link from 'next/link';

export default function BoxStrappingMachinePage() {
  const machines = [
    {
      title: "Box Strapping Machine",
      model: "AS-11NS",
      icon: "fas fa-box",
      features: [
        "Copper wire motor. Instant heating in only 20 sec.",
        "Magnetic drive for faster speed packing.",
        "Stainless steel frame is available for strapping moisturized products."
      ],
      specs: [
        { label: "Voltage", value: "220 V 50 Hz" },
        { label: "Type", value: "Single Motor" },
        { label: "Strap Width", value: "9-15 mm" },
        { label: "Strap Speed", value: "2 sec/strap" },
        { label: "Tension", value: "0-60 Kg" },
        { label: "Dimension", value: "895 x 565 x 735 mm" },
        { label: "Weight", value: "70 Kg" }
      ]
    },
    {
      title: "Box Strapping Machine",
      model: "AS-11ND",
      icon: "fas fa-box-open",
      features: [
        "Copper Wire Motor. Instant heating in only 20 sec.",
        "Double Motor to adjust tension.",
        "Stainless Steel frame is available for strapping moisturized products."
      ],
      specs: [
        { label: "Voltage", value: "220 V 50 Hz" },
        { label: "Type", value: "Double Motor" },
        { label: "Strap Width", value: "9-15 mm" },
        { label: "Strap Speed", value: "1.8 sec/strap" },
        { label: "Tension", value: "0-60 Kg" },
        { label: "Dimension", value: "895 x 565 x 735 mm" },
        { label: "Weight", value: "70 Kg" }
      ]
    },
    {
      title: "Box Strapping Machine",
      model: "AS-100H",
      icon: "fas fa-cube",
      features: [
        "Copper Wire Motor. Instant heating in only 20 sec.",
        "O-Ring Based Mode.",
        "Heavy Body to minimize vibration. Stainless Steel frame is available for strapping moisturized products."
      ],
      specs: [
        { label: "Voltage", value: "220 V 50 Hz" },
        { label: "Type", value: "Single Motor" },
        { label: "Strap Width", value: "9-15 mm" },
        { label: "Strap Speed", value: "1.5 sec/strap" },
        { label: "Tension", value: "0-60 Kg" },
        { label: "Dimension", value: "895 x 565 x 735 mm" },
        { label: "Weight", value: "75 Kg" }
      ]
    },
    {
      title: "Automatic Strapping Machine",
      model: "TP-6000 (Transpak)",
      icon: "fas fa-pallet",
      features: [
        "Made in Taiwan.",
        "Suitable for heavy packaged goods.",
        "Simple, safe and user friendly.",
        "Lubrication free strapping head.",
        "External mechanical tension control."
      ],
      specs: [
        { label: "Voltage", value: "380 V 3 PHASE" },
        { label: "Arch Size", value: "850 x 600 mm" },
        { label: "Strap Width", value: "9 mm / 12 mm" },
        { label: "Strap Speed", value: "2 sec/strap" },
        { label: "Tension", value: "7-70 Kg" },
        { label: "Dimension", value: "1428 x 615 x 1541 mm" },
        { label: "Weight", value: "220 Kg" }
      ]
    }
  ];

  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Wrapping & Strapping</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Box Strapping Machine</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Box Strapping Machines</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>Semi-Automatic and Fully Automatic Solutions</p>
        </div>
      </section>

      {/* Intro text */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container text-center">
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            Our comprehensive range of Box Strapping Machines offers robust, high-speed solutions for securing your packages. From standard semi-automatic single and double motor variants to fully automatic arch strapping machines, we have the perfect equipment to streamline your end-of-line packaging operations.
          </p>
        </div>
      </section>

      {/* Individual Machines */}
      {machines.map((machine, index) => (
        <section key={index} id={machine.model.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className={`section ${index % 2 !== 0 ? 'bg-light' : ''}`} style={{ padding: '5rem 0' }}>
          <div className="container">
            
            <div className="product-layout">
              {/* Image Gallery */}
              <div className="product-gallery">
                <div className="main-image" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginBottom: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <div style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '1.2rem', flexDirection: 'column' }}>
                    <i className={machine.icon} style={{ fontSize: '5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}></i>
                    <p style={{ color: 'var(--text-color)', fontWeight: '600' }}>{machine.model} Image</p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="product-info">
                <div style={{ display: 'inline-block', background: 'var(--primary-color)', color: 'white', padding: '5px 15px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  MODEL: {machine.model}
                </div>
                
                <h2 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>{machine.title}</h2>
                
                <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Performance and Features</h3>
                <ul className="product-feature-list" style={{ listStyle: 'none', padding: '0', marginBottom: '2rem' }}>
                  {machine.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i>
                      <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specification Table inside the section */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1.5rem', textAlign: 'center' }}>Technical Specifications</h3>
              <div className="table-responsive" style={{ overflowX: 'auto', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', maxWidth: '900px', margin: '0 auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                  <tbody>
                    {machine.specs.reduce((acc, curr, idx) => {
                      if (idx % 2 === 0) acc.push([curr]);
                      else acc[acc.length - 1].push(curr);
                      return acc;
                    }, []).map((pair, rowIdx) => (
                      <tr key={rowIdx} style={{ borderBottom: '1px solid #eaeaea', background: rowIdx % 2 === 0 ? 'transparent' : '#fafafa' }}>
                        <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea', width: '25%' }}>{pair[0].label}</td>
                        <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', borderRight: pair.length > 1 ? '1px solid #eaeaea' : 'none', width: '25%' }}>{pair[0].value}</td>
                        
                        {pair.length > 1 ? (
                          <>
                            <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--secondary-color)', borderRight: '1px solid #eaeaea', width: '25%' }}>{pair[1].label}</td>
                            <td style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', width: '25%' }}>{pair[1].value}</td>
                          </>
                        ) : (
                          <>
                            <td style={{ padding: '1rem 1.5rem' }}></td>
                            <td style={{ padding: '1rem 1.5rem' }}></td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section bg-light" style={{ padding: '4rem 0', borderTop: '2px solid var(--primary-color)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem', fontSize: '2rem' }}>Need the Perfect Strapping Solution?</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>Contact us today for expert advice on which machine best fits your packaging needs.</p>
          <div className="product-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Request a Quote</Link>
            <a href="https://wa.me/917038300451" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
