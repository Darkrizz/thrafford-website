import type { IconName } from '../components/Icon.astro';

export const mission =
  'We are rebuilding how cell therapy is manufactured — so that treatments become affordable, scalable and accessible to the patients who need them.';

export interface Pillar {
  id: string;
  title: string;
  metric: string;
  body: string;
  icon: IconName;
  visual: 'affordability' | 'scalability' | 'accessibility';
  visualLabel: string;
}

export const pillars: Pillar[] = [
  {
    id: 'affordability',
    title: 'Affordability',
    metric: 'One batch — many patients',
    body: 'Allogeneic donor-derived therapies reduce manufacturing cost by enabling multi-patient batches.',
    icon: 'coins',
    visual: 'affordability',
    visualLabel: 'Illustration: a single cell batch branching out to treat many patients',
  },
  {
    id: 'scalability',
    title: 'Scalability',
    metric: '40× production capacity',
    body: 'Our modular platform delivers up to 40× capacity using parallel multi-batch processing systems.',
    icon: 'layers',
    visual: 'scalability',
    visualLabel: 'Illustration: a grid of 40 parallel manufacturing batches',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    metric: 'Therapies closer to home',
    body: 'India’s first point-of-care CAR-T manufacturing system — enabling hospital-based therapy production.',
    icon: 'hospital',
    visual: 'accessibility',
    visualLabel: 'Illustration: a hospital hub at the centre of a network of nearby sites',
  },
];

export const pocmapAdvantages: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Decentralised manufacturing',
    body: 'Therapies are produced at the hospital, where the patient is treated.',
    icon: 'hospital',
  },
  {
    title: 'Parallel multi-batch processing',
    body: 'Multiple batches run side by side to increase output.',
    icon: 'layers',
  },
  {
    title: 'Platform-compatible',
    body: 'Works with CAR-T, NK and dendritic cell systems.',
    icon: 'cell',
  },
  {
    title: 'Built-in quality control',
    body: 'Real-time sterility and quality control integration.',
    icon: 'shield',
  },
  {
    title: 'Simpler logistics',
    body: 'Reduced logistics and fewer freeze–thaw cycles.',
    icon: 'route',
  },
];

export const applications: { title: string; icon: IconName }[] = [
  { title: 'CAR-T therapies', icon: 'cell' },
  { title: 'NK & dendritic cell therapies', icon: 'molecule' },
  { title: 'Autoimmune & infectious diseases', icon: 'shield' },
  { title: 'Solid tumours & advanced gene editing', icon: 'dna' },
];

export const approaches = [
  {
    term: 'TiCoBi',
    def: 'Our patent-filed, time-controlled bioprocess for expanding γδ T cells.',
  },
  {
    term: 'γδ T cells',
    def: 'Immune cells that recognise cancer independently of HLA, with minimal GvHD risk.',
  },
  {
    term: 'Off-the-shelf',
    def: 'Allogeneic, donor-derived doses ready when patients need them.',
  },
  {
    term: 'PoCMAP',
    def: 'Point-of-care manufacturing platform — cell therapy production inside the hospital.',
  },
];

/* ------------------------------------------------------------------ */
/* TiCoBi & the AML-MRD programme (source: Technology section brief)   */
/* ------------------------------------------------------------------ */

export const oneLiner =
  'Thrafford is developing India’s first scalable, off-the-shelf γδ T-cell therapy manufacturing platform, designed to eliminate measurable residual disease (MRD) before it causes AML relapse.';

/** The unmet need in acute myeloid leukaemia (AML). */
export const amlNeed = [
  {
    value: 80,
    display: '70–80%',
    label: 'of AML deaths happen after relapse',
  },
  {
    value: 40000,
    prefix: '~',
    label: 'new AML cases a year in India',
  },
  {
    value: 17000,
    prefix: '~',
    label: 'patients MRD-positive each year',
  },
  {
    value: 80,
    display: '65–80%',
    label: 'relapse if MRD persists after consolidation',
  },
];

