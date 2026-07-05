import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { OmMig } from './components/OmMig';
import { ParallaxDivider } from './components/ParallaxDivider';
import { PladsTil } from './components/PladsTil';
import { Priser } from './components/Priser';
import { SaadanForegaar } from './components/SaadanForegaar';
import { Kontakt } from './components/Kontakt';
import { AkutHjaelp } from './components/AkutHjaelp';
import { Footer } from './components/Footer';
import { dividers } from './content/site';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">Spring til indhold</a>
      <Nav />
      <main>
        <Hero />
        <OmMig />
        <ParallaxDivider divider={dividers[0]} />
        <PladsTil />
        <Priser />
        <ParallaxDivider divider={dividers[1]} />
        <SaadanForegaar />
        <ParallaxDivider divider={dividers[2]} />
        <Kontakt />
        <AkutHjaelp />
      </main>
      <Footer />
    </>
  );
}
