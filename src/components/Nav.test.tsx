import { render, screen, fireEvent } from '@testing-library/react';
import { Nav } from './Nav';

test('renders the four section links', () => {
  render(<Nav />);
  for (const label of ['Om mig', 'Priser', 'Sådan foregår det', 'Kontakt']) {
    expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
  }
});

test('becomes solid after scrolling', () => {
  render(<Nav />);
  const nav = screen.getByRole('navigation');
  expect(nav.dataset.solid).toBe('false');
  Object.defineProperty(window, 'scrollY', { value: 120, writable: true, configurable: true });
  fireEvent.scroll(window);
  expect(nav.dataset.solid).toBe('true');
});
