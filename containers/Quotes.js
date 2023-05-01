import { useState, useEffect } from "react";
import styles from "../styles/containers/quotes.module.css";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

export const Quotes = () => {
  const [index, setIndex] = useState(0);
  const { locale } = useRouter();

  const valueText = {
    "en-US": {
      quotes: [
        {
          word: "The focus",
          author: "Stephen Covey",
          img: "covey.png",
          text: '“Successful people, people of focus. Knowing how to say "no" is one of the most important virtues for achieving goals”',
        },
        {
          word: "The purpose",
          author: "Mark Twain",
          img: "twain_mark.jpg",
          text: "“The two most important days in your life are the day you are born and the day you find out why”",
        },
        {
          word: "The action",
          author: "Robin Sharma",
          img: "sharma.jpg",
          text: "“If you don't act on life, life will act on you. Days will turn into weeks and weeks into months, and before you know it, your life will be over”",
        },
        {
          word: "The discipline",
          author: "Og Mandino",
          img: "mandino.jpg",
          text: "“Small attempts, repeated, will complete any enterprise. Systematic and intelligent persistence is the key to success”",
        },
        {
          word: "The emotions",
          author: "Stephen Covey",
          img: "covey.png",
          text: "“Perhaps the most important skill in dealing with people is the ability to listen, which is nothing more than a willingness to understand the other party”",
        },
        {
          word: "The attitude",
          author: "Mahatma Gandhi",
          img: "gandhi.jpg",
          text: "“Life is like a mirror, it smiles at you if you smile at it”",
        },
        {
          word: "Believe before you see",
          author: "Ralph Waldo Emerson",
          img: "emerson.webp",
          text: "“Self-confidence is the first secret of success. All virtues are included in self-confidence”",
        },
        {
          word: "The law of the universe",
          author: "Deepaak Chopra",
          img: "chopra.webp",
          text: "“Giving and receiving are the same thing because an action and another are only different aspects of the same coin. They are the same flow of energy in the universe”",
        },
      ],
    },
    "es-ES": {
      quotes: [
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
      ],
    },
  };

  const { quotes } = valueText[locale];

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

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section id="reflexiones" className={styles.facts_section}>
      <div className={styles.facts_container}>
        <div className={styles.grid}>
          <div className={styles.text_container}>
            <h4 data-aos="fade-up">{quotes[index].word}</h4>
            <img
              data-aos="fade-up"
              className={styles.author}
              src={`/${quotes[index].img}`}
              alt={quotes[index].author}
            />
            <h5 data-aos="fade-up">{quotes[index].author}</h5>
            <p data-aos="fade-up" className={styles.description}>
              {quotes[index].text}
            </p>
            <div data-aos="fade-up" className={styles.dots}>
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
            data-aos="fade-up"
            className={styles.carlos_img}
            src="/carlos_quotes.png"
            alt="Carlos fuents"
          />
        </div>
      </div>
    </section>
  );
};
