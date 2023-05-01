import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "/styles/containers/contact_section.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export const ContactSection = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const { locale } = useRouter();

  const contactText = {
    "en-US": {
      h1: "Let's have a conversation",
      p: "Are you looking for an effective solution to your current challenges? Do you want to take your life or career to the next level, but don't know where to start? If so, then it's time for you to take concrete steps to reach your goals and objectives.",
      ph1: "Email",
      ph2: "Full name",
      ph3: "Message",
      label: "Your name",
      label2: "Your email",
      btn: "Send message",
      error: "Please check the fields and try again",
      success: "Message sent successfully, I will contact you soon",
    },
    "es-ES": {
      h1: "Tengamos una conversación",
      p: "¿Está buscando una solución efectiva para sus desafíos actuales? ¿Quieres tomar tu vida o carrera al siguiente nivel, pero no sabes por dónde empezar? Si es así, entonces es hora de que tome medidas concretas para alcanzar tus metas y objetivos.",
      ph1: "Correo electrónico",
      ph2: "Nombre completo",
      ph3: "Mensaje",
      label: "Tu nombre",
      label2: "Tu email",
      btn: "Enviar mensaje",
      error: "Por favor, revisa los campos y vuelve a intentarlo",
      success:
        "Mensaje enviado correctamente, pronto nos pondremos en contacto con usted",
    },
  };

  const {
    h1,
    p,
    ph1,
    ph2,
    ph3,
    btn,
    label,
    label2,
    error: error_text,
    success: success_text,
  } = contactText[locale];

  // ------------------ Send email handler ---------------------//
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("enviando email");

    //--------------------- Getting data --------------------//
    const value = [
      form.current[0].value,
      form.current[1].value,
      form.current[2].value,
    ];

    console.log(value);

    //---------------------Data validation -------------------//
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      form.current[1].value
    );

    if (value.includes("") || !testEmail) {
      setSuccess("");
      setError("Ha habido un error, intenta nuevamente");
      setTimeout(() => setError(false), 3000);
      console.log("No se ha podido enviar mensaje");
    } else {
      sendEmailFunction();
    }

    // return;
    // e.target.reset();
    //------------- Send email ----------- //
    function sendEmailFunction() {
      setLoading(true);
      //console.log(loading);
      emailjs
        .sendForm(
          "service_xwwrqej",
          "template_3w5zgm9",
          form.current,
          "5b5TcAMAZdpLU3I2W"
        )
        .then(
          (result) => {
            setError("");
            setSuccess(
              "Tú mensaje ha sido enviado correctamente, pronto nos pondremos en contacto con tigo"
            );
            setLoading(false);
            console.log("Mensaje enviado");
          },
          (error) => {
            setSuccess("");
            setLoading(false);
            setError("Ha habido un problema, intenta nuevamente");
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
      <h2 data-aos="fade-up">{h1}</h2>
      <p data-aos="fade-up">{p}</p>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.input_container}>
          <div data-aos="fade-up" className={styles.input}>
            <label htmlFor="name">{label}</label>
            <input required type="text" name="name" placeholder={ph2} />
          </div>
          <div data-aos="fade-up" className={styles.input}>
            <label htmlFor="name">{label2}</label>
            <input required type="text" name="name" placeholder={ph1} />
          </div>
        </div>
        <textarea
          data-aos="fade-up"
          name="message"
          cols="10"
          rows="10"
          required
          placeholder={ph3}
        ></textarea>
        <button type="submit">
          <span>{btn}</span>
          <Image
            alt="enviar"
            width={23}
            height={23}
            src="/home/send_icon.svg"
          />
        </button>
        {error !== "" ? (
          <span className={styles.error}>{error_text}</span>
        ) : null}
        {success !== "" ? (
          <span className={styles.success}>{success_text}</span>
        ) : null}
      </form>
    </section>
  );
};
