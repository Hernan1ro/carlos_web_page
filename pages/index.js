import { Layout } from "../Layout/Layout";
import { Hero } from "../containers/Hero";
import { About } from "../containers/About";
import { HeroServices } from "../containers/HeroServices";
import { Section1 } from "../containers/section1";
import { Solutions } from "../containers/Solutions";
import { Section2 } from "../containers/Section2";
import { WhatsappBtn } from "../Components/WhatBtn";

export default function Home() {
  return (
    <Layout page="Carlos Fuentes">
      <HeroServices />
      <About />
      <Section1 />
      <Solutions />
      <Section2 />
      <WhatsappBtn />
    </Layout>
  );
}
