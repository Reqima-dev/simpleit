import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
import herobg from "../assets/hero.png";
import shape from "../assets/shape-1.png";

const Hero = () => {
  return (
    <section className="sectionHero">
      <div class="hero_wrapper">
        <div class="heroContainer container">
          <div class="left">
            <h6>LES MEILLEURES SOLUTIONS INFORMATIQUES POUR VOUS</h6>
            <h1>
              ENTREPRISE DE SOLUTIONS INFORMATIQUES ET DE SERVICES
              TECHNOLOGIQUES
            </h1>
            <p>
              Simple IT privilégie les technologies MICROSOFT telles que .NET,
              SQLServer, WINDOWS AZURE. Cette orientation et l’expertise qui
              s’en dégage nous permettent de proposer à notre clientèle des
              solutions évolutives et robustes.
            </p>
            <div class="heroBTN">
              <Link to="/contact" className="btnTheme2 theme-btn">
                Contact Nous
              </Link>
              <Link to="/about" className="btnTheme theme-btn">
                About Nous
              </Link>
            </div>
          </div>
          <div class="right">
            <img src={herobg} alt="Hero" />
          </div>
        </div>
        <div class="hero-shape">
          <img src={shape} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
