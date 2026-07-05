import { render, screen } from '@testing-library/react';
import { OmMig } from './OmMig';

test('renders heading, all paragraphs, and the portrait placeholder', () => {
  render(<OmMig />);
  expect(screen.getByRole('heading', { name: 'Et trygt rum – uden krav om at præstere' })).toBeInTheDocument();
  expect(screen.getByText(/socialpædagog med diplomuddannelse/)).toBeInTheDocument();
  expect(screen.getByText(/mindful og spirituel tilgang/)).toBeInTheDocument();
  expect(screen.getByText('[portrætfoto følger]')).toBeInTheDocument();
});
