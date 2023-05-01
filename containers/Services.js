import styles from "../styles/containers/services.module.css";
import { Service } from "../Components/Service";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Services = () => {
  const { locale } = useRouter();

  const solutionsText = {
    "en-US": {
      h2: "My courses",
      btn: "Get more information",
      p: "We offer unique learning solutions that will help you achieve your personal and professional goals. See below the courses we have available for you",
      solutions: [
        {
          name: "Sabana de retazos School",
          image: "curso_1",
          p: "Seeks to help you develop as a person and build your personal branding",
          p2: "You will learn how to build a strong and consistent image of yourself, both online and in real life. With a results-based approach and practical application, we'll show you how to present yourself in an impactful and effective way, and how to develop a powerful presence that sets you apart from the crowd",
        },
        {
          name: "Service and customer experience",
          image: "curso_2",
          p: "We provide a qualitative and quantitative methodology to enhance your service experience model",
          p2: "You will learn how you can help others while improving your own life, and how service can be the most valuable tool you have in your arsenal. With an approach based on empathy and compassion, you will learn how you can make a real difference in the lives of others and in your own",
        },
      ],
    },
    "es-ES": {
      h2: "Mis cursos",
      btn: "Obtener más información",
      p: "Ofrecemos soluciones de aprendizaje únicas que te ayudarán a alcanzar tus metas personales y profesionales. Conozca a continuación los cursos que tenemos disponibles para ti",
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

  const { solutions, h2, btn, p } = solutionsText[locale];

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section id="cursos" className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2 data-aos="fade-up">{h2}</h2>
        <p data-aos="fade-up">{p}</p>
        <div data-aos="fade-up" className={styles.grid}>
          {solutions.map((solution) => {
            const { name, image, p } = solution;
            return <Service name={name} img={image} p={p} btn={btn} />;
          })}
        </div>
        <div data-aos="fade-up" className={styles.grid}>
          {solutions.map((solution) => {
            const { p2 } = solution;
            return <p className={styles.description}>{p2}</p>;
          })}
        </div>
      </div>
    </section>
  );
};
