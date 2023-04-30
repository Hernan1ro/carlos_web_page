import styles from "../styles/containers/quotes.module.css";
import { useRouter } from "next/router";

export const Quotes = () => {
  const { locale } = useRouter();

  const valueText = {
    "en-US": {
      h2: "My courses",
      btn: "Get more",
      p: "",
      solutions: [
        {
          name: "Project Management",
          image: "curso_1",
          p: "We are a team prepared to support you in your needs in the management of your projects.",
        },
        {
          name: "Service and customer experience",
          image: "curso_2",
          p: "We provide a qualitative and quantitative methodology to enhance your service experience model",
        },
      ],
    },
    "es-ES": {
      h2: "Mis cursos",
      btn: "Obtener más información",
      solutions: [
        {
          name: "Escuela Sabana de retazos",
          image: "curso_1",
          p: "Busca ayudar a potencializar tu desarrollo como persona y la construcción de tu branding personal",
          p2: " Aprenderás a construir una imagen sólida y coherente de ti mismo, tanto en línea como en la vida real. Con un enfoque basado en resultados y en la aplicación práctica, te mostraremos cómo presentarte de manera impactante y efectiva, y cómo desarrollar una presencia poderosa que te diferencie de la multitud.",
        },
        {
          name: "Escuela de servicio",
          image: "curso_2",
          p: "El servicio como la herramienta poderosa parta transformar realidades",
          p2: "Aprenderás cómo puedes ayudar a los demás mientras mejoras tu propia vida, y cómo el servicio puede ser la herramienta más valiosa que tengas en tu arsenal. Con un enfoque basado en la empatía y la compasión, aprenderás cómo puedes hacer una diferencia real en la vida de los demás y en la tuya.",
        },
      ],
    },
  };

  const { solutions, h2, btn } = valueText[locale];

  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <div className={styles.grid}>
          <div className={styles.text_container}>
            <h4>Mis valores y visión</h4>
            <img
              className={styles.author}
              src="/covey.png"
              alt="Carlos fuentes"
            />
            <h5>Stephen Covey</h5>
            <p className={styles.description}>
              “Quizá la habilidad más importante a la hora de tratar con
              personas es la de saber escuchar, que no es otra cosa que voluntad
              para entender a la otra parte”.
            </p>
            <div className={styles.dots}>
              <div className={styles.active}></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <img
            className={styles.carlos_img}
            src="/carlos_quotes.png"
            alt="Carlos fuentes"
          />
        </div>
      </div>
    </section>
  );
};
