"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <img src="/logo.png" alt="Bhawani Machines Logo" style={{ height: '70px', width: 'auto' }} />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="nav-links desktop-only">
              <Link href="/" className="active">Home</Link>
              <Link href="/about">About Us</Link>
              <div className="dropdown">
                <Link href="/products">Products <i className="fas fa-chevron-down dropdown-icon"></i></Link>
                <div className="dropdown-content">
                  <div className="header-container mega-menu-container">
                    {/* Column 1 */}
                    <div className="mega-menu-col">
                      <div className="mega-menu-col-header">01</div>
                      <div className="mega-menu-col-title">PACKAGING</div>
                      <ul className="mega-menu-list">
                        <li className="nested-dropdown">
                          <Link href="#" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <i className="fas fa-box-open mega-menu-icon"></i> Filling Machine <i className="fas fa-angle-right" style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#a0aec0' }}></i>
                          </Link>
                          <div className="nested-dropdown-content">
                            <Link href="/filling-machine">Particle - Table Type</Link>
                            <Link href="/large-particle-filling-machine">Particle - Floor Standing</Link>
                            <Link href="/powder-filling-machine">Powder Type</Link>
                            <Link href="/liquid-filling-machine">Liquid - Digital</Link>
                            <Link href="/pneumatic-liquid-filling-machine">Liquid - Pneumatic</Link>
                            <Link href="/paste-filling-machine">Paste Type</Link>
                          </div>
                        </li>
                        <li><Link href="/automatic-pouch-packing-machine"><i className="fas fa-shopping-bag mega-menu-icon"></i> Automatic Pouch Packing Machine</Link></li>
                        <li><Link href="/flow-wrap-machine"><i className="fas fa-box mega-menu-icon"></i> Flow Wrap Machine</Link></li>
                        <li><Link href="/vacuum-packaging-machine"><i className="fas fa-cube mega-menu-icon"></i> Vacuum Packaging Machine</Link></li>
                      </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="mega-menu-col">
                      <div className="mega-menu-col-header">02</div>
                      <div className="mega-menu-col-title">SEALING</div>
                      <ul className="mega-menu-list">
                        <li><Link href="/continuous-band-sealer"><i className="fas fa-tape mega-menu-icon"></i> Continuous Band Sealer</Link></li>
                        <li><Link href="/induction-sealing-machine"><i className="fas fa-fire mega-menu-icon"></i> Induction Sealing Machine</Link></li>
                        <li><Link href="/cap-sealing-machine"><i className="fas fa-prescription-bottle mega-menu-icon"></i> Cap Sealing Machine</Link></li>
                        <li><Link href="/carton-sealing-machine"><i className="fas fa-box-tissue mega-menu-icon"></i> Carton Sealing Machine</Link></li>
                        <li><Link href="/l-sealing-machine"><i className="fas fa-expand mega-menu-icon"></i> L Sealing Machine</Link></li>
                      </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="mega-menu-col">
                      <div className="mega-menu-col-header">03</div>
                      <div className="mega-menu-col-title">WRAPPING & STRAPPING</div>
                      <ul className="mega-menu-list">
                        <li><Link href="/stretch-wrapping-machine"><i className="fas fa-scroll mega-menu-icon"></i> Stretch Wrapping Machine</Link></li>
                        <li><Link href="/shrink-wrapping-machine"><i className="fas fa-layer-group mega-menu-icon"></i> Shrink Wrapping Machine</Link></li>
                        <li><Link href="/box-strapping-machine"><i className="fas fa-pallet mega-menu-icon"></i> Box Strapping Machine</Link></li>
                        <li><Link href="/automatic-carton-packing-line"><i className="fas fa-boxes mega-menu-icon"></i> Auto Carton Packing Line</Link></li>
                      </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="mega-menu-col">
                      <div className="mega-menu-col-header">04</div>
                      <div className="mega-menu-col-title">AUTOMATION & CONVEYING</div>
                      <ul className="mega-menu-list">
                        <li><Link href="/bottle-labelling-machine"><i className="fas fa-tag mega-menu-icon"></i> Bottle Labelling Machine</Link></li>
                        <li><Link href="/conveyor"><i className="fas fa-dolly-flatbed mega-menu-icon"></i> Conveyor</Link></li>
                        <li><Link href="/coding-machine"><i className="fas fa-barcode mega-menu-icon"></i> Coding Machine</Link></li>
                      </ul>
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
          <img src="/logo.png" alt="Bhawani Machines Logo" style={{ height: '40px' }} />
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
              <Link href="/paste-filling-machine" onClick={closeMobileMenu}>Paste Filling Machine</Link>
              <Link href="/automatic-pouch-packing-machine" onClick={closeMobileMenu}>Auto Pouch Packing Machine</Link>
              <Link href="/flow-wrap-machine" onClick={closeMobileMenu}>Flow Wrap Machine</Link>
              <Link href="/vacuum-packaging-machine" onClick={closeMobileMenu}>Vacuum Packaging Machine</Link>
            </div>

            <div className="mobile-sub-group">
              <div className="mobile-sub-heading">Sealing</div>
              <Link href="/continuous-band-sealer" onClick={closeMobileMenu}>Continuous Band Sealer</Link>
              <Link href="/induction-sealing-machine" onClick={closeMobileMenu}>Induction Sealing Machine</Link>
              <Link href="/cap-sealing-machine" onClick={closeMobileMenu}>Cap Sealing Machine</Link>
              <Link href="/carton-sealing-machine" onClick={closeMobileMenu}>Carton Sealing Machine</Link>
              <Link href="/l-sealing-machine" onClick={closeMobileMenu}>L Sealing Machine</Link>
            </div>

            <div className="mobile-sub-group">
              <div className="mobile-sub-heading">Wrapping & Strapping</div>
              <Link href="/stretch-wrapping-machine" onClick={closeMobileMenu}>Stretch Wrapping Machine</Link>
              <Link href="/shrink-wrapping-machine" onClick={closeMobileMenu}>Shrink Wrapping Machine</Link>
              <Link href="/box-strapping-machine" onClick={closeMobileMenu}>Box Strapping Machine</Link>
              <Link href="/automatic-carton-packing-line" onClick={closeMobileMenu}>Auto Carton Packing Line</Link>
            </div>

            <div className="mobile-sub-group">
              <div className="mobile-sub-heading">Automation & Conveying</div>
              <Link href="/bottle-labelling-machine" onClick={closeMobileMenu}>Bottle Labelling Machine</Link>
              <Link href="/conveyor" onClick={closeMobileMenu}>Conveyor</Link>
              <Link href="/coding-machine" onClick={closeMobileMenu}>Coding Machine</Link>
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
