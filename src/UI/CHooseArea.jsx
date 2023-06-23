import React from "react";
import "../styles/choseArea.css"; 
import SkillsAreaImg2 from "../assets/01 (2).png";

const CHooseArea = () => {
  return (
    <div className="choice_area">
      <div className="choice_areaContainer">
        <div className="choiceLeft">
          <div className="site-heading">
            <span>POURQUOI NOUS CHOISIR</span>
            <h2>
              Nous mettons en valeur <span> le marché mondial </span>de votre
              entreprise
            </h2>
          </div>

          <ul className="choose-content">
            <li>
              <span class="material-icons-sharp"> check_circle </span>
              <div className="chooseBOx">
                <h5>Notre expérience</h5>
                <p>
                  Simple IT englobe une interface utilisateur conviviale, un
                  service client réactif, des produits fiables, une
                  personnalisation adaptée et une relation basée sur la
                  transparence, créant ainsi une expérience positive pour les
                  clients.
                </p>
              </div>
            </li>
            <li>
              <span class="material-icons-sharp"> check_circle </span>
              <div className="chooseBOx">
                <h5>Entreprise certifiée</h5>
                <p>
                  Simple IT privilégie les technologies MICROSOFT telles que
                  .NET, SQLServer, WINDOWS AZURE. Cette orientation et
                  l’expertise qui s’en dégage nous permettent de proposer à
                  notre clientèle des solutions évolutives et robustes.
                </p>
              </div>
            </li>
            <li>
              <span class="material-icons-sharp"> check_circle </span>
              <div className="chooseBOx">
                <h5>Mise à jour à vie</h5>
                <p>
                  Simple it ne laisse pas tomber les clients nous travaillons
                  avec eux pour leur fournir des mise à jour à vie après le
                  produit achetés
                </p>
              </div>
            </li>
          </ul>

          <button className="theme-btn">
            <Link to="#.">COMMENCER LE PROJET</Link>
          </button>
        </div>
        <div className="choiceRight">
          <img src={SkillsAreaImg2} alt="SkillsAreaImg2" />
        </div>
      </div>
    </div>
  );
};

export default CHooseArea;
