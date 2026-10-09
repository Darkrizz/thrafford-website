export interface Partner {
  name: string;
  logo: string;
  kind: 'Industry' | 'Academia' | 'Government' | 'Clinical';
}

export const partners: Partner[] = [
  { name: 'IBM Quantum', logo: '/images/partners/ibm-quantum.webp', kind: 'Industry' },
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
