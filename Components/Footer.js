import { useState } from "react";
import styles from "../styles/containers/footer.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = ({ report }) => {
  const [view, setView] = useState(false);
  const { locale } = useRouter();
  const localFlag = {
    "en-US": {
      url: "/assets/icons/en.jpg",
      home: "Home",
      about: "About",
      courses: "Courses",
      values: "Values",
      book: "Book",
      reflections: "Reflections",
      contact: "Contact",
      videos: "Videos",
    },
    "es-ES": {
      url: "/assets/icons/es.jpg",
      home: "Inicio",
      about: "Perfil",
      courses: "Cursos",
      values: "Valores",
      book: "Libro",
      reflections: "Reflexiones",
      contact: "Contacto",
      videos: "Videos",
    },
  };

  const {
    url,
    home,
    book,
    contact,
    videos,
    courses,
    about,
    values,
    reflections,
  } = localFlag[locale];

  const classReport = {
    report: styles.report,
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.box2}>
          <ul>
            <li>
              <a href="#hero">{home}</a>
            </li>
            <li>
              <a href="#about">{about}</a>
            </li>
            <li>
              <a href="#cursos">{courses}</a>
            </li>
            <li>
              <a href="#valores">{values}</a>
            </li>
            <li>
              <a href="#libro">{book}</a>
            </li>
            <li>
              <a href="#reflexiones">{reflections}</a>
            </li>
            <li>
              <a href="#videos">{videos}</a>
            </li>
          </ul>
          <img src="/assets/brandlogo/logo.png" alt="Carlos Fuentes" />
        </div>
      </div>
    </footer>
  );
};
