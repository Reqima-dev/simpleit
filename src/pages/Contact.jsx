import React, { useEffect } from "react";
import PageHero from "../components/PageHero/PageHero";
import Helmet from "../components/Helmet/Helmet";

import "../styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Contact US">
      <PageHero pageTitle={"Contactez-nous"} currentPage={"contactez-nous"} />
      <section className="container">
        <div className="contact-wrapper">
          <div className="row">
            <div className="rowLeft">
              <div className="contact-form">
                <div className="contact-form-header">
                  <h2>Entrer en contact</h2>
                  <p>
                    Nous sommes disponibles pour vous écouter. Remplissez ce
                    formulaire
                  </p>
                </div>
                <form action="">
                  <div className="formleft">
                    <div className="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        placeholder="Votre Nom"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Votre Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Objet du message"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Rédigez votre message"
                    />
                  </div>
                  <button type="submit" class="theme-btn">
                    Envoyer le message
                    <i class="bx bx-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bxs-map"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Adresse de bureau</h5>
                  <p>
                    Lot 1398, en face Eglise Catholique, Sainte Rita,
                    Cotonou-Bénin
                  </p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bx-phone"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Appelez-nous</h5>
                  <p>+229 61 05 22 51 / 96 48 99 65</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bx-envelope"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Envoyez-nous un email</h5>
                  <p>info@simple.bj</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bx-time-five"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Bureau ouvert</h5>
                  <p>Lundi - Vendredi (08h - 17h)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1152471798778!2d2.3991672242636506!3d6.37912182482581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102355bf661996c1%3A0x8805f68a3f887618!2sSimple%20IT!5e0!3m2!1sfr!2sbj!4v1684418103368!5m2!1sfr!2sbj"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Adresse Google Maps Simple IT"
          ></iframe>
        </div>
      </section>
    </Helmet>
  );
};

export default Contact;
