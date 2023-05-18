import React from "react";
import "../styles/aboutArea.css";
import SkillsAreaImg from "../assets/01 (1).png";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <section className="container">
      <div className="about_area">
        <div className="contentArea">
          <div className="left_area">
            <img src={SkillsAreaImg} alt="SkillsAreaImg" />
          </div>
          <div className="right_area">
            <div class="site-heading">
              <span>NOS COMPÉTENCES</span>
              <h2>
                Nous vous offrons le
                <span> meilleur service informatique </span>et technologique
              </h2>
            </div>
           
            <div class="skills-section">
              <div class="progress-box">
                <h5>
                  CONSEIL EN INFORMATIQUE
                  <span>60%</span>
                </h5>
                <div class="progressbar"></div>
              </div>
              <div class="progress-box">
                <h5>
                  DÉVELOPPEMENT WEB <span>85%</span>
                </h5>
                <div class="progressbar bar2"></div>
              </div>
              <div class="progress-box">
                <h5>
                  DÉVELOPPEMENT DE LOGICIELS <span>75%</span>
                </h5>
                <div class="progressbar bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
