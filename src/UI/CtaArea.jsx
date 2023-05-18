import React from "react";
import "../styles/ctaArea.css";
import shape3 from "../assets/shape-3.png";
import { Link } from "react-router-dom";

const CtaArea = () => {
  return (
    <div className="cta-area">
      <div className="cta-row">
        <div className="cta-content">
          <h5>NOUS OFFRONS UN SERVICE DE QUALITÉ</h5>
          <h2>Solutions informatiques et services technologiques</h2>

          <Link className="cta-btn">CONTACTEZ-NOUS</Link>
        </div>
      </div>
      <div className="cta-shape">
        <img src={shape3} alt="" />
      </div>
    </div>
  );
};

export default CtaArea;
