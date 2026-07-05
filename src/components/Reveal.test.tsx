import { render } from '@testing-library/react';
import { Reveal } from './Reveal';

test('renders children inside a .reveal wrapper', () => {
  const { container } = render(<Reveal><p>hej</p></Reveal>);
  const div = container.firstElementChild!;
  expect(div.classList.contains('reveal')).toBe(true);
  expect(div.textContent).toBe('hej');
});
