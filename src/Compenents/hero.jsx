import React, { useState, useEffect } from 'react';
import './Hero.Module.css';
import { Link } from 'react-router-dom';

export default function PremiumHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // صور الخلفية الكبيرة اللي كتبدل في الـ Hero
   const bgSlides = [
    "/images/img1.png", 
    "/images/img2.jpg",
    "/images/img3.png"
  ];

  const activities = [
    { id: 1, title: 'Sports ', tag: 'رياضة', img: '/images/football.png', size: 'large' },
    { id: 2, title: 'رحلة لأكادير', tag: 'سفر', img: '/images/agadir.png', size: 'small' },
    { id: 3, title: 'ليلة القهوة', tag: 'اجتماعي', img: '/images/coffee.jpg', size: 'medium' },
    { id: 4, title: 'Gaming Night', tag: 'ترفيه', img: '/images/gaming.jpg', size: 'small' },
    { id: 5, title: 'هايكينغ إيمليل', tag: 'مغامرة', img: '/images/hiking.jpg', size: 'medium' },
    { id: 6, title: 'وركشوب تصوير', tag: 'فن', img: '/images/photo.jpg', size: 'small' },
  ];

  // منطق تغيير خلفية الـ Hero تلقائياً
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === bgSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [bgSlides.length]);

  return (<>
    <div className="premium-page-container">
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
                    <span >Hej</span>
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
         
      <section className="activity-hero-section">
        <div className="hero-bg-slider">
          {bgSlides.map((slide, index) => (
            <div 
              key={index}
              className={`slide-img ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
          <div className="hero-overlay-dark"></div>
        </div>

        <div className="hero-content-inner">
          <div className="hero-info">
            <span className="badge">أكبر مجتمع في المغرب</span>
            <h1>مئات النشاطات <br/> <span className="text-gradient">كتسناك كل نهار</span></h1>
            <p>انضم لآلاف الشباب المغربي اللي كيعيشوا تجارب جديدة يومياً.</p>
            <div className="hero-btns">
              <Link to="/login" className="btn-main">اكتشف كولشي</Link>
              <button className="btn-video">كيفاش خدامين؟ <span>▶</span></button>
            </div>
          </div>

          <div className="activity-wall">
            {activities.map((act) => (
              <div key={act.id} className={`activity-card ${act.size}`}>
                {/* خلفية كل نشاط */}
                <div className="card-bg" style={{ backgroundImage: `url(${act.img})` }}></div>
                
                <div className="card-overlay">
                  <span className="card-tag">{act.tag}</span>
                  <h3>{act.title}</h3>
                  <button className="join-btn">انضم</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <svg className="wave" viewBox="0 0 1440 120"  preserveAspectRatio="none">
    <path d="M0,60 C120,100 240,20 360,40 C480,60 600,100 720,80 C840,60 960,20 1080,40 C1200,60 1320,100 1440,80 L1440,120 L0,120 Z" fill="white"/>
</svg>
      </section>
    </div>
    </>
  );
}