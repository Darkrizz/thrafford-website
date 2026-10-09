export const site = {
  name: 'Thrafford',
  tagline: 'Off-the-shelf immune-cell therapy manufacturing',
  description:
    'Thrafford is building India’s first affordable, off-the-shelf γδ T-cell therapy manufacturing platform, powered by TiCoBi, our time-controlled bioprocess.',
  url: 'https://thrafford.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Technology & Software', href: '/technology/' },
  { label: 'Team', href: '/team/' },
  { label: 'Publications', href: '/publications/' },
];

export const contact = {
  phoneDisplay: '+91 84479 89735',
  phoneHref: 'tel:+918447989735',
  email: 'contact@thrafford.com',
  emailAlt: 'hello@thrafford.com',
  addressLines: [
    'BSC BioNEST Bio-Incubator (BBB)',
    'Regional Centre for Biotechnology',
    '3rd Milestone, Faridabad–Gurugram Expressway',
    'Faridabad – 121001, Haryana, India',
  ],
  mapQuery: 'Regional Centre for Biotechnology, Faridabad',
  responseTime: 'We usually reply within one business day.',
};

/** The access gap — figures from the original homepage. */
export const accessGap = [
  {
    value: 250000,
    prefix: '~',
    label: 'lymphoma & leukemia cases in India',
    note: 'Patients facing huge challenges in accessing advanced, affordable therapies.',
  },
  {
    value: 73500,
    label: 'patients relapsed or refractory',
    note: '≈30% of cases — patients who have exhausted all available treatment options.',
  },
  {
    value: 80,
    display: '60–80%',
    label: 'complete remission with CAR-T',
    note: 'Chimeric Antigen Receptor T-cell therapy offers real hope to these patients.',
  },
  {
    value: 1,
    display: '<1%',
    label: 'have received CAR-T in India',
    note: 'Since the therapy’s approval in India.',
  },
];

export const achievements = [
  { value: 55, suffix: '', label: 'Publications' },
  { value: 46, suffix: '', label: 'Patents' },
  { value: 13, prefix: '$', suffix: 'M', label: 'Grants' },
  { value: 20, suffix: '+', label: 'Awards' },
  { value: 2, suffix: '', label: 'Books' },
];
