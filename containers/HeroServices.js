import { useEffect } from "react";
import styles from "../styles/pages/servicios.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section data-aos="fade-up" id="hero" className={styles.servicios}>
      <div className={styles.hero_text}>
        <h1 data-aos="fade-up">{h1}</h1>
        <div data-aos="fade-up" className={styles.btn_container}>
          <Link href="/contacto">
            <button>{btn}</button>
          </Link>
          <img data-aos="fade-left" src="/assets/icons/goal.svg" alt="" />
        </div>
      </div>
      <img
        data-aos="fade-left"
        className={styles.carlos_name}
        src="/carlos_name.svg"
        alt="carlos name"
      />
    </section>
  );
};
