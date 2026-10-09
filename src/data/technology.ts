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
    label: 'of AML deaths happen after remission',
    note: 'The disease hides as measurable residual disease, then resurfaces months later.',
  },
  {
    value: 40000,
    prefix: '~',
    label: 'new AML cases a year in India',
    note: 'A fast-growing cancer of the blood and bone marrow.',
  },
  {
    value: 17000,
    prefix: '~',
    label: 'patients MRD-positive each year',
    note: 'Intermediate- or high-risk, with no therapy designed for this window.',
  },
  {
    value: 80,
    display: '65–80%',
    label: 'relapse if MRD persists after consolidation',
    note: 'Despite conventional post-remission therapy.',
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

/** How TiCoBi compares with today’s approaches. */
export const comparison = {
  columns: ['Autologous CAR-T', 'Gene-edited allogeneic CAR-T', 'Thrafford TiCoBi'],
  rows: [
    {
      label: 'Cell source',
      values: ['The patient’s own cells', 'Healthy donor', 'Healthy donor (γδ T cells)'],
    },
    {
      label: 'Manufacturing',
      values: ['One batch per patient, made sequentially', 'Multi-gene editing (TRAC/B2M knockouts)', 'One donor batch, up to 15 doses'],
    },
    {
      label: 'Gene editing / viral vectors',
      values: ['Viral vector required', 'Multiple edits required', 'None'],
    },
    {
      label: 'Status & cost',
      values: ['₹30–50 lakh per patient in India', 'Investigational (Phase 1/2), high COGS', 'Structural cost advantage, off-the-shelf'],
    },
  ],
};

export const pipeline = [
  {
    code: 'TLS-GD-001AM',
    indication: 'Acute Myeloid Leukaemia',
    detail: 'γδ T cells for intermediate- and high-risk, MRD-positive AML in remission.',
    modality: 'Allogeneic γδ T cells',
    platform: 'TiCoBi',
    tags: ['Oncology', 'MRD'],
    lead: true,
  },
  {
    code: 'TLS-GD-001GB',
    indication: 'Glioblastoma',
    detail: 'Extending the TiCoBi platform to glioblastoma and other solid tumours.',
    modality: 'Allogeneic γδ T cells',
    platform: 'TiCoBi',
    tags: ['Oncology', 'Solid tumour'],
  },
  {
    code: 'TLS-GDC-001LL',
    indication: 'Lymphoma & Leukaemia',
    detail:
      'Healthy-donor γδ CD19 CAR-T: one batch for 4–8 patients at ~5× lower cost, with a reagent-agnostic design that extends to autoimmune disease such as lupus.',
    modality: 'γδ CD19 CAR-T',
    platform: 'Healthy donor',
    tags: ['Oncology', 'Autoimmune'],
  },
];

export const patents = [
  {
    number: '202611062935',
    title: 'Temporally and Volumetrically Controlled Process for Ex-vivo Expansion of V-Gamma-9V-Delta-2 T Cells',
  },
  {
    number: '202511108309',
    title: 'Point of Care Manufacturing Platform for Engineered Gamma Delta T cells',
  },
  {
    number: '202511022865',
    title: 'Point of Care Manufacturing and Processing Platform for Cell Therapy',
  },
];

export const moat: { title: string; icon: IconName }[] = [
  { title: 'Patent-filed manufacturing', icon: 'file' },
  { title: 'Trade-secret process logic', icon: 'shield' },
  { title: 'AML-specific regulatory dossier & MRD strategy', icon: 'layers' },
  { title: 'Four hospital letters of intent', icon: 'hospital' },
];
