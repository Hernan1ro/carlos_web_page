import { Layout } from "../Layout/Layout";
import { Hero } from "../containers/Hero";
import { About } from "../containers/About";
import { HeroServices } from "../containers/HeroServices";
import { WhatsappBtn } from "../Components/WhatBtn";
import { Services } from "../containers/Services";
import { Values } from "../containers/Values";
import { Book } from "../containers/Book";
import { Quotes } from "../containers/Quotes";
import { Testimonials } from "../containers/Testimonials";

export default function Home() {
  return (
    <Layout page="Carlos Fuentes">
      <HeroServices />
      <About />
      <Services />
      <Values />
      <Book />
      <Quotes />
      <Testimonials />
      <WhatsappBtn />
    </Layout>
  );
}
