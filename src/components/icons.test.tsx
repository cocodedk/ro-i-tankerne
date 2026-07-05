import { render } from '@testing-library/react';
import { Icon } from './icons';
import type { IconName } from '../content/site';

const names: IconName[] = ['logo', 'leaf', 'chat', 'heart', 'sprout', 'parents', 'phone'];

test.each(names)('renders %s as decorative inline svg', (name) => {
  const { container } = render(<Icon name={name} />);
  const svg = container.querySelector('svg')!;
  expect(svg).toBeInTheDocument();
  expect(svg.getAttribute('aria-hidden')).toBe('true');
});
