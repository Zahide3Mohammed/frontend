import React, { useState, useEffect } from 'react';
import './header-style.Module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-wrapper">
      <header className={`floating-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          
          {/* Logo - Right Side (RTL) */}
          <div className="header-logo">
            <a href="/">PRO<span>JECT</span></a>
          </div>

          {/* Actions - Left Side */}
          <div className="header-actions">
            <a href="#contact" className="contact-link">اتصل بنا</a>
            <button className="btn-primary-pro">ابدأ التجربة</button>
            
            <div className="burger-menu">
              <div className="line"></div>
              <div className="line short"></div>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}