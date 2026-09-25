import Link from 'next/link';

export default function AutomaticCartonPackingLinePage() {
  const machines = [
    {
      title: "Case Erector",
      model: "CF-20TX",
      icon: "fas fa-box-open",
      features: [
        "High-speed unpacking machine adopts mechanical transmission.",
        "Automatic alarm with stack light reminds to replenish the carton and lack of tape.",
        "12 case/min operation for medium speed packing line.",
        "Safety interlocked guarding restricts access to moving parts."
      ],
      specs: [
        { label: "Power", value: "220V 50Hz" },
        { label: "Air Pressure", value: "6 Kg/cm²" },
        { label: "Tape Width", value: "4.8 - 7.5 cm" },
        { label: "Min. Case Dimension (LxWxH)", value: "250 x 150 x 190 mm" },
        { label: "Max. Case Dimension (LxWxH)", value: "550 x 390 x 400 mm" },
        { label: "Machine Dimension (LxWxH)", value: "2005 x 1950 x 1285 mm" },
        { label: "Machine Weight", value: "600 Kg" }
      ]
    },
    {
      title: "Auto Flap Carton Sealer",
      model: "CF-20TX",
      icon: "fas fa-box",
      features: [
        "Suitable for automatic packing line.",
        "Sensor based auto folding top flaps of carton.",
        "Manual adjustments for carton width and height.",
        "Side belt conveyor for carton movement."
      ],
      specs: [
        { label: "Power", value: "220V 50Hz" },
        { label: "Air Pressure", value: "6 Kg/cm²" },
        { label: "Tape Width", value: "4.8 - 7.5 cm" },
        { label: "Min. Case Dimension (LxWxH)", value: "250 x 150 x 190 mm" },
        { label: "Max. Case Dimension (LxWxH)", value: "550 x 390 x 400 mm" },
        { label: "Machine Dimension (LxWxH)", value: "2005 x 1950 x 1285 mm" },
        { label: "Machine Weight", value: "600 Kg" }
      ]
    },
    {
      title: "Edge Sealing Machine",
      model: "MH-FJ-P1",
      icon: "fas fa-tape",
      features: [
        "Automatic pusher to push the carton.",
        "Pusher will only push next carton once first carton sealing is completed.",
        "Manual adjustment for carton width and height."
      ],
      specs: [
        { label: "Power", value: "220V 50Hz" },
        { label: "Air Pressure", value: "0.4 - 0.6 MPa" },
        { label: "Tape Width", value: "4.8 - 7.5 cm" },
        { label: "Min. Case Dimension (LxWxH)", value: "340 x 200 x 200 mm" },
        { label: "Max. Case Dimension (LxWxH)", value: "670 x 480 x 500 mm" },
        { label: "Machine Dimension (LxWxH)", value: "2200 x 1240 x 1620 mm" },
        { label: "Machine Weight", value: "280 Kg" }
      ]
    },
    {
      title: "Automatic Strapping Machine",
      model: "MH-102A",
      icon: "fas fa-pallet",
      features: [
        "Automatic, Manual both modes.",
        "Parallel 1 lane to multiple lanes, controlled by photoelectric sensor.",
        "Table Conveyor roller, direct conveying when strapping not required."
      ],
      specs: [
        { label: "Power", value: "380V 50/60 Hz 1.4 KW (Three Phase)" },
        { label: "Min. Box Size (WxH)", value: "210 x 100 mm" },
        { label: "Standard Frame Size (WxH)", value: "800 x 600 mm" },
        { label: "Work Table Height", value: "750 mm (Customizable)" },
        { label: "Load Bearing Capacity", value: "100 Kg" },
        { label: "Strap Speed", value: "2.5 sec/strap" },
        { label: "Belt Width", value: "9 - 15 mm (Frame as per strap)" },
        { label: "Belt Thickness", value: "0.55 - 1.0 mm" },
        { label: "Tension", value: "0 - 60 Kg (Adjustable)" },
        { label: "Machine Dimension (LxWxH)", value: "1580 x 650 x 1418 mm" },
        { label: "Weight", value: "280 Kg" }
      ]
    }
  ];

  return (
    <div className="product-page">
      {/* Product Header */}
      <section className="product-header-section bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> &gt; <Link href="#">Wrapping & Strapping</Link> &gt; <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Automatic Carton Packing Line</span>
          </div>
          <h1 className="section-title text-left" style={{ margin: '0', fontSize: '2.5rem' }}>Automatic Carton Packing Line</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '10px' }}>A complete, high-speed automated packaging solution</p>
        </div>
      </section>

      {/* Intro text */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container text-center">
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            Our Automatic Carton Packing Line is a fully integrated system designed to streamline your end-of-line packaging process. From case erecting and folding to edge sealing and automatic strapping, this robust setup ensures maximum efficiency and structural integrity for your outbound goods.
          </p>
        </div>
      </section>

      {/* Individual Machines */}
      {machines.map((machine, index) => (
        <section key={index} id={machine.title.toLowerCase().replace(/\s+/g, '-')} className={`section ${index % 2 !== 0 ? 'bg-light' : ''}`} style={{ padding: '5rem 0' }}>
          <div className="container">
            
            <div className="product-layout">
              {/* Image Gallery */}
              <div className="product-gallery">
                <div className="main-image" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginBottom: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <div style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '1.2rem', flexDirection: 'column' }}>
                    <i className={machine.icon} style={{ fontSize: '5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}></i>
                    <p style={{ color: 'var(--text-color)', fontWeight: '600' }}>{machine.title} Image</p>
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
          <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem', fontSize: '2rem' }}>Ready to Automate Your Packaging Line?</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>Contact us today for a custom quote or to learn more about our complete packing solutions.</p>
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
