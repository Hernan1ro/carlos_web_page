import { useState } from "react";
import styles from "../styles/components/hamburger_menu.module.css";
import Link from "next/link";
import Image from "next/image";

export const HamburgerMenu = ({
  handleClick,
  url,
  home,
  book,
  contact,
  videos,
  courses,
  about,
  values,
  reflections,
}) => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
    setTimeout(() => {
      handleClick();
    }, 600);
  };
  return (
    <nav className={close ? `${styles.nav} ${styles.close}` : styles.nav}>
      <Image width={50} height={50} src="/assets/icons/customer_logo.svg" />
      <Link href="#inicio">
        <a>{home}</a>
      </Link>
      <Link href="#about">
        <a>{about}</a>
      </Link>
      <Link href="#cursos">
        <a>{courses}</a>
      </Link>
      <Link href="#valores">
        <a>{values}</a>
      </Link>
      <Link href="#libro">
        <a>{book}</a>
      </Link>
      <Link href="#reflexiones">
        <a>{reflections}</a>
      </Link>
      <Link href="#videos">
        <a>{videos}</a>
      </Link>
      <Link href="#contacto">
        <a>{contact}</a>
      </Link>

      <div onClick={handleClose}>X</div>
    </nav>
  );
};
