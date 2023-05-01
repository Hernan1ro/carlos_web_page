import styles from "/styles/pages/testimonials.module.css";
import { Testimonial } from "../Components/Testimonial";
import { VideoTestimonial } from "../Components/VideoTestimonial";
import { VideoPlayer } from "../Components/VideoPlayer";
import { useRouter } from "next/router";

export const Testimonials = () => {
  const { locale } = useRouter();

  const valueText = {
    "en-US": {
      h2: "Video experiences",
      h2b: "Testimonials",
      testimonials: [
        {
          name: "Diana Carolina",
          img: "carlos_about.png",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem nam quo debitis repellendus fuga laborum digniss",
        },
        {
          name: "Cristina Izquierdo",
          img: "carlos_photo.png",
          testimonial:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nemo consequuntur quos optio laudantium.",
        },
        {
          name: "Mary Luz",
          img: "carlos_values.png",
          testimonial:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque incidunt repudiandae libero doloremque veritatis minus!",
        },
      ],
      videoTestimonials: [
        {
          url: "https://www.youtube.com/watch?v=eCiMqit3hFA",
          name: "Imagination in your life TODAY",
          testimonial:
            "The importance of imagination in personal development and how to use it as a powerful tool to visualize and achieve your goals",
        },
        {
          url: "https://www.youtube.com/watch?v=Sy9q8GNsZvc",
          name: "People deserve respect, ideas must earn it",
          testimonial:
            "Trust yourself and overcome the fear of making mistakes to achieve your goals",
        },
        {
          url: "https://www.youtube.com/watch?v=73CZQsQ6JA8&t=2s",
          name: "The customer experience, a new battle",
          testimonial:
            "Improve the customer experience in your business: focus on the customer, work on trust, and cultivate organizational culture",
        },
      ],
    },
    "es-ES": {
      h2: "Experiencias en vídeos",
      h2b: "Testimoniales",
      testimonials: [
        {
          name: "Diana Carolina",
          img: "carlos_about.png",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem nam quo debitis repellendus fuga laborum digniss",
        },
        {
          name: "Cristina Izquierdo",
          img: "carlos_photo.png",
          testimonial:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nemo consequuntur quos optio laudantium.",
        },
        {
          name: "Mary Luz",
          img: "carlos_values.png",
          testimonial:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque incidunt repudiandae libero doloremque veritatis minus!",
        },
      ],
      videoTestimonials: [
        {
          url: "https://www.youtube.com/watch?v=eCiMqit3hFA",
          name: "La Imaginación en tu vida HOY",
          testimonial:
            "La importancia de la imaginación en el desarrollo personal y cómo utilizarla como herramienta poderosa para visualizarte y alcanzar tus metas",
        },
        {
          url: "https://www.youtube.com/watch?v=Sy9q8GNsZvc",
          name: "Las personas merecen respeto, las ideas deben ganárselo",
          testimonial:
            "Confía en ti y vence el miedo a equivocarte para alcanzar tus metas",
        },
        {
          url: "https://www.youtube.com/watch?v=73CZQsQ6JA8&t=2s",
          name: "La experiencia del cliente una nueva batalla",
          testimonial:
            "Mejora la experiencia del cliente en tu negocio: enfócate en el cliente, trabaja la confianza y cultiva la cultura organizacional",
        },
      ],
    },
  };
  const { testimonials, videoTestimonials, h2, h2b } = valueText[locale];

  return (
    <section id="videos" className={styles.testimoniales}>
      <h2>{h2}</h2>
      <div className={styles.video_container}>
        {videoTestimonials.map((test) => {
          const { title, testimonial, name, url } = test;
          return (
            <VideoTestimonial
              videoUrl={url}
              name={name}
              phrase={testimonial}
              key={title}
            />
          );
        })}
      </div>
      <h2 id="testimoniales">{h2b}</h2>
      <div className={styles.testimoniales_container}>
        {testimonials.map((test) => {
          const { title, testimonial, name, img } = test;
          return (
            <Testimonial
              img={img}
              name={name}
              testimonial={testimonial}
              key={title}
            />
          );
        })}
      </div>
    </section>
  );
};
