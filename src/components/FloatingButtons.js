"use client";

import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating-buttons-container">
      <a href="https://wa.me/917517950451" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp-btn" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      
      <a href="tel:+917038300451" className="float-btn call-btn" aria-label="Call Us">
        <i className="fas fa-phone-alt"></i>
      </a>

      {showTopBtn && (
        <button onClick={scrollToTop} className="float-btn scroll-top-btn" aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
