import { Layout } from "../Layout/Layout";
import { HeroServices } from "../containers/HeroServices";
import { Services } from "../containers/Services";
import { About } from "../containers/About";
import { How } from "../containers/How";
import { Hero } from "../containers/Hero";

export default function Servicios() {
  return (
    <Layout page="Servicios">
      <HeroServices />
      <Services />
      <How />
      <About />
    </Layout>
  );
}
