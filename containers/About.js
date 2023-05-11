import styles from "../styles/containers/about.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__container}>
          <div className={styles.about__container_image}>
            <div className={styles.about__photo_container}>
              <img
                data-aos="fade-up"
                className={styles.about__photo}
                src="/carlos_about.png"
                alt="Hernán Mercado"
              />
              <div
                data-aos="fade-up"
                className={styles.social_media__container}
              >
                {/* <a target="_blank" href="https://twitter.com/Hernan1ro">
                  <img
                    src="/icons/twitter.svg"
                    name="twitter"
                    className={styles.social_img}
                  />
                </a> */}
                {/* <a target="_blank" href="https://github.com/Hernan1ro">
                  <img
                    src="/icons/facebook.svg"
                    name="facebook"
                    className={styles.social_img}
                  />
                </a> */}
                <a
                  target="_blank"
                  href="https://www.instagram.com/cfuentes.co/"
                >
                  <img
                    src="/icons/instagram.svg"
                    name="linkedin"
                    className={styles.social_img}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/carlos-alberto-fuentes-montes-2a3b6023/"
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
          <div data-aos="fade-up" className={styles.about__people}>
            <h3 data-aos="fade-up">+15.000</h3>
            <p data-aos="fade-up">{p}</p>
          </div>
          <div data-aos="fade-up" className={styles.description_container}>
            <p className={styles.about__description}>{about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
