import styles from "../styles/containers/book.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Book = () => {
  const { locale } = useRouter();

  const textContent = {
    "en-US": {
      h3: "My book",
      description: {
        p1: "Any purpose, goal, or objective is POSSIBLE.",
        p2: "This is what the author suggests in a simple, honest, and enjoyable talk where he presents 7 qualities that your purpose must fulfill in order to be achievable:",
        p3: (
          <p>
            To be <strong>specific</strong>, have a <strong>time</strong> to
            achieve it, be able to <strong>measure</strong> it, be{" "}
            <strong>realistic</strong>, inspiring, <strong>transcendent</strong>
            , and lastly, be <strong>ethical</strong>.
          </p>
        ),
        p4: (
          <p>
            The patchwork sheet is an analogy to your life as an imperfect
            construction of patches (dimensions) that, when joined, form a
            beautiful, attractive, and colorful sheet.
          </p>
        ),
        p5: (
          <p>
            Once you have a clear <strong>PURPOSE</strong> or objective, it is
            time to go for it. This is where you are presented with a structured
            manifesto on how to do it, using the patches that make up your
            sheet:
          </p>
        ),
        p6: (
          <p>
            <strong>FOCUS</strong> is represented by the color white,{" "}
            <strong>EMOTIONS</strong> by red, <strong>ACTION</strong> by orange,{" "}
            <strong>DISCIPLINE</strong> by blue, and finally,{" "}
            <strong>ATTITUDE</strong> by yellow. These patches are sewn together
            with four threads that represent the gifts that unite them:{" "}
            <strong>Imagining, choosing, giving, trusting.</strong>
          </p>
        ),
      },
    },
    "es-ES": {
      h3: "Mi libro",
      description: {
        p1: "Cualquier propósito, meta u objetivo ES POSIBLE.",
        p2: "Esto plantea el autor en una charla sencilla, franca y muy amena donde expone 7 cualidades que debe cumplir tu propósito para ser alcanzable:",
        p3: (
          <p>
            ser <strong>específico</strong>, tener un <strong>tiempo</strong>{" "}
            para alacanzarlo, poder <strong>medirlo</strong>, ser{" "}
            <strong>realista</strong>, que te inspire, ser{" "}
            <strong>trascendente</strong> y por último que sea{" "}
            <strong>ético</strong>.
          </p>
        ),
        p4: (
          <p>
            La sábana de retazos es una anlogía a tu vida como una construcción
            imperfecta de retazos (dimensiones) que unidas forman una sábana
            hermosa, atractiva y de muchos colores.
          </p>
        ),
        p5: (
          <p>
            Una vez tienes un <strong>PROPÓSITO</strong> u objetivo claro es el
            momento de ir por él, es aquí donde te present a un manifiesto
            estructurado de cómo hacerlo utilizando los retazos que unen tu
            sabana:
          </p>
        ),
        p6: (
          <p>
            <strong>EL ENFOQUE</strong> representado con el blanco,{" "}
            <strong>LAS EMOCIONES</strong> de color rojo,{" "}
            <strong>LA ACCIÓN</strong> que simboliza el color naranja,{" "}
            <strong>LA DISCIPLINA</strong> abanderando el color azul y por
            último <strong>LA ACTITUD</strong> vestida de color amarillo. Estos
            retazos están cocidos con 4 hilos que representan los dones que los
            unen: <strong>Imaginar, elegir, dar, confiar.</strong>
          </p>
        ),
      },
    },
  };
  const {
    h3,
    description: { p1, p2, p3, p4, p5, p6 },
  } = textContent[locale];

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section id="libro" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__container}>
          <h3 data-aos="fade-up">{h3}</h3>
          <div className={styles.about__container_image}>
            <div className={styles.about__photo_container}>
              <img
                data-aos="fade-up"
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
              data-aos="fade-up"
            />
            <div data-aos="fade-up" className={styles.about__description}>
              <p>{p1}</p>
              <p>{p2}</p>
              {p3}
              {p4}
              {p5}
              {p6}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
