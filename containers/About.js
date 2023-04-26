import React, { useEffect } from "react";
import styles from "../styles/containers/about.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__container}>
          <h3>Carlos Fuentes</h3>
          <div className={styles.about__container_image}>
            <div className={styles.about__photo_container}>
              <img
                className={styles.about__photo}
                src="/carlos_about.png"
                alt="Hernán Mercado"
              />
              <div className={styles.social_media__container}>
                <a target="_blank" href="https://twitter.com/Hernan1ro">
                  <img
                    src="/icons/twitter.svg"
                    name="twitter"
                    className={styles.social_img}
                  />
                </a>
                <a target="_blank" href="https://github.com/Hernan1ro">
                  <img
                    src="/icons/facebook.svg"
                    name="facebook"
                    className={styles.social_img}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/hernan1ro/"
                >
                  <img
                    src="/icons/instagram.svg"
                    name="linkedin"
                    className={styles.social_img}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/hernan1ro/"
                >
                  <img
                    src="/icons/linkedin.svg"
                    name="linkedin"
                    className={styles.social_img}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.about__people}>
            <h3>+15.000</h3>
            <p>Personas impactadas</p>
          </div>
          <div className={styles.description_container}>
            <p className={styles.about__description}>
              Soy docente y Coach desde hace más de 10 años, además de consultor
              y capacitador. Elegí el camino de ser escritor y en el proceso he
              descubierto el poder de servir: De dar para recibir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
