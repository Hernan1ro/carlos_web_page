import styles from "/styles/pages/testimonials.module.css";
import { Testimonial } from "../Components/Testimonial";
import { VideoTestimonial } from "../Components/VideoTestimonial";
import { VideoPlayer } from "../Components/VideoPlayer";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Diana Carolina Manzano Aponte",
      img: "diana",
      testimonial:
        "Es una excelente empresa. Responsables con la información y tiempos a cumplir",
    },
    {
      name: "Cristina Izquierdo",
      img: "cristina",
      testimonial:
        "Empresa confiable, excelentes profesionales y buscan las mejores alternativas para el cliente",
    },
    {
      name: "Mary Luz",
      img: "mary",
      testimonial:
        "todo los productos que ofrecen Pq son una empresa seria y responsable",
    },
  ];
  const videoTestimonials = [
    {
      url: "https://www.youtube.com/watch?v=eCiMqit3hFA",
      name: "La Imaginación en tu vida HOY",
      testimonial:
        "Es una excelente empresa. Responsables con la información y tiempos a cumplir",
    },
    {
      url: "https://www.youtube.com/watch?v=Sy9q8GNsZvc",
      name: "Las personas merecen respeto, las ideas deben ganárselo",
      testimonial:
        "Es una excelente empresa. Responsables con la información y tiempos a cumplir",
    },
    {
      url: "https://www.youtube.com/watch?v=73CZQsQ6JA8&t=2s",
      name: "La experiencia del cliente una nueva batalla",
      testimonial:
        "Es una excelente empresa. Responsables con la información y tiempos a cumplir",
    },
  ];

  return (
    <section className={styles.testimoniales}>
      <h2>Experiencias en video</h2>
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
      <h2>Testimonios de nuestros clientes</h2>
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