export const ticobi = {
  name: 'TiCoBi',
  expansion: 'Time-Controlled Bioprocess',
  summary:
    'A proprietary, patent-filed, time-controlled bioprocess that expands a single healthy donor’s blood into up to 15 ready-to-use, off-the-shelf γδ T-cell doses — with no viral vectors, no gene editing and no patient-specific manufacturing.',
  steps: [
    { title: 'Healthy donor', body: 'Blood from a single healthy donor — not the patient.' },
    { title: 'γδ T-cell isolation', body: 'Gamma-delta T cells are isolated and purified ex vivo.' },
    {
      title: 'Time-controlled expansion',
      body: 'Temporally and volumetrically controlled expansion yields a non-exhausted memory phenotype.',
    },
    { title: 'Up to 15 doses', body: 'Off-the-shelf doses, ready when the clinician needs them.' },
  ],
  attributes: [
    'No gene editing',
    'No viral vectors',
    'MHC-independent',
    'Non-exhausted memory phenotype',
    'Antigen-agnostic',
    'Minimal GvHD risk',
  ],
};

/** Why γδ T cells work in the MRD setting. */
export const mechanism = [
  {
    title: 'MHC-independent recognition',
    body: 'γδ T cells recognise stress-induced ligands (MICA/B and ULBP family) on residual leukaemic cells, independently of classical HLA presentation.',
    icon: 'molecule' as IconName,
  },
  {
    title: 'Graft-versus-leukaemia, minimal GvHD',
    body: 'Potent anti-leukaemic activity with minimal risk of graft-versus-host disease — the basis for allogeneic, off-the-shelf therapy.',
    icon: 'shield' as IconName,
  },
  {
    title: 'Built for repeat dosing',
    body: 'Suited to repeated administration during remission or in the peri-transplant setting, when disease burden is lowest.',
    icon: 'cell' as IconName,
  },
];

export const pipeline: { code: string; indication: string; modality: string; platform: string; lead?: boolean }[] = [
  {
    code: 'TLS-GD-001AM',
    indication: 'Acute Myeloid Leukaemia',
    modality: 'Allogeneic γδ T cells',
    platform: 'TiCoBi',
    lead: true,
  },
  {
    code: 'TLS-GD-001GB',
    indication: 'Glioblastoma',
    modality: 'Allogeneic γδ T cells',
    platform: 'TiCoBi',
  },
  {
    code: 'TLS-GDC-001LL',
    indication: 'Lymphoma & Leukaemia',
    modality: 'γδ CD19 CAR-T',
    platform: 'Healthy donor · one batch for 15 patients',
  },
];

/** Ongoing project: a human data census for conventional and quantum AI (aim and uses only). */
export const quantumAI = {
  aim: 'We are mapping how human genes, proteins, metabolites, drugs and cells interact, drawing on the largest possible census of biomedical data resources and structuring it for quantum AI. The first goal is a working simulation of the immune system; every layer we add opens new questions, from cancer to autoimmunity and ageing.',
  contrast: [
    {
      topic: 'Scope',
      conventional: 'Models one layer of biology at a time, such as gene expression or protein binding, and joins the results afterwards.',
      quantum: 'Aims to hold several layers of human biology inside a single model.',
    },
    {
      topic: 'Interactions',
      conventional: 'Trims the interactions it considers down to what classical hardware can compute.',
      quantum: 'Explores interaction spaces that grow too quickly for exhaustive classical search.',
    },
    {
      topic: 'Readiness',
      conventional: 'Mature, and in routine use across drug discovery today.',
      quantum: 'Still emerging. We are preparing the data now so it is ready when the hardware is.',
    },
  ],
  uses: [
    {
      title: 'Predicting adverse reactions',
      body: 'Simulating how a patient’s immune system may respond to a cell therapy, including cytokine release syndrome and neurotoxicity, before the first dose.',
      icon: 'alert' as IconName,
    },
    {
      title: 'Choosing targets',
      body: 'Ranking the stress ligands, receptors and pathways worth pursuing in future γδ T-cell and CAR-T programmes.',
      icon: 'molecule' as IconName,
    },
    {
      title: 'Matching patients',
      body: 'Identifying the patients most likely to respond, from the molecular profile of their disease.',
      icon: 'user' as IconName,
    },
    {
      title: 'Repurposing drugs',
      body: 'Finding approved drugs that act on the same interaction networks as a disease, as candidates for new uses.',
      icon: 'flask' as IconName,
    },
  ],
};

export const patents = [
  {
    number: '2026••••2935',
    title: 'Temporally and Volumetrically Controlled Process for Ex-vivo Expansion of V-Gamma-9V-Delta-2 T Cells',
  },
  {
    number: '2025••••8309',
    title: 'Point of Care Manufacturing Platform for Engineered Gamma Delta T cells',
  },
  {
    number: '2025••••2865',
    title: 'Point of Care Manufacturing and Processing Platform for Cell Therapy',
  },
];
