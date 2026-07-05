import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { ParallaxDivider } from './components/ParallaxDivider';
import { Priser } from './components/Priser';
import { dividers } from './content/site';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ParallaxDivider divider={dividers[0]} />
        <Priser />
      </main>
    </>
  );
}
