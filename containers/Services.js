import styles from "../styles/containers/services.module.css";
import { Service } from "../Components/Service";
import { useRouter } from "next/router";

export const Services = () => {
  const { locale } = useRouter();

  const solutionsText = {
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

  const { solutions, h2, btn } = solutionsText[locale];

  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>{h2}</h2>
        <p>
          Ofrecemos soluciones de aprendizaje únicas que te ayudarán a alcanzar
          tus metas personales y profesionales. Conozca a continuación los
          cursos que tenemos disponibles para ti.
        </p>
        <div className={styles.grid}>
          {solutions.map((solution) => {
            const { name, image, p } = solution;
            return <Service name={name} img={image} p={p} btn={btn} />;
          })}
        </div>
        <div className={styles.grid}>
          <p className={styles.description}>
            Aprenderás a construir una imagen sólida y coherente de ti mismo,
            tanto en línea como en la vida real. Con un enfoque basado en
            resultados y en la aplicación práctica, te mostraremos cómo
            presentarte de manera impactante y efectiva, y cómo desarrollar una
            presencia poderosa que te diferencie de la multitud.
          </p>
          <p className={styles.description}>
            Aprenderás cómo puedes ayudar a los demás mientras mejoras tu propia
            vida, y cómo el servicio puede ser la herramienta más valiosa que
            tengas en tu arsenal. Con un enfoque basado en la empatía y la
            compasión, aprenderás cómo puedes hacer una diferencia real en la
            vida de los demás y en la tuya.
          </p>
        </div>
      </div>
    </section>
  );
};
