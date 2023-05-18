import React, { useState } from "react";
import "../styles/caseArea.css";
import { caseData } from "../data/casesData";
import { Link } from "react-router-dom";

export function FilterContainer() {
  const [categorieFiltre, setCategorieFiltre] = useState("tous");
  const [transition, setTransition] = useState(false);
  const filtrerParCategorie = (categ) => {
    setCategorieFiltre(categ);
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 500);
  };
  const produitsFiltres =
    categorieFiltre === "tous"
      ? caseData
      : caseData.filter((caseData) => caseData.categ === categorieFiltre);

  return (
    <div className="caseFilterContainer">
      <div className="filterBtn">
        <button
          onClick={() => filtrerParCategorie("tous")}
          className={categorieFiltre === "tous" ? "current" : "btn"}
        >
          Tout voir
        </button>
        <button
          onClick={() => filtrerParCategorie("DESIGN")}
          className={categorieFiltre === "DESIGN" ? "current" : "btn"}
        >
          Site Web
        </button>
        <button
          onClick={() => filtrerParCategorie("DEVELOPMENT")}
          className={categorieFiltre === "DEVELOPMENT" ? "current" : "btn"}
        >
          Logiciels
        </button>
      </div>
      <div className="caseFilterContext">
        {produitsFiltres.map((item) => {
          return (
            <div
              className={
                transition ? " filter-item filter-item-active" : "filter-item"
              }
              key={item.id}
            >
              <div className="case_img">
                <img src={item.img} alt={item.Title} />
              </div>
              <div className="case_content">
                <div className="case-content-info">
                  <small>{item.overCateg}</small>
                  <Link
                    to={item.urlLink}
                    target="_blank"
                    className="case-title"
                  >
                    {item.Title}
                  </Link>
                </div>
                <Link to={item.urlLink} target="_blank" className="case-arrow">
                  <span class="material-icons-sharp">arrow_forward</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CasesArea = () => {
  return (
    <>
      <div className="service_area">
        <div className="cases_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">Produits</span>
            <h2 className="site-title">
              Nos <span>Produits</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              Découvrez notre gamme de produits innovants qui allient style,
              qualité et performance pour répondre à tous vos besoins.
            </p>
          </div>
          <FilterContainer />
        </div>
      </div>
    </>
  );
};

export default CasesArea;
