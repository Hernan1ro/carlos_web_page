import styles from "../styles/containers/values.module.css";
import { useRouter } from "next/router";

export const Values = () => {
  const { locale } = useRouter();

  const textContent = {
    "en-US": {
      h4: "My values and vision",
      p: "After working for more than 20 years in multinational and national companies in different sectors, I left everything to go for my dream. In this process I have made a 180 degree turn to my life, to my purpose. One day I made the decision to search for my essence and to potentiate my specialty",
    },
    "es-ES": {
      h4: "Mis valores y visión",
      p: "Después de trabajar por más de 20 años en multinacionales y empresas nacianales de diferentes sectores lo deje todo para ir por mi sueño. En este proceso he dado un giro de 180 grados a mi vida, a mi propósito. Un día tomé la decisión de buscar mi esencia y potencializar mi especialidad",
    },
  };

  const { h4, p } = textContent[locale];

  return (
    <section id="valores" className={styles.facts_section}>
      <div className={styles.facts_container}>
        <div className={styles.grid}>
          <img src="/carlos_values.png" alt="Carlos fuentes" />
          <div className={styles.text_container}>
            <h4>{h4}</h4>
            <p className={styles.description}>{p}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
