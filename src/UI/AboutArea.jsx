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
              SIMPLE IT est spécialisée dans la fourniture de solutions
              technologiques avancées pour nos clients. Nous mettons l'accent
              sur l'innovation et la qualité pour répondre aux besoins
              changeants du marché. Grâce à notre expertise approfondie et à
              notre approche axée sur le client, nous sommes en mesure de
              proposer des solutions sur mesure qui offrent une réelle valeur
              ajoutée.
            </p>
            <div className="valeur">
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
                <li>
                  <span class="material-icons-sharp"> check_circle </span>
                  <p>Engagement envers le client</p>
                </li>
              </ul>
              <ul>
                <li>
                  <span class="material-icons-sharp"> check_circle </span>
                  <p>Excellence </p>
                </li>
                <li>
                  <span class="material-icons-sharp"> check_circle </span>
                  <p>Collaboration </p>
                </li>
                <li>
                  <span class="material-icons-sharp"> check_circle </span>
                  <p>Intégrité </p>
                </li>
                <li>
                  <span class="material-icons-sharp"> check_circle </span>
                  <p>Innovation </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
