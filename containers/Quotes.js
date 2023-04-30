import { useState, useEffect } from "react";
import styles from "../styles/containers/quotes.module.css";
import { useRouter } from "next/router";

export const Quotes = () => {
  const { locale } = useRouter();
  const [index, setIndex] = useState(0);

  const quotes = [
    {
      word: "El enfoque",
      author: "Stephen Covey",
      img: "covey.png",
      text: '“Personas de éxito, personas de foco. Saber decir "no" es una de las virtudes más importantes para la meterialización de metas”',
    },
    {
      word: "El propósito",
      author: "Mark Twain",
      img: "twain_mark.jpg",
      text: "“Los dos días más importantes de tu vida son el día que naces y el días en que descubres porque”",
    },
    {
      word: "La acción",
      author: "Robin Sharma",
      img: "sharma.jpg",
      text: "“Si no actuas sobre la vida, ella actuará sobre ti. Los días se convertirán en semanas y las semanas en meses, y antes de que te des cuenta, tu vida habrá acabado”",
    },

    {
      word: "La disciplina",
      author: "Og Mandino",
      img: "mandino.jpg",
      text: "“Los pequeños intentos, repetidos, completarán cualquier empresa. La insistencia sistemática e inteligente es la llave del éxito”",
    },
    {
      word: "Las emociones",
      author: "Stephen Covey",
      img: "covey.png",
      text: "“Quizá la habilidad más importante a la hora de tratar con personas es la de saber escuchar, que no es otra cosa que voluntad para entender a la otra parte”",
    },
    {
      word: "La actitud",
      author: "Mahatma Gandhi",
      img: "gandhi.jpg",
      text: "“La vida es como un espejo, te sonríe si la miras sonriendo”",
    },
    {
      word: "Creer antes de ver",
      author: "Ralph Waldo Emerson",
      img: "emerson.webp",
      text: "“La confianza en uno mismo es el primer secreto del éxito. En la confianza en uno mismo están comprendidas todas las virtudes”",
    },
    {
      word: "La ley del universo",
      author: "Deepaak Chopra",
      img: "chopra.webp",
      text: "“Dar y recibir son las misma cosa, porque una acción y otra no son sino diferentes aspectos de la misma monenda. Son el mismo flujo de energía del universo”",
    },
  ];
  // ------------ change quote ----------------- //

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index]);

  const handleNext = () => {
    setIndex((index + 1) % quotes.length);
  };

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
  console.log(typeof index);
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <div className={styles.grid}>
          <div className={styles.text_container}>
            <h4>{quotes[index].word}</h4>
            <img
              className={styles.author}
              src={`/${quotes[index].img}`}
              alt={quotes[index].author}
            />
            <h5>{quotes[index].author}</h5>
            <p className={styles.description}>{quotes[index].text}</p>
            <div className={styles.dots}>
              {quotes.map((_, i) => (
                <div
                  onClick={handleNext}
                  className={i === index ? styles.active : styles.inactive}
                  key={i}
                  style={{
                    backgroundColor: i === index ? "#f49b4c" : "#D9D9D9",
                    height: 15,
                    width: 15,
                    borderRadius: "50%",
                    margin: 5,
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          </div>
          <img
            className={styles.carlos_img}
            src="/carlos_quotes.png"
            alt="Carlos fuents"
          />
        </div>
      </div>
    </section>
  );
};
