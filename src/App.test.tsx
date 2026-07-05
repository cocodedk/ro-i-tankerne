import { render, screen } from '@testing-library/react';
import App from './App';

test('full page renders every section in order', () => {
  render(<App />);
  const ids = Array.from(document.querySelectorAll('section[id]')).map((s) => s.id);
  expect(ids).toEqual([
    'top', 'om-mig', 'plads-til', 'priser',
    'saadan-foregaar-det', 'kontakt', 'akut-hjaelp',
  ]);
  expect(screen.getByText('Nærvær skaber tryghed.')).toBeInTheDocument();
  expect(screen.getByText('Små samtaler kan gøre en stor forskel.')).toBeInTheDocument();
  expect(screen.getAllByText('Du behøver ikke bære det alene.')).toHaveLength(2);
  expect(screen.getByText(/ingen cookies/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Spring til indhold' })).toHaveAttribute('href', '#top');
});
