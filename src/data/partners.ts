export interface Partner {
  name: string;
  logo: string;
  kind: 'Industry' | 'Academia' | 'Government' | 'Clinical';
}

export const partners: Partner[] = [
  { name: 'All India Institute of Medical Sciences (AIIMS), New Delhi', logo: '/images/partners/aiims-delhi.webp', kind: 'Clinical' },
  { name: 'National Cancer Institute (NCI), AIIMS Jhajjar', logo: '/images/partners/aiims-delhi.webp', kind: 'Clinical' },
  {
    name: 'UNESCO – Regional Centre for Biotechnology',
    logo: '/images/partners/unesco-rcb.webp',
    kind: 'Government',
  },
  { name: 'MIT Vishwaprayag University', logo: '/images/partners/mit-vpu.webp', kind: 'Academia' },
  { name: 'NIPER Guwahati', logo: '/images/partners/niper-guwahati.webp', kind: 'Academia' },
  {
    name: 'CVJ Centre for Synthetic Biology & Bio-Manufacturing',
    logo: '/images/partners/cvj-centre.webp',
    kind: 'Academia',
  },
  { name: 'Metropolis — The Pathology Specialist', logo: '/images/partners/metropolis.webp', kind: 'Clinical' },
  { name: 'Indian Council of Medical Research (ICMR)', logo: '/images/partners/icmr.webp', kind: 'Government' },
  { name: 'Eviogen', logo: '/images/partners/eviogen.webp', kind: 'Industry' },
];
