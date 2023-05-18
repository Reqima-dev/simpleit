import React from "react";
import "../styles/aboutArea.css";
import AboutAreaImg from "../assets/01.png";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <section className="container">
      <div className="about_area ">
        <div className="contentArea">
          <div className="left_area">
            <img src={AboutAreaImg} alt="AboutAreaImg" />
          </div>
          <div className="right_area">
            <div className="site-heading">
              <span>À PROPOS DE NOUS</span>
              <h2>
                Nous offrons des <span> solutions informatiques </span>
                professionnelles pour les entreprises
              </h2>
            </div>
            <p>
              SIMPLE IT se propose d’accompagner votre entreprise dans la
              réalisation de ses systèmes d’information. La prise en compte de
              vos spécificités et de vos domaines d’activités, la force et la
              qualité de nos services, font de SIMPLE IT un partenaire de
              premier choix.
            </p>
            <ul>
              <li>
                <span class="material-icons-sharp"> check_circle </span>
                <p>Gestion de projet efficace</p>
              </li>
              <li>
                <span class="material-icons-sharp"> check_circle </span>
                <p>Sécurité de l'information</p>
              </li>
              <li>
                <span class="material-icons-sharp"> check_circle </span>
                <p>Collaboration et partenariats</p>
              </li>
            </ul>
            <button className="theme-btn">
              <Link to="/about">DÉCOUVRIR PLUS</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
