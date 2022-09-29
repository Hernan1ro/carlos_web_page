import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/services.module.css";

export const Service = ({ name, img, p }) => {
  const element = useRef(null);
  const [view, setView] = useState(false);

  useEffect(() => {
    //-------------- intersection observer --------------//
    let options = {
      rootMargin: "-60px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setView(true);
      }
    }, options);
    observer.observe(element.current);
  }, []);

  return (
    <figure className={styles.solution} ref={element}>
      {view && (
        <>
          <img src={`/assets/imagenes/${img}.jpg`} alt="product image" />
          <div>
            <h4>{name}</h4>
            <p>{p}</p>
            <button>Contáctanos</button>
          </div>
        </>
      )}
    </figure>
  );
};
