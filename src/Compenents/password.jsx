import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './password.Module.css'
import { translations } from '../element/translations';
import { useLanguage } from '../element/LanguageContext';

const images = ["/images/chta.png"];


export default function Password() {
const { language } = useLanguage();
const t = translations[language];
    
    return (
        <div className="app-layout">
            {/* --- LEFT SIDE: LED Slider --- */}
            <div className="slider-side">
                <div className="led-border"></div>
                <div className="slider-content">
                    {images.map((img, i) => (
                        <img key={i} src={img} className="bg-img active" alt="slide" />
                    ))}
                    <div className="dark-overlay"></div>
                    <div className="hero-text">
                        
                        <h1>Sécurité</h1>
                        <p>eizhfiohzepojfp</p>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: DYNAMIC FORM --- */}
            <div className="form-side">
              <table>
                <tr>
                  <td><h1>Créer un Fort Mote de Passe :</h1></td>
                </tr>
                <tr>
                  <td><label >Password :<br /><input type="text" /></label></td>
                </tr>
                <tr>
                  <td>
                    <label >Repeat Password :<br />
                      <input type="text" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="terms-row">
                      <label className="checkbox-container">
                        <input type="checkbox" required />
                        <span className="checkmark"></span>
                        I agree with <Link to="/terms">Terms & Conditions</Link>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>Create account!!</button>
                  </td>
                </tr>
              </table>
              
           
            </div>
        </div>
    );
}