import { services, dividers, kontakt, akut, navLinks, omMig } from './site';

test('has exactly the five services from the prisliste', () => {
  expect(services.map((s) => s.price)).toEqual([
    'Gratis', '750 kr.', '3.000 kr.', '850 kr.', 'fra 300 kr.',
  ]);
});

test('unknown facts are bracketed placeholders, never invented', () => {
  expect(kontakt.email).toMatch(/^\[.+\]$/);
  expect(kontakt.phone).toMatch(/^\[.+\]$/);
  expect(kontakt.instagram).toMatch(/^\[.+\]$/);
  expect(kontakt.facebook).toMatch(/^\[.+\]$/);
  const forloeb = services.find((s) => s.id === 'forloeb');
  expect(forloeb?.note).toMatch(/^\[.+\]$/);
  expect(omMig.portrait).toMatch(/^\[.+\]$/);
});

test('three parallax dividers, each with image, alt and slogan', () => {
  expect(dividers).toHaveLength(3);
  for (const d of dividers) {
    expect(d.image).toMatch(/^images\//);
    expect(d.alt.length).toBeGreaterThan(10);
    expect(d.slogan.length).toBeGreaterThan(5);
  }
});

test('akut section names both hotlines', () => {
  const phones = akut.contacts.map((c) => c.phone);
  expect(phones).toContain('70 201 201');
  expect(phones).toContain('116 111');
});

test('nav links point at section ids', () => {
  expect(navLinks.map((l) => l.href)).toEqual([
    '#om-mig', '#priser', '#saadan-foregaar-det', '#kontakt',
  ]);
});
