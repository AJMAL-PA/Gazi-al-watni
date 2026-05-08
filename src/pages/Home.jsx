import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ServiceDetails from '../components/ServiceDetails';
import Gallery from '../components/Gallery';
import Products from '../components/Products';
import Industries from '../components/Industries';
import Features from '../components/Features';
import Team from '../components/Team';
import Projects from '../components/Projects';

import SectionReveal from '../components/SectionReveal';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionReveal><Services /></SectionReveal>
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><ServiceDetails /></SectionReveal>
      <SectionReveal><Gallery /></SectionReveal>
      {/* <SectionReveal><Products /></SectionReveal> */}
      <SectionReveal><Industries /></SectionReveal>
      <SectionReveal><Features /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
  
    </main>
  );
}
