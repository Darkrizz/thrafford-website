import type { IconName } from '../components/Icon.astro';

/**
 * Collaborators grouped by sector. Partner names and logos stay off the site
 * until each organisation has approved their use, so only counts are kept here.
 */
export interface PartnerSector {
  id: string;
  title: string;
  body: string;
  icon: IconName;
  count: number;
}

export const partnerSectors: PartnerSector[] = [
  {
    id: 'clinical',
    title: 'Hospitals and cancer centres',
    body: 'Clinical teams keep our AML programme anchored to the patients they treat, and their hospitals are the setting PoCMAP is built for.',
    icon: 'hospital',
    count: 2,
  },
  {
    id: 'academic',
    title: 'Universities and research institutes',
    body: 'Academic groups in pharmaceutical sciences, synthetic biology and biomanufacturing work with us on the science underneath TiCoBi.',
    icon: 'graduation',
    count: 3,
  },
  {
    id: 'public',
    title: 'Public research bodies',
    body: 'National and intergovernmental research organisations bring public-health priorities and the standards that publicly backed research has to meet.',
    icon: 'landmark',
    count: 2,
  },
  {
    id: 'industry',
    title: 'Diagnostics and biotech industry',
    body: 'Pathology laboratories and biotechnology companies add the testing capacity and commercial experience a therapy needs before it reaches the clinic.',
    icon: 'flask',
    count: 2,
  },
];

export const partnerTotal = partnerSectors.reduce((sum, s) => sum + s.count, 0);
