import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

test('renders name, tagline and CTA to #kontakt', () => {
  render(<Hero />);
  expect(screen.getByRole('heading', { level: 1, name: 'Ro i Tankerne' })).toBeInTheDocument();
  expect(screen.getByText('Et trygt sted til tanker, trivsel og nærvær')).toBeInTheDocument();
  const cta = screen.getByRole('link', { name: 'Book en gratis opstartssamtale' });
  expect(cta).toHaveAttribute('href', '#kontakt');
});
