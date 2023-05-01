import React, { useEffect } from "react";
import styles from "../styles/containers/about.module.css";
import { useRouter } from "next/router";

export const About = () => {
  const { locale } = useRouter();

  const textContent = {
    "en-US": {
      about:
        "I have been a teacher and coach for more than 10 years, as well as a consultant and trainer. and trainer. I chose the path of becoming a writer and in the process I have discovered the power of serving: To give in order to receive",
      p: "People impacted",
    },
    "es-ES": {
      about:
        "Soy docente y Coach desde hace más de 10 años, además de consultor y capacitador. Elegí el camino de ser escritor y en el proceso he descubierto el poder de servir: De dar para recibir",
      p: "Personas impactadas",
    },
  };

  const { about, p } = textContent[locale];
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__container}>
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
            <p>{p}</p>
          </div>
          <div className={styles.description_container}>
            <p className={styles.about__description}>{about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
