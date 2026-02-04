import { useState, useEffect } from "react";
import "./password.Module.css";
import { Link } from "react-router-dom";

export default function Password() {
  const images = [
    "/images/img1.png"
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="herog-form-container">
      {/* Left Sliding Images */}
      <div className="left-slider">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Right Form */}
      <div className="right-form">
        <h2>Formulaire</h2>
        <form>
          Password :
          <input type="text" placeholder="Password" />
          Repeat Password :
          <input type="text" placeholder="Repeat Password" />
          <button type="submit">Envoyer</button>
          <Link to="/Questions">page suivante</Link>
        </form>
      </div>
    </div>
  );
}
