import { render, screen } from '@testing-library/react';
import { PladsTil } from './PladsTil';

test('renders all seven pills and the outro', () => {
  render(<PladsTil />);
  for (const item of [
    'Tankemylder', 'Ensomhed', 'Selvskade og svære tanker', 'ADHD og autisme',
    'Uro og usikkerhed', 'Følelser, der fylder', 'Samtaler med ægthed og nærvær',
  ]) {
    expect(screen.getByText(item)).toBeInTheDocument();
  }
  expect(screen.getByText('Her er der plads til at være præcis den, man er.')).toBeInTheDocument();
});
