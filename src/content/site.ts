export type IconName =
  | 'logo' | 'leaf' | 'chat' | 'heart' | 'sprout' | 'parents' | 'phone';

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  duration: string;
  description: string;
  note?: string;
  price: string;
}

export interface Divider {
  id: string;
  image: string;
  alt: string;
  slogan: string;
}

export const hero = {
  title: 'Ro i Tankerne',
  tagline: 'Et trygt sted til tanker, trivsel og nærvær',
  cta: 'Book en gratis opstartssamtale',
  image: 'images/hero',
};

export const omMig = {
  kicker: 'Om mig',
  heading: 'Et trygt rum – uden krav om at præstere',
  paragraphs: [
    'Hos mig møder du en rolig voksen, der lytter – uden at vurdere, rette eller komme med hurtige løsninger. Mit navn er Maria, og jeg har i mange år hjulpet børn, unge og familier igennem det, der er svært: skolevægring, autisme, ADHD, angst, lavt selvværd, uro og tankemylder.',
    'Jeg tror på, at alle unge gør det bedste, de kan, med de ressourcer, de har lige nu. Når en ung trækker sig, lukker ned eller ikke kan komme i skole, ser jeg det ikke som modvilje – men som et tegn på, at noget er blevet for svært. Min opgave er at se bag om reaktionerne og forstå, hvad de fortæller – også om, hvordan nervesystemet reagerer på pres og overbelastning. Den forståelse har jeg med mig som socialpædagog med diplomuddannelse i neuropædagogik og neuropsykologi – og som mor til to teenagere.',
    'Ro er mere end et navn. Jeg har en mindful og spirituel tilgang til mit arbejde og er optaget af nærvær, åndedræt og kropslig bevidsthed. Når det giver mening for den unge, bliver mindfulness en del af samtalerne – og hjælper med at skabe mere ro i tanker, følelser og krop.',
    'Står du som forælder ved siden af og er bekymret, er du ikke alene. I forældrevejledningen er der plads til bekymringer, spørgsmål og konkrete perspektiver på, hvordan du kan møde dit barn med mere ro, forståelse og tydelighed.',
  ],
  portrait: '[portrætfoto følger]',
};

export const pladsTil = {
  kicker: 'Hos mig er der plads til',
  heading: 'Alle tanker er velkomne',
  items: [
    'Tankemylder',
    'Ensomhed',
    'Selvskade og svære tanker',
    'ADHD og autisme',
    'Uro og usikkerhed',
    'Følelser, der fylder',
    'Samtaler med ægthed og nærvær',
  ],
  outro: 'Her er der plads til at være præcis den, man er.',
};

export const priser = {
  kicker: 'Priser',
  heading: 'Samtaler for unge',
  outro:
    'Alle samtaler foregår i et trygt og fortroligt rum, hvor du bliver mødt med respekt, omsorg og forståelse.',
};

export const services: Service[] = [
  {
    id: 'opstart',
    icon: 'chat',
    title: 'Opstartssamtale',
    duration: '30 min.',
    description: 'Afklarende møde for ung og/eller forældre.',
    price: 'Gratis',
  },
  {
    id: 'individuel',
    icon: 'heart',
    title: 'Individuel samtale',
    duration: '45 min.',
    description: 'Nærværende samtale med fokus på dig og det, der fylder.',
    note: 'Solo eller gruppe.',
    price: '750 kr.',
  },
  {
    id: 'forloeb',
    icon: 'sprout',
    title: 'Samtaleforløb',
    duration: '5 samtaler á 45 min.',
    description: 'Et trygt forløb med kontinuitet og udvikling.',
    note: '[spar 750 kr.]',
    price: '3.000 kr.',
  },
  {
    id: 'foraeldre',
    icon: 'parents',
    title: 'Forældresamtale',
    duration: '30 min.',
    description: 'Sparring, støtte og vejledning til forældre.',
    price: '850 kr.',
  },
  {
    id: 'telefonisk',
    icon: 'phone',
    title: 'Telefonisk sparring',
    duration: '20–30 min.',
    description: 'Kort sparring eller akut støtte.',
    price: 'fra 300 kr.',
  },
];

export const dividers: [Divider, Divider, Divider] = [
  {
    id: 'laesning',
    image: 'images/divider-reading',
    alt: 'En pige læser en bog på et tæppe i græsset',
    slogan: 'Du behøver ikke bære det alene.',
  },
  {
    id: 'skov',
    image: 'images/divider-trail',
    alt: 'En solbeskinnet skovsti',
    slogan: 'Nærvær skaber tryghed.',
  },
  {
    id: 'faellesskab',
    image: 'images/divider-gathering',
    alt: 'En lille gruppe mennesker nyder roligt hinandens selskab udenfor',
    slogan: 'Små samtaler kan gøre en stor forskel.',
  },
];

export const saadan = {
  kicker: 'Sådan foregår det',
  heading: 'Tre rolige skridt',
  steps: [
    {
      title: 'Skriv til mig',
      text: 'I forældre – eller den unge selv – sender mig en mail, og vi aftaler en tid til en indledende telefonsamtale.',
    },
    {
      title: 'Gratis telefonsamtale',
      text: 'Her hører jeg mere om, hvad den unge oplever, og hvad vi skal arbejde med. I kan også høre mere om, hvem jeg er, og hvordan jeg arbejder.',
    },
    {
      title: 'Første samtale',
      text: 'Er den unge under 16 år, er første samtale typisk sammen med forældrene. Derefter foregår samtalerne mellem den unge og mig.',
    },
  ],
  note: 'Alle samtaler foregår i et trygt og fortroligt rum i Roskilde.',
};

export const kontakt = {
  kicker: 'Kontakt',
  heading: 'Du behøver ikke stå alene',
  lead: 'Skriv en mail – så finder vi en tid til en gratis og uforpligtende telefonsamtale.',
  mailLabel: 'Mail:',
  phoneLabel: 'Telefon:',
  follow: 'Følg Ro i Tankerne:',
  email: '[mail følger]',
  phone: '[telefonnummer følger]',
  instagram: '[instagram-link følger]',
  facebook: '[facebook-link følger]',
};

export const akut = {
  heading: 'Brug for akut hjælp?',
  lead: 'Har du brug for nogen at tale med her og nu, kan du altid ringe til:',
  contacts: [
    { name: 'Livslinien', phone: '70 201 201' },
    { name: 'BørneTelefonen', phone: '116 111' },
  ],
  afgraensning:
    'Samtaler hos Ro i Tankerne er pædagogisk støtte og vejledning ved uddannet socialpædagog – ikke psykologbehandling, terapi eller akut krisehjælp.',
};

export const footer = {
  slogan: 'Du behøver ikke bære det alene.',
  copyright: '© 2026 Ro i Tankerne · Roskilde',
  privacy: 'Denne side bruger ingen cookies og indsamler ingen personoplysninger.',
};

export const navLinks = [
  { label: 'Om mig', href: '#om-mig' },
  { label: 'Priser', href: '#priser' },
  { label: 'Sådan foregår det', href: '#saadan-foregaar-det' },
  { label: 'Kontakt', href: '#kontakt' },
];
