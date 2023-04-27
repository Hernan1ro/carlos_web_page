import { Layout } from "../Layout/Layout";
import { Hero } from "../containers/Hero";
import { About } from "../containers/About";
import { HeroServices } from "../containers/HeroServices";
import { Section1 } from "../containers/section1";
import { Solutions } from "../containers/Solutions";
import { Section2 } from "../containers/Section2";
import { WhatsappBtn } from "../Components/WhatBtn";
import { Services } from "../containers/Services";
import { Values } from "../containers/Values";

export default function Home() {
  return (
    <Layout page="Carlos Fuentes">
      <HeroServices />
      <About />
      <Services />
      <Values />
      <Section2 />
      <WhatsappBtn />
    </Layout>
  );
}
