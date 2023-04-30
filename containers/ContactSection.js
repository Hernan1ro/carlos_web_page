import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "/styles/containers/contact_section.module.css";
import Image from "next/image";
// import { FormMessage } from "../components/landing/FormMessage";
// import { Spinner } from "../components/landing/Spinner";

export const ContactSection = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  // ------------------ Send email handler ---------------------//
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("enviando email");

    //--------------------- Getting data --------------------//
    const value = [
      form.current[0].value,
      form.current[1].value,
      form.current[2].value,
      form.current[4].checked,
    ];

    console.log(value);

    //---------------------Data validation -------------------//
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      form.current[1].value
    );

    if (value.includes("") || !testEmail) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      console.log("No se ha podido enviar mensaje");
    } else {
      console.log("Mensaje enviado");
      sendEmailFunction();
    }

    return;
    e.target.reset();
    //------------- Send email ----------- //
    function sendEmailFunction() {
      setLoading(true);
      //console.log(loading);
      emailjs
        .sendForm(
          "service_h613dui",
          "template_0etlpoc",
          form.current,
          "2oJX9WiBCQtAmeD-b"
        )
        .then(
          (result) => {
            setSuccess(
              "Tú mensaje ha sido enviado correctamente, pronto nos pondremos en contacto con tigo"
            );
            setLoading(false);
          },
          (error) => {
            console.log(error);
            setLoading(false);
            setError(false);
            //console.log(error.text);
            setTimeout(() => setError(false), 10000);
          }
        );
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <section className={styles.contact} id="contacto" data-aos="fade-up">
      <h2 data-aos="fade-up">Tengamos una conversación</h2>
      <p data-aos="fade-up">
        ¿Está buscando una solución efectiva para sus desafíos actuales?
        ¿Quieres tomar tu vida o carrera al siguiente nivel, pero no sabes por
        dónde empezar? Si es así, entonces es hora de que tome medidas concretas
        para alcanzar tus metas y objetivos.
      </p>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.input_container}>
          <div data-aos="fade-up" className={styles.input}>
            <label htmlFor="name">Tu nombre</label>
            <input required type="text" name="name" placeholder="Nombres" />
          </div>
          <div data-aos="fade-up" className={styles.input}>
            <label htmlFor="name">Tu email</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Correo electrónico"
            />
          </div>
        </div>
        <textarea
          data-aos="fade-up"
          name="message"
          cols="10"
          rows="10"
          required
          placeholder="Mensaje"
        ></textarea>
        <button type="submit">
          <span>Enviar mensaje</span>
          <Image
            alt="enviar"
            width={23}
            height={23}
            src="/home/send_icon.svg"
          />
        </button>
        <div data-aos="fade-up" className={styles.policies}>
          <input type="checkbox" required />
          <span>
            He leído y acepto las <em>Políticas de privacidad</em>
          </span>
        </div>
      </form>
    </section>
  );
};
