import { useState } from "react";
import styles from "../styles/containers/footer.module.css";
import { useRouter } from "next/router";

export const Footer = ({ report }) => {
  const [view, setView] = useState(false);
  const { locale } = useRouter();

  const Text = {
    "en-US": {
      text: "All rights reserved",
    },
    "es-ES": {
      text: "Todos los derechos reservados.",
    },
  };

  const { text } = Text[locale];

  const classReport = {
    report: styles.report,
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.box2}>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cursos">Cursos</a>
            </li>
            <li>
              <a href="#valores">Valores</a>
            </li>
            <li>
              <a href="#libro">Mi libro</a>
            </li>
            <li>
              <a href="#reflexiones">Reflexiones</a>
            </li>
            <li>
              <a href="#videos">Videos</a>
            </li>
            <li>
              <a href="#testimoniales">Testimoniales</a>
            </li>
          </ul>
          <img src="/assets/brandlogo/logo.png" alt="Carlos Fuentes" />
        </div>
      </div>
    </footer>
  );
};
