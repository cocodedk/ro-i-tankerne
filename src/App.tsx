import { Hero } from './components/Hero';
import { ParallaxDivider } from './components/ParallaxDivider';
import { Priser } from './components/Priser';
import { dividers } from './content/site';

export default function App() {
  return (
    <main>
      <Hero />
      <ParallaxDivider divider={dividers[0]} />
      <Priser />
    </main>
  );
}
