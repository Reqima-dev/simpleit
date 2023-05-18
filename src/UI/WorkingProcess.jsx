import React from "react";
import "../styles/workingProcess.css";
import "../styles/servicearea.css";

import { workingData } from "../data/workingData";

const WorkingProcess = () => {
  return (
    <>
      <div className="service_area">
        <div className="service_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">PROCESSUS DE TRAVAIL</span>
            <h2 className="site-title">
              Comment ça <span>fonctionne</span>
            </h2>
            <div className="heading-divider"></div>
          </div>

          <div className="boxWorks">
            {workingData.map((item, id) => {
              return (
                <div className="works" key={id}>
                  <div className="process-single">
                    <div className="icon">
                      <span>0{item.id}</span>
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
