"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('packaging');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="topbar">
          <div className="header-container topbar-container">
            <div className="topbar-left">
              <span><i className="fas fa-phone-alt topbar-icon"></i> +91 7038300451</span>
              <span><i className="fas fa-envelope topbar-icon"></i> info@bhawanimachines.com</span>
            </div>
            <div className="topbar-middle">
              Reliable Machines | Better Productivity | A Stronger Tomorrow
            </div>
            <div className="topbar-right">
              <span><i className="fas fa-map-marker-alt topbar-icon"></i> Pune, Maharashtra - 411046</span>
              <div className="topbar-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar">
          <div className="header-container nav-container">
            <Link href="/" className="logo">
              <img src="/logo_01.png" alt="Bhawani Machines Logo" style={{ height: '70px', width: 'auto' }} />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="nav-links desktop-only">
              <Link href="/" className="active">Home</Link>
              <Link href="/about">About Us</Link>
              
              {/* Product Mega Menu Dropdown */}
              <div className="dropdown">
                <span className="nav-dropdown-trigger" style={{ cursor: 'pointer' }}>
                  Products <i className="fas fa-chevron-down dropdown-icon"></i>
                </span>
                
                <div className="dropdown-content">
                  <div className="mega-menu-wrapper">
                    {/* Left Category Sidebar Selector */}
                    <div className="mega-menu-sidebar">
                      <div 
                        className={`mega-sidebar-item ${activeCategory === 'packaging' ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCategory('packaging')}
                        onClick={() => setActiveCategory('packaging')}
                      >
                        <div className="sidebar-num">01</div>
                        <div className="sidebar-info">
                          <span className="sidebar-title"><i className="fas fa-box-open sidebar-icon"></i> PACKAGING</span>
                          <span className="sidebar-sub">Filling, Pouch & Vacuum</span>
                        </div>
                        <i className="fas fa-chevron-right sidebar-arrow"></i>
                      </div>

                      <div 
                        className={`mega-sidebar-item ${activeCategory === 'sealing' ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCategory('sealing')}
                        onClick={() => setActiveCategory('sealing')}
                      >
                        <div className="sidebar-num">02</div>
                        <div className="sidebar-info">
                          <span className="sidebar-title"><i className="fas fa-tape sidebar-icon"></i> SEALING & CAPPING</span>
                          <span className="sidebar-sub">Band, Induction & Cap Sealers</span>
                        </div>
                        <i className="fas fa-chevron-right sidebar-arrow"></i>
                      </div>

                      <div 
                        className={`mega-sidebar-item ${activeCategory === 'wrapping' ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCategory('wrapping')}
                        onClick={() => setActiveCategory('wrapping')}
                      >
                        <div className="sidebar-num">03</div>
                        <div className="sidebar-info">
                          <span className="sidebar-title"><i className="fas fa-layer-group sidebar-icon"></i> WRAPPING & STRAPPING</span>
                          <span className="sidebar-sub">Stretch, Shrink & Box Strapping</span>
                        </div>
                        <i className="fas fa-chevron-right sidebar-arrow"></i>
                      </div>

                      <div 
                        className={`mega-sidebar-item ${activeCategory === 'automation' ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCategory('automation')}
                        onClick={() => setActiveCategory('automation')}
                      >
                        <div className="sidebar-num">04</div>
                        <div className="sidebar-info">
                          <span className="sidebar-title"><i className="fas fa-robot sidebar-icon"></i> AUTOMATION & CODING</span>
                          <span className="sidebar-sub">Labelling, Conveyors & Printers</span>
                        </div>
                        <i className="fas fa-chevron-right sidebar-arrow"></i>
                      </div>
                    </div>

                    {/* Right Content Grid Panel */}
                    <div className="mega-menu-content-panel">
                      {activeCategory === 'packaging' && (
                        <div className="mega-category-grid">
                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-fill-drip"></i> Filling Machines</div>
                            <ul className="group-link-list">
                              <li><Link href="/filling-machine">Particle - Table Top</Link></li>
                              <li><Link href="/large-particle-filling-machine">Particle - Floor Standing</Link></li>
                              <li><Link href="/powder-filling-machine">Powder Type (Auger)</Link></li>
                              <li><Link href="/liquid-filling-machine">Liquid - Digital Control</Link></li>
                              <li><Link href="/pneumatic-liquid-filling-machine">Liquid - Pneumatic Type</Link></li>
                              <li><Link href="/double-nozzle-filling-machine">Double Nozzle Filling</Link></li>
                              <li><Link href="/paste-filling-machine">Paste Type (Pneumatic)</Link></li>
                              <li><Link href="/manual-paste-filling-machine">Manual Paste Filling</Link></li>
                            </ul>
                          </div>

                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-shopping-bag"></i> Auto Pouch Packing</div>
                            <ul className="group-link-list">
                              <li><Link href="/automatic-pouch-packing-machine">100 Series (Particle)</Link></li>
                              <li><Link href="/automatic-particle-filling-machine-500">500 Series (Particle)</Link></li>
                              <li><Link href="/automatic-particle-filling-machine-1000">1000 Series (Particle)</Link></li>
                              <li><Link href="/automatic-particle-filling-machine-5000">5000 Series (Particle)</Link></li>
                              <li><Link href="/automatic-particle-filling-machine-four-head">Four Head Series</Link></li>
                              <li><Link href="/automatic-powder-filling-machine">Powder Series (APF)</Link></li>
                              <li><Link href="/automatic-paste-filling-machine">Paste Series (AF)</Link></li>
                              <li><Link href="/automatic-paste-filling-machine-mixer">Paste Series (AFM - Mixer)</Link></li>
                            </ul>
                          </div>

                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-box"></i> Flow Wrap & Vacuum</div>
                            <ul className="group-link-list">
                              <li><Link href="/flow-wrap-machine">Flow Wrap Machine</Link></li>
                              <li><Link href="/vacuum-packaging-machine">Single Chamber Vacuum</Link></li>
                              <li><Link href="/vacuum-packaging-machine-double">Double Chamber Vacuum</Link></li>
                              <li><Link href="/vacuum-packaging-machine-outside">Outside Chamber Vacuum</Link></li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {activeCategory === 'sealing' && (
                        <div className="mega-category-grid">
                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-tape"></i> Continuous Band Sealer</div>
                            <ul className="group-link-list">
                              <li><Link href="/continuous-band-sealer">FR-900 Series</Link></li>
                              <li><Link href="/continuous-band-sealer-1100">FR-1100 Series</Link></li>
                            </ul>
                            <div className="group-col-header" style={{ marginTop: '1.5rem' }}><i className="fas fa-fire"></i> Induction Sealing</div>
                            <ul className="group-link-list">
                              <li><Link href="/induction-sealing-machine">Manual Induction Sealer</Link></li>
                              <li><Link href="/induction-sealing-machine-continuous">Continuous Induction Sealer</Link></li>
                            </ul>
                          </div>

                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-prescription-bottle"></i> Cap Sealing Machines</div>
                            <ul className="group-link-list">
                              <li><Link href="/cap-sealing-machine">Handheld Capper (HC-50)</Link></li>
                              <li><Link href="/cap-sealing-machine-desktop">Desktop Capper (DDX-450)</Link></li>
                              <li><Link href="/cap-sealing-machine-ropp">ROPP Capper (DK-50/D)</Link></li>
                              <li><Link href="/can-sealing-machine-lt160">Can Sealer (LT-160)</Link></li>
                            </ul>
                          </div>

                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-box-tissue"></i> Carton & L-Sealing</div>
                            <ul className="group-link-list">
                              <li><Link href="/carton-sealing-machine">Carton Sealing Machine</Link></li>
                              <li><Link href="/l-sealing-machine">L Sealing Machine</Link></li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {activeCategory === 'wrapping' && (
                        <div className="mega-category-grid">
                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-scroll"></i> Wrapping Machinery</div>
                            <ul className="group-link-list">
                              <li><Link href="/stretch-wrapping-machine">Stretch Wrapping Machine</Link></li>
                              <li><Link href="/shrink-wrapping-machine">Shrink Wrapping Machine</Link></li>
                              <li><Link href="/web-sealer-machine">Web Sealer Machine</Link></li>
                              <li><Link href="/box-strapping-machine">Box Strapping Machine</Link></li>
                            </ul>
                          </div>

                          <div className="mega-group-col" style={{ gridColumn: 'span 2' }}>
                            <div className="group-col-header"><i className="fas fa-boxes"></i> Auto Carton Packing Line</div>
                            <ul className="group-link-list grid-2-col">
                              <li><Link href="/automatic-carton-packing-line">Complete Auto Line Overview</Link></li>
                              <li><Link href="/case-erector">Case Erector (CF-20TX)</Link></li>
                              <li><Link href="/auto-flap-carton-sealer">Auto Flap Sealer (CF-20TX)</Link></li>
                              <li><Link href="/edge-sealing-machine">Edge Sealer (MH-FJ-P1)</Link></li>
                              <li><Link href="/automatic-strapping-machine">Strapping Machine (MH-102A)</Link></li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {activeCategory === 'automation' && (
                        <div className="mega-category-grid">
                          <div className="mega-group-col">
                            <div className="group-col-header"><i className="fas fa-tag"></i> Bottle Labelling</div>
                            <ul className="group-link-list">
                              <li><Link href="/bottle-labelling-machine">Semi Auto Labelling</Link></li>
                              <li><Link href="/bottle-labelling-machine-auto">Automatic Labelling</Link></li>
                            </ul>
                            <div className="group-col-header" style={{ marginTop: '1.5rem' }}><i className="fas fa-dolly-flatbed"></i> Conveyors & Feeders</div>
                            <ul className="group-link-list">
                              <li><Link href="/conveyor">Standard Conveyors (CB)</Link></li>
                              <li><Link href="/paging-machine">Paging Machine (CPM-300)</Link></li>
                            </ul>
                          </div>

                          <div className="mega-group-col" style={{ gridColumn: 'span 2' }}>
                            <div className="group-col-header"><i className="fas fa-barcode"></i> Coding & Marking Printers</div>
                            <ul className="group-link-list grid-2-col">
                              <li><Link href="/coding-machine">Online Ribbon Coding (HP-241G)</Link></li>
                              <li><Link href="/coding-machine-tij">Thermal Inkjet (QM Series)</Link></li>
                              <li><Link href="/coding-machine-tij-7000">Thermal Inkjet (7000 Series)</Link></li>
                              <li><Link href="/coding-machine-cij">Continuous Inkjet (CIJ)</Link></li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
            
            <div className="nav-cta desktop-only">
              <Link href="/#contact" className="btn btn-primary pill-btn">Get a Quote <i className="fas fa-arrow-right cta-icon"></i></Link>
            </div>

            {/* Hamburger Menu Icon (Mobile Only) */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <img src="/logo_01.png" alt="Bhawani Machines Logo" style={{ height: '40px' }} />
          <button className="close-sidebar-btn" onClick={closeMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="mobile-sidebar-content">
          <Link href="/" onClick={closeMobileMenu} className="mobile-nav-link">Home</Link>
          <Link href="/about" onClick={closeMobileMenu} className="mobile-nav-link">About Us</Link>
          
          <div className="mobile-nav-group">
            <span className="mobile-nav-link-heading">Products <i className="fas fa-chevron-down" style={{fontSize: '0.8rem', marginLeft: '5px'}}></i></span>
            
            <div className="mobile-sub-group">
              <div className="mobile-sub-heading">Packaging</div>
              <Link href="/filling-machine" onClick={closeMobileMenu}>Particle Filling (Table Type)</Link>
              <Link href="/large-particle-filling-machine" onClick={closeMobileMenu}>Particle Filling (Floor Type)</Link>
              <Link href="/powder-filling-machine" onClick={closeMobileMenu}>Powder Filling Machine</Link>
              <Link href="/liquid-filling-machine" onClick={closeMobileMenu}>Liquid Filling (Digital)</Link>
              <Link href="/pneumatic-liquid-filling-machine" onClick={closeMobileMenu}>Liquid Filling (Pneumatic)</Link>
              <Link href="/double-nozzle-filling-machine" onClick={closeMobileMenu}>Double Nozzle Filling</Link>
              <Link href="/paste-filling-machine" onClick={closeMobileMenu}>Paste Filling Machine (Pneumatic)</Link>
              <Link href="/manual-paste-filling-machine" onClick={closeMobileMenu}>Manual Paste Filling</Link>
              <Link href="/automatic-pouch-packing-machine" onClick={closeMobileMenu}>Auto Pouch Packing (100 Series)</Link>
              <Link href="/automatic-particle-filling-machine-500" onClick={closeMobileMenu}>Auto Pouch Packing (500 Series)</Link>
              <Link href="/automatic-particle-filling-machine-1000" onClick={closeMobileMenu}>Auto Pouch Packing (1000 Series)</Link>
              <Link href="/automatic-particle-filling-machine-5000" onClick={closeMobileMenu}>Auto Pouch Packing (5000 Series)</Link>
              <Link href="/automatic-particle-filling-machine-four-head" onClick={closeMobileMenu}>Auto Pouch Packing (Four Head)</Link>
              <Link href="/automatic-powder-filling-machine" onClick={closeMobileMenu}>Auto Powder Packing (APF)</Link>
              <Link href="/automatic-paste-filling-machine" onClick={closeMobileMenu}>Auto Paste Packing (AF)</Link>
              <Link href="/automatic-paste-filling-machine-mixer" onClick={closeMobileMenu}>Auto Paste Packing (AFM)</Link>
              <Link href="/flow-wrap-machine" onClick={closeMobileMenu}>Flow Wrap Machine</Link>
              <Link href="/vacuum-packaging-machine" onClick={closeMobileMenu}>Vacuum Packaging (Single Chamber)</Link>
              <Link href="/vacuum-packaging-machine-double" onClick={closeMobileMenu}>Vacuum Packaging (Double Chamber)</Link>
              <Link href="/vacuum-packaging-machine-outside" onClick={closeMobileMenu}>Vacuum Packaging (Outside Chamber)</Link>
            </div>

            <div className="mobile-sub-group">
              <div className="mobile-sub-heading">Sealing</div>
              <Link href="/continuous-band-sealer" onClick={closeMobileMenu}>Continuous Band Sealer (FR-900)</Link>
              <Link href="/continuous-band-sealer-1100" onClick={closeMobileMenu}>Continuous Band Sealer (FR-1100)</Link>
              <Link href="/induction-sealing-machine" onClick={closeMobileMenu}>Induction Sealer (Manual)</Link>
              <Link href="/induction-sealing-machine-continuous" onClick={closeMobileMenu}>Induction Sealer (Continuous)</Link>
              <Link href="/cap-sealing-machine" onClick={closeMobileMenu}>Cap Sealing (Handheld HC-50)</Link>
              <Link href="/cap-sealing-machine-desktop" onClick={closeMobileMenu}>Cap Sealing (Desktop DDX-450)</Link>
              <Link href="/cap-sealing-machine-ropp" onClick={closeMobileMenu}>ROPP Capper (DK-50/D)</Link>
              <Link href="/can-sealing-machine-lt160" onClick={closeMobileMenu}>Can Sealer (LT-160)</Link>
              <Link href="/carton-sealing-machine" onClick={closeMobileMenu}>Carton Sealing Machine</Link>
              <Link href="/l-sealing-machine" onClick={closeMobileMenu}>L Sealing Machine</Link>
            </div>

            <div className="mobile-sub-group">
              <div className="mobile-sub-heading">Wrapping & Strapping</div>
              <Link href="/stretch-wrapping-machine" onClick={closeMobileMenu}>Stretch Wrapping Machine</Link>
              <Link href="/shrink-wrapping-machine" onClick={closeMobileMenu}>Shrink Wrapping Machine</Link>
              <Link href="/web-sealer-machine" onClick={closeMobileMenu}>Web Sealer Machine</Link>
              <Link href="/box-strapping-machine" onClick={closeMobileMenu}>Box Strapping Machine</Link>
              <Link href="/automatic-carton-packing-line" onClick={closeMobileMenu} style={{ fontWeight: '600' }}>Auto Carton Packing Line</Link>
              <div style={{ paddingLeft: '15px' }}>
                <Link href="/case-erector" onClick={closeMobileMenu}>- Case Erector</Link>
                <Link href="/auto-flap-carton-sealer" onClick={closeMobileMenu}>- Auto Flap Sealer</Link>
                <Link href="/edge-sealing-machine" onClick={closeMobileMenu}>- Edge Sealer</Link>
                <Link href="/automatic-strapping-machine" onClick={closeMobileMenu}>- Strapping Machine</Link>
              </div>
            </div>

            <div className="mobile-sub-group">
              <div className="mobile-sub-heading">Automation & Conveying</div>
              <Link href="/bottle-labelling-machine" onClick={closeMobileMenu}>Bottle Labelling (Semi Auto)</Link>
              <Link href="/bottle-labelling-machine-auto" onClick={closeMobileMenu}>Bottle Labelling (Automatic)</Link>
              <Link href="/conveyor" onClick={closeMobileMenu}>Standard Conveyors</Link>
              <Link href="/paging-machine" onClick={closeMobileMenu}>Paging Machine (Friction Feeder)</Link>
              <Link href="/coding-machine" onClick={closeMobileMenu}>Online Ribbon Coding</Link>
              <Link href="/coding-machine-tij" onClick={closeMobileMenu}>Thermal Inkjet (QM Series)</Link>
              <Link href="/coding-machine-tij-7000" onClick={closeMobileMenu}>Thermal Inkjet (7000 Series)</Link>
              <Link href="/coding-machine-cij" onClick={closeMobileMenu}>Continuous Inkjet (CIJ)</Link>
            </div>
          </div>
          
          <Link href="/gallery" onClick={closeMobileMenu} className="mobile-nav-link">Gallery</Link>
          <Link href="/contact" onClick={closeMobileMenu} className="mobile-nav-link">Contact Us</Link>
          
          <div style={{ marginTop: '20px', padding: '15px' }}>
            <Link href="/#contact" onClick={closeMobileMenu} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get a Quote</Link>
          </div>
        </div>
      </div>
    </>
  );
}
