import { render, screen } from '@testing-library/react';
import App from './App';

test('prototype renders hero, divider slogan and priser', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Ro i Tankerne' })).toBeInTheDocument();
  expect(screen.getByText('Du behøver ikke bære det alene.')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Samtaler for unge' })).toBeInTheDocument();
});
