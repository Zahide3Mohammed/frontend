import React, { useState, useEffect } from 'react';
import './teste.Module.css';

export default function HallaMaghreb() {
  const [current, setCurrent] = useState(0);
  const images = [
    "images/img1.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="halla-wrapper">
      <div className="marquee">
                <div className="marquee-track">
                    <span>Hello</span>
                    <span>Bonjour</span>
                    <span>Hola</span>
                    <span>مرحبا</span>
                    <span>ⴰⵣⵓⵍ</span>
                    <span>Olá</span>
                    <span>नमस्ते</span>
                    <span>你好</span>
                    <span>Ciao</span>
                    <span>Merhaba</span>
                    <span>Hei</span>
                    <span>Hej</span>
                    <span>Hello</span>
                    <span>Bonjour</span>
                    <span>Hola</span>
                    <span>مرحبا</span>
                    <span>ⴰⵣⵓⵍ</span>
                    <span>Olá</span>
                    <span>नमस्ते</span>
                    <span>你好</span>
                    <span>Ciao</span>
                    <span>Merhaba</span>
                    <span>Hei</span>
                    <span>Hej</span>
                </div>
            </div>
      {/* الخلفية: صور كاتباع بهدوء */}
      <div className="bg-container">
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`bg-img ${i === current ? 'active' : ''}`} 
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="dark-overlay"></div>
      </div>

      {/* المنيو العلوي */}
      <nav className="top-nav">
        <div className="logo">HALLA<span>MAGHREB</span></div>
        <button className="join-btn">JOIN THE CIRCLE</button>
      </nav>

      {/* المحتوى الرئيسي */}
      <main className="main-content">
        <div className="text-section">
          <p className="subtitle">MOROCCO'S PREMIER DESTINATION</p>
          <h1 className="main-title">Heritage <br/><span>Reimagined.</span></h1>
        </div>

        <div className="card-section">
          <div className="glass-card">
            <span className="live-tag">LIVE NOW</span>
            <h3>Cultural Exchange</h3>
            <p>Join our global community in a unique journey through Moroccan hospitality.</p>
            <button className="explore-btn">EXPLORE →</button>
          </div>
        </div>
      </main>

      {/* مؤشر الصور الأسفل */}
      <div className="indicators">
        {images.map((_, i) => (
          <div key={i} className={`line ${i === current ? 'active' : ''}`} />
        ))}
      </div>
      <svg className="wave" viewBox="0 0 1440 120"  preserveAspectRatio="none">
    <path d="M0,60 C120,100 240,20 360,40 C480,60 600,100 720,80 C840,60 960,20 1080,40 C1200,60 1320,100 1440,80 L1440,120 L0,120 Z" fill="white"/>
</svg>
    </div>
  );
}