import { render, screen } from '@testing-library/react';
import { ParallaxDivider } from './ParallaxDivider';
import { dividers } from '../content/site';

test('renders slogan and a decorative image with the section labelled', () => {
  render(<ParallaxDivider divider={dividers[0]} />);
  expect(screen.getByText('Du behøver ikke bære det alene.')).toBeInTheDocument();
  const section = screen.getByRole('region', { name: dividers[0].alt });
  expect(section.querySelector('img')?.getAttribute('alt')).toBe('');
  expect(section.querySelector('img')?.getAttribute('loading')).toBe('lazy');
});
