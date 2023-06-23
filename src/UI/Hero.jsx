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
            <h1>
              Des solutions évolutives et robustes avec les technologies
              Microsoft
            </h1>
            <p>
              Nous sommes une entreprise qui se spécialise dans les services
              technologiques et les solutions informatiques. En mettant l'accent
              sur les technologies Microsoft telles que .NET, SQL Server et
              Windows Azure, nous proposons à nos clients des solutions
              informatiques solides et évolutives.
            </p>
            <div class="heroBTN">
              <Link to="/contact" className="btnTheme2 theme-btn">
                Contactez-nous
              </Link>
              <Link to="/about" className="btnTheme theme-btn">
                Qui sommes nous ?
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
