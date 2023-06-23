import React from "react";
import "../styles/servicearea.css";
import { service } from "../data/serviceData";
import { Link } from "react-router-dom";

export function ServiceContent() {
  return (
    <div className="serviceContent">
      {service.map((item, id) => {
        return (
          <div className="service_item" key={id}>
            <div className="service-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="service-title">
              <Link to="#.">{item.title} </Link>
            </div>
            <p>{item.paragraph}</p>
            <div className="service-arrow"></div>
          </div>
        );
      })}
    </div>
  );
}

const ServiceArea = () => {
  return (
    <>
      <div className="service_area">
        <div className="service_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">SERVICES</span>
            <h2 className="site-title">
              Ce que nous <span>offrons</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              Nous vous proposons des solutions informatiques professionnelles
              pour les entreprises
            </p>
          </div>
          <ServiceContent />
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
