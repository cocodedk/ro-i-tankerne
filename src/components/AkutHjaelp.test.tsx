import { render, screen } from '@testing-library/react';
import { AkutHjaelp } from './AkutHjaelp';

test('renders hotlines as tel: links and the afgrænsning', () => {
  render(<AkutHjaelp />);
  expect(screen.getByRole('heading', { name: 'Brug for akut hjælp?' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Livslinien/ })).toHaveAttribute('href', 'tel:70201201');
  expect(screen.getByRole('link', { name: /BørneTelefonen/ })).toHaveAttribute('href', 'tel:116111');
  expect(screen.getByText(/ikke psykologbehandling, terapi eller akut krisehjælp/)).toBeInTheDocument();
});
