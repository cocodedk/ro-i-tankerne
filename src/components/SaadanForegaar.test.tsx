import { render, screen } from '@testing-library/react';
import { SaadanForegaar } from './SaadanForegaar';

test('renders the three steps in order plus the fortrolighed note', () => {
  render(<SaadanForegaar />);
  const items = screen.getAllByRole('listitem');
  expect(items.map((li) => li.querySelector('h3')?.textContent)).toEqual([
    'Skriv til mig', 'Gratis telefonsamtale', 'Første samtale',
  ]);
  expect(screen.getByText(/trygt og fortroligt rum i Roskilde/)).toBeInTheDocument();
});
