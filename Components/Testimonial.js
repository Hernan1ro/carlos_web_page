import styles from "/styles/pages/testimonials.module.css";

export const Testimonial = ({
  name,
  testimonial,
  img = "carlos_about.png",
}) => {
  return (
    <div className={styles.testimonial}>
      <img src="./quote.svg" alt="testimonial" />
      <img className={styles.testimonial_img} src={`./${img}`} alt={name} />
      <h4>{name}</h4>
      <p>{testimonial}</p>
    </div>
  );
};
