import { render, screen } from '@testing-library/react';
import { Priser } from './Priser';

test('renders all five services with prices', () => {
  render(<Priser />);
  expect(screen.getByRole('heading', { name: 'Samtaler for unge' })).toBeInTheDocument();
  for (const title of [
    'Opstartssamtale', 'Individuel samtale', 'Samtaleforløb',
    'Forældresamtale', 'Telefonisk sparring',
  ]) {
    expect(screen.getByText(title)).toBeInTheDocument();
  }
  expect(screen.getByText('Gratis')).toBeInTheDocument();
  expect(screen.getByText('3.000 kr.')).toBeInTheDocument();
});
