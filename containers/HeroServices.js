import styles from "../styles/pages/servicios.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const HeroServices = () => {
  const { locale } = useRouter();

  const heroText = {
    "en-US": {
      h1: '"Any purpose is possible with the right approach, leading your emotions, your action in motion, your permanent discipline and your powerful attitude"',
      btn: "Discover your purpose",
    },
    "es-ES": {
      h1: '"Cualquier propósito es posible con el enfoque adecuado, liderando tus emociones, tu acción en movimiento, tu disciplina permanente y tu actitud poderosa"',
      btn: "Descubre tu propósito",
    },
  };

  const { h1, btn } = heroText[locale];
  return (
    <section className={styles.servicios}>
      <div className={styles.hero_text}>
        <h1>{h1}</h1>
        <div className={styles.btn_container}>
          <Link href="/contacto">
            <button>{btn}</button>
          </Link>
          <img src="/assets/icons/goal.svg" alt="" />
        </div>
      </div>
      <img
        className={styles.carlos_name}
        src="/carlos_name.svg"
        alt="carlos name"
      />
    </section>
  );
};
