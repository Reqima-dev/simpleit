import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo01 from "../../assets/logo.png";

const quickLinks = [
  { path: "/about", display: "About Us" },
  { path: "#.", display: "FAQ's" },
  { path: "#.", display: "Terms Of Service" },
  { path: "#.", display: "Privacy policy" },
  { path: "#.", display: "Our Services" },
  { path: "#.", display: "Team Members" },
  { path: "#.", display: "Latest Blog" },
];
const serviceLinks = [
  { path: "#", display: "IT Solutions" },
  { path: "#.", display: "Web Development" },
  { path: "#.", display: "Digital Marketing" },
  { path: "#.", display: "App Development" },
  { path: "#.", display: "Networking Service" },
  { path: "#.", display: "SEO Optimization" },
  { path: "#.", display: "Data Analysis" },
];

const Footer = () => {
  return (
    <footer className=" footer_area">
      <div className="footer-widget container">
        <div className="footer_flex">
          <div className="footer_info">
            <Link className="footer-logo">
              <img src={logo01} alt="logo" />
            </Link>

            <div className="footer-contact">
              <ul>
                <li>
                  <i class="bx bxs-map"></i>Lot 1398, en face Eglise Catholique,{" "}
                  <br /> Sainte Rita, Cotonou-Bénin
                </li>
                <li>
                  <Link href="tel:+22996489965">
                    <i class="bx bx-phone"></i>+229 96 48 99 65
                  </Link>
                </li>
                <li>
                  <Link href="mailto:support@example.com">
                    <i class="bx bx-envelope"></i>info@simple.bj
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="footer-social">
              <li>
                <Link href="#">
                  <i class="bx bxl-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="bx bxl-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="bx bxl-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="bx bxl-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className="footer-widget-title">Liens rapides</h4>
            <ul className="footer-list">
              {quickLinks.map((links) => {
                return (
                  <li>
                    <Link to={links.path}>
                      <i class="bx bx-caret-right"></i>
                      {links.display}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_links footer_servicelinks">
            <h4 className="footer-widget-title">Nos services</h4>
            <ul className="footer-list">
              {serviceLinks.map((links) => {
                return (
                  <li>
                    <Link to={links.path}>
                      <i class="bx bx-caret-right"></i>
                      {links.display}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_links footerNewsletters">
            <h4 className="footer-widget-title">Newsletter</h4>
            <div className="footer-newsletter">
              <p>
                Abonnez-vous à notre newsletter pour obtenir les dernières mises
                à jour et nouvelles
              </p>
              <div className="subscribe-form">
                <form action="#">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <button class="theme-btn" type="submit">
                    Aboone toi <i class="bx bx-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyRow">
            <p className="copyright-text">
              © Copyright <span id="date">2023</span>
              <Link to="#."> Simple IT </Link>
            </p>

            <ul className="footer-menu">
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
                <Link href="#">Terms Of Services</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
