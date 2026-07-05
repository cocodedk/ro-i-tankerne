import { render, screen } from '@testing-library/react';
import { Kontakt } from './Kontakt';

test('renders bracketed contact placeholders as text, not links', () => {
  render(<Kontakt />);
  expect(screen.getByRole('heading', { name: 'Du behøver ikke stå alene' })).toBeInTheDocument();
  expect(screen.getByText('[mail følger]')).toBeInTheDocument();
  expect(screen.getByText('[telefonnummer følger]')).toBeInTheDocument();
  // placeholders must never become broken mailto:/tel: links
  expect(screen.queryByRole('link', { name: '[mail følger]' })).not.toBeInTheDocument();
});
