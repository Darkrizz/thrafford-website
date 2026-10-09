/**
 * Long-form leadership profiles. Content is carried over from the original
 * thrafford.com profile pages (/anita-chugh/ and /kadalmani-krishnan/).
 */

export interface LeaderProfile {
  slug: string;
  /** Matches the member name in team.ts so role, photo and LinkedIn stay in one place. */
  member: string;
  /** Organisation line under the role, from the original page. */
  affiliation: string;
  summary: string;
  /** Meta description (≤160 chars). */
  seoDescription: string;
  stats: { value: string; label: string }[];
  education: { label: string; value: string }[];
  certifications?: string[];
  quote?: { text: string; note?: string };
  /** Long-form story, told in chapters. */
  chapters?: { title: string; body: string[]; list?: string[] }[];
  /** Plain biography paragraphs (used when the story isn't chaptered). */
  bio?: string[];
  focusTitle: string;
  focus: string[];
  career?: string[];
  highlights?: { group: string; items: { label: string; href: string }[] }[];
}

export const leaderProfiles: LeaderProfile[] = [
  {
    slug: 'anita-chugh',
    member: 'Dr. Anita Chugh',
    affiliation: 'Co-Founder & CSO, Thrafford Lifescience',
    seoDescription:
      'Dr. Anita Chugh, Co-Founder & CSO of Thrafford: a pharmacologist who has advanced 50+ therapeutic candidates from bench to clinic over three decades.',
    summary:
      'A pharmacologist who has spent more than three decades turning science into medicines — scaling research organisations, advancing therapeutic candidates from bench to clinic, and mentoring the scientists who now lead them.',
    stats: [
      { value: '50+', label: 'Therapeutic candidates advanced from bench to clinic' },
      { value: '7', label: 'Reached clinical-stage development' },
      { value: '180+', label: 'Scientists led in a single division at Syngene' },
      { value: '~5×', label: 'Revenue growth delivered for that division' },
      { value: '30+', label: 'Peer-reviewed publications' },
      { value: '43', label: 'Published patents, 3 granted' },
    ],
    education: [
      { label: 'Ph.D.', value: 'AIIMS, Delhi, India' },
      { label: 'Post-doctoral Fellow', value: 'McMaster University, Canada' },
    ],
    quote: {
      text: 'Leadership in science is not just about discovery — it’s about enabling ecosystems that sustain innovation and impact.',
    },
    chapters: [
      {
        title: 'Organisational growth & programme leadership',
        body: [
          'At Ranbaxy, Advinus, and Syngene, I played a central role in establishing and scaling innovations into globally recognized products, platforms and services. These responsibilities demanded not only scientific vision but also the design of programs, systems, and policies that delivered sustainable growth. At Syngene, I led a division of over 180 scientists, achieving nearly five-fold growth in revenues while embedding performance metrics and global best practices.',
        ],
      },
      {
        title: 'Advancing research & translational impact',
        body: [
          'I have led and contributed to the advancement of 50+ therapeutic candidates from bench to clinic, including seven that progressed to clinical-stage development, spanning oncology, diabetology, cardiovascular disease, CNS, inflammation, and cell & gene therapy. Beyond research execution, I have contributed to in-licensing and out-licensing initiatives and technologies, authored 30+ peer-reviewed publications, and hold 43 published patents (3 granted).',
        ],
      },
      {
        title: 'Global collaborations, compliance & regulatory alignment',
        body: [
          'Throughout my career, I have initiated and managed international collaborative projects requiring alignment with diverse stakeholders across academia, industry, regulators, and government agencies. At Intox and Advinus, I led projects through international audits, client-driven quality assurance frameworks, and regulatory submissions, ensuring compliance with both national and global standards.',
        ],
      },
      {
        title: 'Capacity building, mentorship & knowledge sharing',
        body: [
          'A hallmark of my journey has been team building and mentoring. I have trained Ph.Ds, Postdocs, MBBS, MDs, and M.Pharm graduates — many of whom now hold leadership roles in academia and industry. As Faculty at UNESCO–RCB’s Industrial Biotechnology program and as an invited speaker at national and international forums, I have actively contributed to bridging academia and industry.',
        ],
      },
      {
        title: 'Business leadership & resource management',
        body: [
          'I have held P&L responsibility, driving business unit growth, grant funding, and resource allocation. My leadership has included board-level engagement, where I aligned organizational priorities with long-term strategy. This blend of scientific leadership and business acumen ensures that programs I lead are innovative, scalable, and sustainable.',
        ],
      },
      {
        title: 'Policy engagement & national committees',
        body: ['I have been privileged to serve on expert committees of national importance, including:'],
        list: [
          'Advisory Committee for Advanced Industrial Training (UNESCO–RCB, DBT)',
          'ICMR Delphi Panel on Phase 1 Clinical Trials',
          'Editorial and reviewer roles for international journals',
        ],
      },
    ],
    focusTitle: 'Key focus areas',
    focus: [
      'Translational Research & Drug Discovery',
      'Regulatory Science & Global Compliance',
      'Strategic Program Development',
      'Innovation Ecosystems & Mentorship',
      'Leadership in Life Sciences & Biotechnology',
    ],
    career: ['Ranbaxy', 'Advinus', 'Syngene', 'Intox', 'UNESCO–RCB'],
  },
  {
    slug: 'kadalmani-krishnan',
    member: 'Dr. Kadalmani Krishnan',
    affiliation: 'Founder, Thrafford Lifescience',
    seoDescription:
      'Dr. Kadalmani Krishnan, CEO of Thrafford: Cambridge Ph.D., Harvard alumnus and DBT Innovator Award winner who led India’s first GLP-1 biosimilar.',
    summary:
      'A Cambridge Ph.D. and Harvard Medical School alumnus whose career spans India, Europe and North America — bridging discovery and real-world impact across metabolic disease, cancer diagnostics and next-generation biotherapeutics.',
    stats: [
      { value: '1st', label: 'GLP-1 receptor agonist biosimilar developed in India' },
      { value: 'DBT', label: 'Innovator Award' },
      { value: '3', label: 'Continents: India, Europe and North America' },
      { value: '4', label: 'National and global advisory bodies: ICMR, BIRAC, WHO, CDSCO' },
    ],
    education: [
      { label: 'Post-doctoral Fellow', value: 'Harvard University, USA' },
      { label: 'Ph.D.', value: 'University of Cambridge, UK' },
      { label: 'M.Sc.', value: 'Bangalore University, India' },
    ],
    certifications: [
      'NIDA Clinical Trials Network — GCP, NIH (USA)',
      'Certified Lean Six Sigma Green Belt, Exemplar Global',
    ],
    quote: {
      text: 'Bench to society.',
      note: 'The mindset he advocates to inspire the next generation of scientists and innovators.',
    },
    bio: [
      'Dr. Kadalmani Krishnan is the Founder of Thrafford Lifescience, where he integrates science, strategy, and innovation to drive transformative healthcare solutions. He has led the development of an IP-driven point-of-care biomanufacturing platform, secured multi-source funding, and built global collaborations with leading institutions including AIIMS, THSTI, ICMR, MITVP, IBM, and others.',
      'Previously, as General Manager – Strategy & Drug Development at Levim Lifetech, Dr. Krishnan spearheaded the creation of India’s first GLP-1 receptor agonist biosimilar, achieving near-total import substitution in diabetes care and earning the DBT Innovator Award. His strategic leadership has advanced multiple therapeutic programs, strengthened governance frameworks, and positioned Thrafford as a global innovation-driven enterprise.',
      'A Cambridge Ph.D. and Harvard Medical School alumnus, Dr. Krishnan’s career spans India, Europe, and North America, bridging discovery and real-world impact across metabolic diseases, cancer diagnostics, and next-generation biotherapeutics. He has advised national and global bodies including ICMR, BIRAC, WHO and CDSCO, contributing to policy, innovation funding, and clinical frameworks.',
      'As a TEDx speaker and mentor, he champions the convergence of AI, quantum computing, and advanced biologics in healthcare — advocating a “bench-to-society” mindset to inspire the next generation of scientists and innovators.',
    ],
    focusTitle: 'Key areas',
    focus: [
      'Translational Immuno-Biology',
      'Metabolic Disorders and Therapeutics',
      'Clinical Efficacy & Safety Evaluation',
      'Biomanufacturing & Precision Therapeutics',
      'Point-of-Care Cell Therapy Manufacturing (PoCMAP)',
      'AI & Quantum-driven Biomedical Research',
    ],
    career: ['Levim Lifetech', 'AIIMS', 'THSTI', 'ICMR', 'MITVP', 'IBM'],
    highlights: [
      {
        group: 'Talks',
        items: [
          { label: 'TEDx lecture', href: 'https://youtu.be/bpTaufFrcDg' },
          { label: 'Skill Development Programme', href: 'https://www.instagram.com/p/DKMkmYJopju/' },
          { label: 'Expert Insights — Cell & Gene Therapy', href: 'https://www.instagram.com/p/DLEdLz0oohn/' },
          {
            label: 'Clinical Research Excellence — Navitas',
            href: 'https://www.navitaslifesciences.com/biosimilar-cro-biosimilar-clinical-trials-excellence-for-levim-biotech',
          },
        ],
      },
      {
        group: 'Papers',
        items: [
          {
            label: 'Developed & launched a GLP-1 RA biosimilar',
            href: 'https://www.sciencedirect.com/science/article/pii/S0168822723007970',
          },
          { label: 'Optimization of CD19-CAR', href: 'https://www.researchsquare.com/article/rs-6115435/v2' },
          { label: 'Regulation of Class 1A PI3K subunits', href: 'https://pubmed.ncbi.nlm.nih.gov/35429500/' },
          { label: 'Assembly of novel PI3K nuclear dimers', href: 'https://www.biorxiv.org/content/10.1101/791277v1' },
        ],
      },
      {
        group: 'Recognition',
        items: [
          { label: 'University of Cambridge — Alumni', href: 'https://www.bioc.cam.ac.uk/mottowen/aboutus' },
          {
            label: 'Glenmark — Liraglutide biosimilar launch',
            href: 'https://www.prnewswire.com/in/news-releases/glenmark-is-the-first-to-launch-biosimilar-of-popular-anti-diabetic-drug-liraglutide-in-india-302025148.html',
          },
          {
            label: 'Harvard — Protein complex network',
            href: 'https://web.stanford.edu/class/gene211/pdfs/Guruharsha-Drosophila-proteincomplex-network.pdf',
          },
        ],
      },
    ],
  },
];

export const profileSlugs = new Set(leaderProfiles.map((p) => p.slug));
