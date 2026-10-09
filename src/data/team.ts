export interface TeamMember {
  name: string;
  /** Designation, e.g. "Co-Founder & Chief Scientific Officer". */
  role: string;
  /** One-line experience headline shown under the designation. */
  headline: string;
  linkedin?: string;
  /** Optional portrait; a monogram is shown when absent. */
  photo?: string;
  credentials?: { label: string; value: string }[];
  expertise?: string[];
  /** Profile still being completed: show photo/LinkedIn placeholders. */
  pending?: boolean;
}

export interface TeamGroup {
  id: string;
  title: string;
  description?: string;
  /** Larger, two-up cards (used for leadership). */
  featured?: boolean;
  members: TeamMember[];
}

export const teamGroups: TeamGroup[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Decades of experience in drug discovery, GMP manufacturing and clinical development.',
    featured: true,
    members: [
      {
        name: 'Dr. Anita Chugh',
        role: 'Co-Founder & Chief Scientific Officer',
        headline:
          'Pharmacologist with 30+ years of experience in technology development, drug discovery across large and small molecules, patenting and licensing.',
        photo: '/images/team/chugh.webp',
        credentials: [
          { label: 'Ph.D.', value: 'AIIMS, Delhi, India' },
          { label: 'Post-doctoral Fellow', value: 'McMaster University, Canada' },
        ],
        expertise: ['Technology development', 'Drug discovery', 'Large & small molecules', 'Patenting & licensing'],
        linkedin: 'https://www.linkedin.com/in/anita-chugh-ph-d-409b063/',
      },
      {
        name: 'Dr. Kadalmani Krishnan',
        role: 'Chief Executive Officer',
        headline:
          'Biochemist with over 20 years of experience in product development, GMP manufacturing, pre-clinical and clinical trials.',
        photo: '/images/team/krishnan.webp',
        credentials: [
          { label: 'Ph.D.', value: 'University of Cambridge, UK' },
          { label: 'Post-doctoral Fellow', value: 'Harvard University, USA' },
        ],
        expertise: ['Product development', 'GMP manufacturing', 'Pre-clinical trials', 'Clinical trials'],
        linkedin: 'https://www.linkedin.com/in/kadal348/',
      },
    ],
  },
  {
    id: 'executive',
    title: 'Executive leadership',
    description: 'Scientific and strategic leaders taking our platform from the lab towards the clinic.',
    members: [
      {
        name: 'Dr. Sangeeta Maini',
        role: 'Vice President',
        headline:
          'Innovation and entrepreneurship leader with 16 years of experience building incubators, start-up ecosystems and technology-commercialisation programmes.',
        photo: '/images/team/maini.webp',
        credentials: [
          { label: 'Ph.D.', value: 'Medical Physics & Bioengineering, University College London (UCL), UK' },
        ],
        expertise: [
          'Innovation & entrepreneurship',
          'Incubation & start-ups',
          'Technology commercialisation',
          'International collaborations',
        ],
        linkedin: 'https://www.linkedin.com/in/sangeeta-maini-km-ph-d-06a4b935/',
      },
      {
        name: 'Dr. Abhishek Raj',
        role: 'Scientist',
        headline:
          'Biochemist with 7 years of postdoctoral research in China and Israel, including animal trials across multiple indications.',
        photo: '/images/team/raj.webp',
        credentials: [
          { label: 'Ph.D.', value: 'Biotechnology & Biochemistry, Bharathidasan University, India' },
        ],
        expertise: ['Animal trials', 'Lipid & protein biochemistry', 'Molecular biology', 'Cell culture', 'Pharma microbiology'],
        linkedin: 'https://www.linkedin.com/in/dr-abhishek-raj-81425028/',
      },
    ],
  },
  {
    id: 'interns',
    title: 'Interns',
    description: 'Early-career researchers contributing to our laboratory and platform work.',
    members: [
      {
        name: 'Mr. Tanishq Jain',
        role: 'Research Intern',
        headline:
          'Final-year medical student and software developer with expertise in prompt engineering and generative AI.',
        photo: '/images/team/tanishq.webp',
        expertise: ['Software development', 'Prompt engineering', 'Generative AI', 'Medicine'],
        linkedin: 'https://www.linkedin.com/in/tanishq-jain-b7894b266',
      },
      { name: 'Ms. Kavita Singh', role: 'Research Intern', headline: '', photo: '/images/team/kavita.webp', pending: true },
    ],
  },
];

/** Leadership members, used by the homepage teaser. */
export const team = teamGroups.find((g) => g.id === 'leadership')!.members;

/** Discovery-to-market capability chain (source: company team overview). */
export const capabilities = [
  {
    stage: 'Discovery',
    member: 'Dr. Anita Chugh',
    metric: '25 yrs',
    claim: 'Drug discovery',
    detail: '125 NCEs & NBEs',
  },
  {
    stage: 'Manufacturing',
    member: 'Dr. Kadalmani Krishnan',
    metric: '18 yrs',
    claim: 'GMP manufacturing & clinical trials',
    detail: 'India’s 1st liraglutide biosimilar',
  },
  {
    stage: 'Translational',
    member: 'Dr. Abhishek Raj',
    metric: '7 yrs',
    claim: 'Animal trials',
    detail: 'Across multiple indications',
  },
  {
    stage: 'Commercialisation',
    member: 'Dr. Sangeeta Maini',
    metric: '16 yrs',
    claim: 'Advancing innovation',
    detail: 'Headed innovation centres',
  },
];

/** Where the team has trained and worked (from profiles and the team overview). */
export const institutions = [
  'AIIMS, New Delhi',
  'McMaster University',
  'Syngene',
  'Ranbaxy',
  'Advinus',
  'Intox',
  'University of Cambridge',
  'Harvard University',
  'Levim Lifetech',
  'BCIL',
  'University College London',
  'IISER Pune',
  'IILM University',
  'Fudan University',
  'Huashan Hospital',
  'Shanghai Jiao Tong University',
  'Ben-Gurion University',
  'Bharathidasan University',
];
