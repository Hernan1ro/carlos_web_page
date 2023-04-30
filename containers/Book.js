import React, { useEffect } from "react";
import styles from "../styles/containers/book.module.css";

export const Book = () => {
  return (
    <section id="libro" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__container}>
          <h3>Mi libro</h3>
          <div className={styles.about__container_image}>
            <div className={styles.about__photo_container}>
              <img
                className={styles.about__photo}
                src="/book_sinapsis.png"
                alt="Sabana de retazos"
              />
            </div>
          </div>
          <div className={styles.description_container}>
            <img
              className={styles.about__book_award}
              src="/book_award.png"
              alt="Sábana de retazos"
            />
            <div className={styles.about__description}>
              <p>Cualquier propósito, meta u objetivo ES POSIBLE.</p>
              <p>
                Esto plantea el autor en una charla sencilla, franca y muy amena
                donde expone 7 cualidades que debe cumplir tu propósito para ser
                alcanzable:
              </p>
              <p>
                ser <strong>específico</strong>, tener un{" "}
                <strong>tiempo</strong> para alacanzarlo, poder{" "}
                <strong>medirlo</strong>, ser <strong>realista</strong>, que te
                inspire, ser <strong>trascendente</strong> y por último que sea{" "}
                <strong>ético</strong>.
              </p>
              <p>
                La sábana de retazos es una anlogía a tu vida como una
                construcción imperfecta de retazos (dimensiones) que unidas
                forman una sábana hermosa, atractiva y de muchos colores.
              </p>
              <p>
                Una vez tienes un <strong>PROPÓSITO</strong> u objetivo claro es
                el momento de ir por él, es aquí donde te present a un
                manifiesto estructurado de cómo hacerlo utilizando los retazos
                que unen tu sabana:
              </p>
              <p>
                <strong>EL ENFOQUE</strong> representado con el blanco,{" "}
                <strong>LAS EMOCIONES</strong> de color rojo,{" "}
                <strong>LA ACCIÓN</strong> que simboliza el color naranja,{" "}
                <strong>LA DISCIPLINA</strong> abanderando el color azul y por
                último <strong>LA ACTITUD</strong> vestida de color amarillo.
                Estos retazos están cocidos con 4 hilos que representan los
                dones que los unen:{" "}
                <strong>Imaginar, elegir, dar, confiar.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
