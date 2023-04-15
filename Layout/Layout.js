import Head from "next/head";
import styles from "../styles/Layout/Layout.module.css";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const Layout = ({ children, page, hide }) => {
  return (
    <>
      <Head>
        <title>Customer Solutions | {page}</title>
        <meta
          name="description"
          content="Docente y Coach desde hace más de 10 años, además de consultor y capacitador. Escritor y en el proceso para el poder de servir: De dar para recibir."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header hide={hide} />
      <main className={styles.main_container}>{children}</main>
      {!hide ? <Footer /> : null}
    </>
  );
};
