import styles from "/styles/pages/testimonials.module.css";

export const Testimonial = ({ name, testimonial, img }) => {
  return (
    <div className={styles.testimonial}>
      <img src="./assets/testimoniales/quote.svg" alt="testimonial" />
      <img
        className={styles.testimonial_img}
        src={`./assets/testimoniales/${img}.jpg`}
        alt="testimonial"
      />
      <img src="./assets/testimoniales/facebook.svg" alt="testimonial" />
      <h4>{name}</h4>
      <p>{testimonial}</p>
    </div>
  );
};
