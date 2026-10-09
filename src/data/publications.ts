export type PublicationType = 'paper' | 'granted' | 'patent' | 'chapter';

export interface Publication {
  type: PublicationType;
  title: string;
  authors: string;
  venue?: string;
  year?: number;
  doi?: string;
  /** Entry is truncated on the source site; shown with a notice. */
  incomplete?: boolean;
}

export const publicationTypes: { id: PublicationType; label: string; singular: string }[] = [
  { id: 'paper', label: 'Research papers', singular: 'Paper' },
  { id: 'granted', label: 'Granted patents', singular: 'Granted patent' },
  { id: 'patent', label: 'Published patents', singular: 'Published patent' },
  { id: 'chapter', label: 'Book chapters', singular: 'Book chapter' },
];

/** Generated from the original thrafford.com/publications page (duplicate entry removed). */
export const publications: Publication[] = [
  {
    "authors": "Kadalmani Krishnan, Anita Chugh, et al.",
    "title": "Computational modeling and optimization of CAR-T cell receptors targeting CD19 for enhanced efficacy and minimized toxicity",
    "venue": "Preprint at Research Square",
    "year": 2025,
    "doi": "10.21203/rs.3.rs-6115435/v2",
    "type": "paper"
  },
  {
    "authors": "Krishnan, K., Chugh, A., Niranjan, V., & Dhar, P. K.",
    "title": "Recoding Genomic Elements with AI and Quantum Computation to Build the Next Generation Drug Discovery Platform",
    "venue": "Preprints",
    "year": 2025,
    "type": "paper"
  },
  {
    "authors": "Kadalmani Krishnan, Srikar Raman, et al.",
    "title": "Phase 3 efficacy and safety trial of proposed liraglutide biosimilar for reduction of glycosylated hemoglobin (HbA1c) in patients with Type 2 Diabetes",
    "venue": "Diabetes Research and Clinical Practice",
    "year": 2023,
    "type": "paper"
  },
  {
    "authors": "Bansode, S.; Singh, P. K.; Tellis, M.; Chugh, A.; et al.",
    "title": "A comprehensive molecular and clinical investigation of approved anti-HCV drugs repurposing against SARS-CoV-2 infection",
    "venue": "Vaccines, 11(3), 515",
    "year": 2023,
    "type": "paper"
  },
  {
    "authors": "Natasha S Clayton, et al.",
    "title": "Assembly of nuclear dimers of PI3K regulatory subunits is regulated by the Cdc42-activated tyrosine kinase ACK",
    "venue": "J Biol Chem",
    "year": 2022,
    "type": "paper"
  },
  {
    "authors": "Joshi, R. S.; Jagdale, S. S.; Bansode, S. B.; Shankar, S. S.; Tellis, M. B.; Pandya, V. K.; Chugh, A.; Giri, A. P.; Kulkarni, M. J.",
    "title": "Discovery of potential multi-target-directed ligands by targeting host-specific SARS-CoV-2 structurally conserved main protease",
    "venue": "Journal of Biomolecular Structure and Dynamics, 39(9), 3099-3114. (2021)",
    "year": 2021,
    "type": "paper"
  },
  {
    "authors": "Natasha S. Clayton, Millie Fox, Jose J. Vicenté-Garcia, Courtney M. Schroeder, Trevor D. Littlewood, Jonathan I. Wilde, Jessica Corry, Kadalmani Krishnan, Qifeng Zhang, Michael J. O. Wakelam, Murray J. B. Brown, Claire Crafter, Helen R. Mott, Darerca Owen",
    "title": "Assembly of novel, nuclear dimers of the PI3-Kinase regulatory subunits underpins the pro-proliferative activity of the Cdc42-activated tyrosine kinase, ACK",
    "venue": "Biorxiv, 2019",
    "year": 2019,
    "type": "paper"
  },
  {
    "authors": "Basu, Swapan; Barawkar, Debashis A.; Ramdas, Vaibhav; Waman, Yash; Patel, Mehul; Panmand, Amol; Kumar, Sanjeev; Thorat, Sunil; Bonagiri, Rajashekar; Jadhav, Dhananjay; Mukhopadhyay, Pradip; Prasad, Vinay; Reddy, B. S.; Goswami, Anil; Chaturvedi, S.; Menon, S.; Quraishi, A.; Ghosh, Indranil; Dusange, S.; Paliwal, S.; Kulkarni, A.; Karande, Vijay; Thakre, R.; Bedse, G.; Rouduri, S.; Gundu, J.; Palle, V. P.; Chugh, A.; Mookhtiar, K. A.",
    "title": "A2B adenosine receptor antagonists: Design, synthesis and biological evaluation of novel xanthine derivatives",
    "venue": "European Journal of Medicinal Chemistry, 151, 986-996. (2017)",
    "year": 2017,
    "type": "paper"
  },
  {
    "authors": "Koul, S.; Ramdas, V.; Barawkar, Debashis A.; Waman, Yash B.; Prasad, N.; Madadi, S. K.; Shejul, Y. D.; Bonagiri, R.; Basu, Swapan; Menon, S.; Reddy, S. B.; Chaturvedi, S.; Chennamaneni, S. R.; Bedse, G.; Thakare, R.; Gundu, J.; Chaudhary, S.; De, S.; Meru, A. V.; Palle, V.; Chugh, A.; Mookhtiar, K. A.",
    "title": "Design and synthesis of novel, potent and selective hypoxanthine analogs as adenosine A1 receptor antagonists and their biological evaluation",
    "venue": "Bioorganic & Medicinal Chemistry, 25(6), 1963-1975. (2017)",
    "year": 2017,
    "type": "paper"
  },
  {
    "authors": "Deshpande, Anil M.; Bhuniya, Debnath; De, Siddhartha; Dave, B.; Vyavahare, V. P.; Kurhade, S. H.; Kandalkar, S. R.; Naik, K. P.; Kobal, B. S.; Kaduskar, R. D.; Basu, Swapan; Jain, V.; Patil, P.; Chaturvedi, S.; Joshi, S.; Bhat, G.; Raje, A. A.; Reddy, S.; Gundu, J.; Madgula, V.; Tambe, S.; Shitole, P.; Umrani, D.; Chugh, A.; Palle, V. P.; Mookhtiar, K. A.",
    "title": "Discovery of liver-directed glucokinase activator having anti-hyperglycemic effect without hypoglycemia",
    "venue": "European Journal of Medicinal Chemistry, 133, 268-286. (2017)",
    "year": 2017,
    "type": "paper"
  },
  {
    "authors": "Deshpande, Anil; Bhuniya, Debnath; De, Siddhartha; Umrani, Dhananjay; Madgula, Vamsi; Chugh, Anita; Palle, Venkata; Mookhtiar, Kasim",
    "title": "Discovery of a liver-directed glucokinase activator having anti-hyperglycemic effect without hypoglycemic potential",
    "venue": "251st ACS National Meeting & Exposition, San Diego, CA, United States, March 13-17, 2016 (2016), MEDI-379",
    "year": 2016,
    "type": "paper"
  },
  {
    "authors": "Barawkar, Dinesh A.; Bandyopadhyay, Anish; Deshpande, Anil; Koul, Summon; Kandalkar, Sachin; Patil, Pradeep; Khose, Goraksha; Vyas, Samir; Mone, Mahesh; Bhosale, Shubhangi; et al.",
    "title": "Discovery of pyrazole carboxylic acids as potent inhibitors of rat long chain L-2-hydroxy acid oxidase",
    "venue": "Bioorganic & Medicinal Chemistry Letters (2012), 22(13), 4341-4347",
    "year": 2012,
    "type": "paper"
  },
  {
    "authors": "Barawkar, Dinesh A.; Meru, Ashwin; Bandyopadhyay, Anish; Banerjee, Abir; Deshpande, Anil M.; Athare, Chandrashekhar; Koduru, Chandrasekhar; Khose, Goraksha; Gundu, Jayasagar; Mahajan, Koshu; et al.",
    "title": "Potent and Selective Inhibitors of Long Chain L-2-Hydroxy Acid Oxidase Reduced Blood Pressure in DOCA Salt-Treated Rats",
    "venue": "ACS Medicinal Chemistry Letters (2011), 2(12), 919-923",
    "year": 2011,
    "type": "paper"
  },
  {
    "authors": "Bhuniya, Debnath; Umrani, Dhananjay; Dave, Bhavesh; Salunke, Deepak; Kukreja, Gagan; Gundu, Jayasagar; Naykodi, Minakshi; Shaikh, Nadim S.; Shitole, Prasad; Kurhade, Santosh; et al.",
    "title": "Discovery of a potent and selective small molecule hGPR91 antagonist",
    "venue": "Bioorganic & Medicinal Chemistry Letters (2011), 21(12), 3596-3602",
    "year": 2011,
    "type": "paper"
  },
  {
    "authors": "Singh, Shuchita; Roy, Subhasis; Sethi, Sachin; Benjamin, Biju; Sundaram, Sindhuja; Khanna, Vivek; Kandalkar, Sachin R.; Pal, Chanchal; Kant, Rajiv; Patra, Ashok Kumar; et al.",
    "title": "RBx-0597, a potent, selective and slow-binding inhibitor of dipeptidyl peptidase-IV for the treatment of type 2 diabetes",
    "venue": "European Journal of Pharmacology (2011), 655(1-3), 121",
    "year": 2011,
    "type": "paper"
  },
  {
    "authors": "Sinha, S.; Gupta, S.; Malhotra, S.; Krishna, N. S.; Meru, A. V.; Babu, V.; Bansal, V.; Garg, M.; Kumar, N.; Chugh, A.; et al.",
    "title": "AE9C90CB: a novel, bladder-selective muscarinic receptor antagonist for the treatment of overactive bladder",
    "venue": "British Journal of Pharmacology (2010), 160(5), 1119-1127",
    "year": 2010,
    "type": "paper"
  },
  {
    "authors": "Gupta, Suman; Singh, Rakesh Kumar; Nanda, Kamna; Chatterjee, Mou; Tiwari, Atul; Sundaram, Sindhuja; Gupta, Dikshi; Chugh, Anita; Dastidar, Sunanda; Ray, Abhijit",
    "title": "Ratiometric Ca+2 measurement in human recombinant muscarinic receptor subtypes using the Flexstation scanning fluorometer",
    "venue": "Journal of Receptors and Signal Transduction (2009), 29(2), 100-106",
    "year": 2009,
    "type": "paper"
  },
  {
    "authors": "Nanda, Kamna; Naruganahalli, Krishna S.; Gupta, Suman; Malhotra, Shivani; Tiwari, Atul; Hegde, Laxminarayan G.; Jain, Sanjay; Sinha, Neelima; Gupta, Jung B.; Chugh, Anita; et al.",
    "title": "RBx 6198: A novel α1-adrenoceptor antagonist for the treatment of benign prostatic hyperplasia",
    "venue": "European Journal of Pharmacology (2009), 607(1-3), 213-219",
    "year": 2009,
    "type": "paper"
  },
  {
    "authors": "Sattigeri, Jitendra A.; Andappan, Murugaiah M. S.; Kishore, Kaushal; Thangathirupathy, Srinivasan; Sundaram, Sinduja; Singh, Shuchita; Sharma, Suchitra; Davis, Joseph A.; Chugh, Anita; Bansal, Vinay S.",
    "title": "Discovery of conformationally rigid 3-azabicyclo[3.1.0]hexane-derived dipeptidyl peptidase-IV inhibitors",
    "venue": "Bioorganic & Medicinal Chemistry Letters (2008), 18(14), 4087-4091",
    "year": 2008,
    "type": "paper"
  },
  {
    "authors": "Kadalmani K, Deepa S, Bagavathi S, Anishetty S, Thangaraj K, Gajalakshmi AP",
    "title": "Independent origin of 185delAG BRCA1 mutation in an Indian family",
    "venue": "Neoplasma, 2008, 54(1):51-6",
    "year": 2008,
    "type": "paper"
  },
  {
    "authors": "Naruganahalli, Krishna S.; Sinha, Sandeep; Hegde, Laxminarayan G.; Meru, Ashwinkumar V.; Chugh, Anita; Kumar, Naresh; Gupta, Jung B.; Ray, Abhijit",
    "title": "Comparative in vivo uroselectivity profiles of anticholinergics, tested in a novel anesthetized rabbit model",
    "venue": "European Journal of Pharmacology (2007), 572(2-3), 207-212",
    "year": 2007,
    "type": "paper"
  },
  {
    "authors": "Kumar, Naresh; Kaur, Kirandeep; Aeron, Shelly; Dharmarajan, Sankaranarayanan; Silamkoti, Arun D. V.; Mehta, Anita; Gupta, Suman; Chugh, Anita; Gupta, Jang B.; Salman, Mohammad; et al.",
    "title": "Synthesis and optimization of novel and selective muscarinic M3 receptor antagonists",
    "venue": "Bioorganic & Medicinal Chemistry Letters (2007), 17(18), 5256-5260",
    "year": 2007,
    "type": "paper"
  },
  {
    "authors": "Mittra, Shivani; Malhotra, Shivani; Naruganahalli, Krishna S.; Chugh, Anita",
    "title": "Role of peripheral 5-HT1A receptors in detrusor over activity associated with partial bladder outlet obstruction in female rats",
    "venue": "European Journal of Pharmacology (2007), 561(1-3), 189-193",
    "year": 2007,
    "type": "paper"
  },
  {
    "authors": "Khattar, Sunil K.; Bora, Roop Singh; Priyadarsiny, Priyanka; Gautam, Aarti; Gupta, Dikshi; Tiwari, Atul; Nanda, Kamna; Singh, Rahul; Chugh, Anita; Bansal, Vinay; et al.",
    "title": "Molecular cloning, stable expression and cellular localization of human α1-adrenergic receptor subtypes: effect of charcoal/dextran treated serum on expression and localization of α1D-adrenergic receptor",
    "venue": "Biotechnology Letters (2006), 28(21), 1731-1739. DOI:10.1007/s10529-006-9148-x",
    "year": 2006,
    "doi": "10.1007/s10529-006-9148-x",
    "type": "paper"
  },
  {
    "authors": "Tiwari, Atul; Bansal, Vinay; Chugh, Anita; Mookhtiar, Kasim",
    "title": "Statins and myotoxicity: a therapeutic limitation",
    "venue": "Expert Opinion on Drug Safety (2006), 5(5), 651-666",
    "year": 2006,
    "type": "paper"
  },
  {
    "authors": "Meru, Ashwinkumar V.; Mittra, Shivani; Thyagarajan, Baskaran; Chugh, Anita",
    "title": "Intermittent claudication: an overview",
    "venue": "Atherosclerosis (Amsterdam, Netherlands) (2006), 187(2), 221-237",
    "year": 2006,
    "type": "paper"
  },
  {
    "authors": "Khattar, Sunil K.; Bora, Roop Singh; Priyadarsiny, Priyanka; Gupta, Dikshi; Khanna, Alka; Narayanan, K. Lakshmi; Babu, Venkatesh; Chugh, Anita; Saini, Kulvinder Singh",
    "title": "High level stable expression of pharmacologically active human M1-M5 muscarinic receptor subtypes in mammalian cells",
    "venue": "Biotechnology Letters (2006), 28(2), 121-129",
    "year": 2006,
    "type": "paper"
  },
  {
    "authors": "Tiwari, Atul; Krishna, N. S.; Nanda, Kamna; Chugh, Anita",
    "title": "Benign prostatic hyperplasia: an insight into current investigational medical therapies",
    "venue": "Expert Opinion on Investigational Drugs (2005), 14(11), 1359-1372",
    "year": 2005,
    "type": "paper"
  },
  {
    "authors": "Kaur, Kirandeep; Aeron, Shelly; Bruhaspathy, Miriyala; Shetty, Shankar J.; Gupta, Suman; Hegde, Laxminarayan H.; Silamkoti, Arun D. V.; Mehta, Anita; Chugh, Anita; Gupta, Jang B.; et al.",
    "title": "Design, synthesis and activity of novel derivatives of Oxybutynin and Tolterodine",
    "venue": "Bioorganic & Medicinal Chemistry Letters (2005), 15(8), 2093-2096",
    "year": 2005,
    "type": "paper"
  },
  {
    "authors": "Kadalmani K, Anishetty S, Gajalakshmi AP",
    "title": "A study on hereditary breast cancer patients – Bioinformatic and Experimental approaches",
    "venue": "Indo-Australian Conf. on Medical Biotechnology, proc. p.84",
    "year": 2004,
    "type": "paper"
  },
  {
    "authors": "Chugh, Anita; Ray, Abhijit; Gupta, Jung B.",
    "title": "Squalene epoxidase as hypocholesterolemic drug target revisited",
    "venue": "Progress in Lipid Research (2003), 42(1), 37-50",
    "year": 2003,
    "type": "paper"
  },
  {
    "authors": "Marcotte, E. R.; Chugh, A.; Barlas, C.; Mishra, R. K.",
    "title": "Differential regulation of striatal G protein levels following 1-methyl-4-phenyl-1,2,3,6-tetrahydropyridine administration in C57 BL/6 mice",
    "venue": "Neuroscience Letters (2001), 306(1-2), 21-24",
    "year": 2001,
    "type": "paper"
  },
  {
    "authors": "Ray, A.; Hegde, L. G.; Chugh, A.; Gupta, J. B.",
    "title": "Endothelin-receptor antagonists: current and future perspectives",
    "venue": "Drug Discovery Today (2000), 5(10), 455-464",
    "year": 2000,
    "type": "paper"
  },
  {
    "authors": "Marcotte, Eric R.; Chugh, Anita; Mishra, Ram K.; Johnson, Rodney L.",
    "title": "Protection against MPTP treatment by an analog of Pro-Leu-Gly-NH2 (PLG, MIF-1)",
    "venue": "Peptides (New York) (1998), 19(2), 403-406",
    "year": 1998,
    "type": "paper"
  },
  {
    "authors": "Gupta Y K; Chugh A; Kacker V; Mehta V S; Tandon P N",
    "title": "Development of neurogenic pulmonary edema at different grades of intracranial pressure in cats",
    "venue": "Indian journal of physiology and pharmacology (1998), 42(1), 71-80",
    "year": 1998,
    "type": "paper"
  },
  {
    "authors": "Mishra, Ram K.; Marcotte, Eric R.; Chugh, Anita; Barlas, Cia; Whan, Deborah; Johnson, Rodney L.",
    "title": "Modulation of dopamine receptor agonist-induced rotational behavior in 6-OHDA-lesioned rats by a peptidomimetic analog of Pro-Leu-Gly-NH2 (PLG)",
    "venue": "Peptides (New York) (1997), 18(8), 1209-1215",
    "year": 1997,
    "type": "paper"
  },
  {
    "authors": "Savelli, J. E.; Chugh, A.; Cheng, C.; Mishra, R. K.; Johnson, R. L.",
    "title": "Modulation of N-methyl-D-aspartate (NMDA) antagonist-induced darting behavior by the peptidomimetic PAMTA",
    "venue": "Brain Research (1995), 682(1,2), 41-9",
    "year": 1995,
    "type": "paper"
  },
  {
    "authors": "Gupta, Y. K.; Chugh, A.; Arora, S.; Seth, S. D.",
    "title": "Modulation of morphine-induced antinociception by intracerebroventricularly administered captopril",
    "venue": "Indian Journal of Experimental Biology (1991), 29(6), 543-5",
    "year": 1991,
    "type": "paper"
  },
  {
    "authors": "Bhandari, P.; Gupta, Y. K.; Seth, S. D.; Chugh, A.",
    "title": "Cisplatin-induced emesis: effect of chemoreceptor trigger zone ablation in dogs",
    "venue": "Asia Pacific Journal of Pharmacology (1989), 4(3), 209-11",
    "year": 1989,
    "type": "paper"
  },
  {
    "authors": "Gupta, Y. K.; Chugh, A.; Bhandari, P.; Seth, S. D.",
    "title": "Effect of intracerebroventricular administration of angiotensin II on emetic reflex in dogs",
    "venue": "Indian Journal of Experimental Biology (1989), 27(6), 576-7",
    "year": 1989,
    "type": "paper"
  },
  {
    "authors": "Gupta, Y. K.; Bhandari, P.; Chugh, A.; Seth, S. D.; Dixit, K. S.; Bhargava, K. P.",
    "title": "Role of endogenous opioids and histamine in morphine induced emesis",
    "venue": "Indian Journal of Experimental Biology (1989), 27(1), 52-4",
    "year": 1989,
    "type": "paper"
  },
  {
    "authors": "Gupta, Y. K.; Chugh, Anita; Seth, S. D.",
    "title": "Opposing effect of apomorphine on antinociceptive activity of morphine: a dose-dependent phenomenon",
    "venue": "Pain (1989), 36(2), 263-9",
    "year": 1989,
    "type": "paper"
  },
  {
    "authors": "Chugh, A.; Gupta, Y. K.; Bhandari, P.; Seth, S. D.",
    "title": "Characterization of dopamine receptor subtypes in chemoreceptor trigger zone involved in emesis in dogs",
    "venue": "Asia Pacific Journal of Pharmacology (1988), 3(3), 135-9",
    "year": 1988,
    "type": "paper"
  },
  {
    "authors": "Bhandari, P.; Gupta, Y. K.; Seth, S. D.; Chugh, A.",
    "title": "Emetic profile of cisplatin in dogs",
    "venue": "Asia Pacific Journal of Pharmacology (1988), 3(3), 131-3",
    "year": 1988,
    "type": "paper"
  },
  {
    "authors": "Mookhtiar, Kasim A.; Bhuniya, Debnath; Dave, Bhavesh; Kapkoti, Gobind S.; Basu, Sujay; Chugh, Anita; et al.",
    "title": "2,2,2-tri-substituted acetamide derivatives as glucokinase activators, their process and pharmaceutical application",
    "venue": "Patent Number: 8940900. Filed: Feb 25, 2008. Date: Jan 27, 2015. Assignee: Advinus Therapeutics Private Limited",
    "year": 2015,
    "type": "granted"
  },
  {
    "authors": "Salman, Mohammad; Sattigeri, Jitendra; Kumar, Yatendra; Aryan, Ram Chander; Ramanathan, Vikram Krishna; Chugh, Anita",
    "title": "Substituted pyrrole derivatives and their use as HMG-CO inhibitors",
    "venue": "Patent Number: 7923467. Filed: May 28, 2004. Date: April 12, 2011. Assignee: Ranbaxy Laboratories",
    "year": 2011,
    "type": "granted"
  },
  {
    "authors": "Salman, Mohammad; Mehta, Anita; Sarma, Pakala K. S.; Kumar, Naresh; Dharmarajan, Sankaranarayanan; Kaur, Kirandeep; Chugh, Anita",
    "title": "Azabicyclo derivatives as muscarinic receptor antagonists",
    "venue": "Patent Number: 7446123. Filed: Jan 7, 2004. Date: Nov 4, 2008. Assignee: Ranbaxy Laboratories",
    "year": 2008,
    "type": "granted"
  },
  {
    "authors": "Sarma, P. K. S.; Kondaskar, A.; Shelke, S. Y.; Gupta, P.; Pal, A.; Ashani, K.; Sharma, S.; Chugh, A.; Tiwari, A.; Dharmarajan, S.",
    "title": "Preparation of heterocyclic compounds as adrenergic receptor antagonists",
    "venue": "IN 2005DE03142 A 20100305",
    "year": 2010,
    "type": "patent"
  },
  {
    "authors": "Salman, M.; Kumar, N.; Kaur, K.; Aeron, S.; Sarma, P. K. S.; Dharmarajan, S.; Mehta, A.; Chugh, A.",
    "title": "Preparation of 3,6-disubstituted azabicyclo[3.1.0]hexane derivatives useful as therapeutic muscarinic receptor antagonists",
    "venue": "IN 2005DN01810 A 20091009",
    "year": 2009,
    "type": "patent"
  },
  {
    "authors": "Anand, N.; Jain, S.; Sinha, N.; Chugh, A.; Hegde, L. G.; Gupta, J. B.",
    "title": "A process for the synthesis of 1,4-disubstituted piperazine derivatives",
    "venue": "IN 2005DE02911 A 20090731",
    "year": 2009,
    "type": "patent"
  },
  {
    "authors": "Mookhtiar, Kasim A.; Bhuniya, Debnath; Dave, Bhavesh; Kapkoti, Gobind S.; Basu, Sujay; Chugh, Anita; De, Siddartha; Palle, Venkata P.",
    "title": "Preparation of phenoxythiazolylalkylacetamide derivatives and analogs as glucokinase activators",
    "venue": "WO 2008104994 A2 20080904",
    "year": 2008,
    "type": "patent"
  },
  {
    "authors": "Kumar, Naresh; Cliffe, Ian Anthony; Salman, Mohammad; Palle, Venkata P.; Kaur, Kirandeep; Shejul, Yogesh D.; Chugh, Anita; Gupta, Suman; Ray, Abhijit; Malhotra, Shivani; et al.",
    "title": "Preparation of azabicyclo[2.2.1]heptyl compounds as muscarinic receptor antagonists for treating respiratory, urinary, and gastrointestinal disorders",
    "venue": "WO 2007110782 A1 20071004",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Sarma, Pakala Kumara Savithru; Dharmarajan, Sankaranarayanan; Pal, Arani; Kondaskar, Atul; Ashani, K.; Shelka, Sandeep Y.; Gupta, Praful; Sharma, Somesh; Chugh, Anita; Tiwari, Atul; et al.",
    "title": "Quinazoline derivatives as adrenergic receptor antagonists and their preparation, pharmaceutical compositions and use in the treatment of diseases",
    "venue": "IN 2005DE01706 A 20070831",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Sarma, Pakala Kumara Savithru; Ashani, K.; Gupta, Praful; Pal, Arani; Sharma, Somesh; Chugh, Anita; Tiwari, Atul; Nanda, Kamna",
    "title": "Thiazolidinedione derivatives as adrenergic receptor antagonists and their preparation, pharmaceutical compositions and use in the treatment of diseases",
    "venue": "IN 2005DE01704 A 20070831",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Sarma, Pakala Kumara Savithru; Sharma, Somesh; Dharmarajan, Sankaranarayanan; Ashani, K.; Chugh, Anita; Tiwari, Atul",
    "title": "Piperazine derivatives as adrenergic receptor antagonists and their preparation, pharmaceutical compositions and use in the treatment of diseases",
    "venue": "IN 2006DE00146 A 20070824",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Kumar, Naresh; Kaur, Jaskiran; Palle, Venkata P.; Bhatt, Beenu; Jindal, Shelly; Chugh, Anita; Gupta, Suman; Ray, Abhijit; Malhotra, Shivani; Shirumalla, Raj Kumar",
    "title": "Preparation of imidazole derivatives as muscarinic receptor antagonists",
    "venue": "WO 2007077510 A2 20070712",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Kumar, Naresh; Kaur, Kirandeep; Gupta, Suman; Chugh, Anita; Salman, Mohammad; Shirumalla, Raj Kumar; Malhotra, Shivani",
    "title": "Preparation of 3-azabicyclo[3.2.1] octanes as muscarinic M3 receptor antagonists",
    "venue": "WO 2007039884 A1 20070412",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Anand, Nitya; Jain, Sanjay; Sinha, Neelima; Chugh, Anita; Hegde, Laxminarayan G.; Gupta, Jang Bahadur",
    "title": "1,4-Disubstituted piperazine derivatives useful as uro-selective α1-adrenoreceptor blockers",
    "venue": "IN 2002DE00449 A 20050311",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Sattigeri, Jitendra A.; Andappan, Murugaiah M S.; Kishore, Kaushal; Sethi, Sachin; Kandalkar, Sachin Ramesh; Pal, Chanchal Kumar; Mahajan, Dipak C.; Ahmed, Shahadat; Parkale, Santhosh Sadashiv; Srinivasan, T.; et al.",
    "title": "Derivatives of 3-azabicyclo[3.1.0]hexane as dipeptidyl peptidase-IV inhibitors and their preparation, pharmaceutical compositions and use in the treatment of diseases",
    "venue": "WO 2007029086 A2 20070315",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Sarma, Pakala Kumara Savithru; Kuttan, Ashani; Pal, Arani; Kondaskar, Atul; Gupta, Praful; Dharmarajan, Sankaranarayanan; Shelke, Sandeep Y.; Sharma, Somesh; Chugh, Anita; Tiwari, Atul",
    "title": "Isoindoledione derivatives, processes for preparing them, pharmaceutical compositions containing them, and their uses as adrenergic receptor antagonists",
    "venue": "WO 2007029156 A2 20070315",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Sarma, Pakala Kumara Savithru; Shelke, Sandeep Y.; Ashani, K.; Gupta, Praful; Pal, Arani; Kondaskar, Atul; Dharmarajan, Sankaranarayanan; Sharma, Somesh; Chugh, Anita; Tiwari, Atul",
    "title": "Preparation of succinimide and glutarimide piperidine and piperazine derivatives as α1a and/or α1d adrenergic receptor antagonists for treatment of benign prostatic hypertrophy",
    "venue": "WO 2007029078 A2 20070315",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Kumar, Naresh; Kaur, Kirandeep; Sinha, Sandeep; Gupta, Suman; Palle, Venkata P.; Chugh, Anita",
    "title": "Preparation of azabicyclic compounds as muscarinic receptor antagonists",
    "venue": "WO 2007007282 A2 20070118",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Kumar, Naresh; Salman, Mohammad; Kaur, Kirandeep; Chugh, Anita; Sinha, Sandeep",
    "title": "Preparation of isoquinoline derivatives as muscarinic receptor antagonists",
    "venue": "WO 2007007281 A2 20070118",
    "year": 2007,
    "type": "patent"
  },
  {
    "authors": "Sarma, Pakala Kumara Savithru; Sharma, Somesh; Dharmarajan, Sankaranarayanan; Shelke, Sandeep Y.; Pal, Arani; Kondaskar, Atul; Gupta, Praful; Chugh, Anita; Tiwari, Atul; Nanda, Kamna",
    "title": "Preparation of benzotriazinones and phenoxazines as α1 adrenergic receptor antagonists for the treatment of benign prostatic hyperplasia",
    "venue": "WO 2006117760 A1 20061109",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Kumar, Naresh; Kaur, Kirandeep; Aeron, Shelly; Sarma, Pakala Kumara Savithru; Dharmarajan, Sankaranarayanan; Mehta, Anita; Chugh, Anita",
    "title": "Preparation of 3,6-disubstituted azabicyclo[3.1.0]hexane derivatives as muscarinic receptor antagonists for use against respiratory, urinary and gastrointestinal diseases",
    "venue": "WO 2006117754 A1 20061109",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Anand, Nitya; Salman, Mohammad; Yadav, Gyan Chand; Sharma, Somesh; Jain, Sanjay; Sinha, Neelima; Kapkoti, Gobind Singh; Chugh, Anita; Varshney, Brijesh; Paliwal, Jyoti Kumar; et al.",
    "title": "Metabolites of 2-{3-[4-(2-isopropoxyphenyl) piperazin-1-yl]-propyl}-3a,4,7,7a-tetrahydro-1H-isoindole-1,3(2H)-dione",
    "venue": "WO 2006092710 A1 20060908",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Kumar, Naresh; Salman, Mohammad; Kaur, Kirandeep; Mehta, Anita; Arora, Sudershan K.; Chugh, Anita",
    "title": "Azabicyclic compounds as muscarinic receptor antagonists and their preparation, pharmaceutical compositions and use for treatment of disease of the respiratory, urinary and gastrointestinal systems",
    "venue": "WO 2006054162 A1 20060526",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Anand, Nitya; Yadav, Gyan Chand; Sharma, Somesh; Kapkoti, Gobind Singh; Chugh, Anita; Nanda, Kamna",
    "title": "Isoindole derivatives as adrenergic receptor antagonists and their preparation, pharmaceutical compositions, and use for treatment of benign prostatic hyperplasia",
    "venue": "WO 2006051374 A2 20060518",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Anand, Nitya; Sharma, Somesh; Kapkoti, Gobind Singh; Chugh, Anita; Nanda, Kamna",
    "title": "Alkynylpiperazine derivatives as α1-adrenergic receptor antagonists, their preparation, pharmaceutical compositions, and use in therapy",
    "venue": "WO 2006051399 A1 20060518",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Mehta, Anita; Salman, Mohammad; Sarma, Pakala Kumara Savithru; Aeron, Shelley; Chugh, Anita; Gupta, Suman",
    "title": "3-Azabicyclo[3.1.0]hexane derivatives as muscarinic receptor antagonists and their preparation, pharmaceutical compositions, and use for treatment of prophylaxis of respiratory, urinary, or gastrointestinal diseases",
    "venue": "WO 2006035282 A2 20060406",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Sarma, Pakala Kumara Savithru; Pal, Arani; Chugh, Anita; Gupta, Suman",
    "title": "Azabicyclic compounds as muscarinic receptor antagonists and their preparation, pharmaceutical compositions, and use for treatment of prophylaxis of respiratory, urinary, or gastrointestinal diseases",
    "venue": "WO 2006035303 A1 20060406",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Mehta, Anita; Kumar, Naresh; Kaur, Kirandeep; Silamkoti, Arundutt Viswanatham; Miriyala, Bruhaspathy; Aeron, Shelley; Chugh, Anita",
    "title": "Preparation of 3,4-dihydroisoquinoline derivatives as muscarinic receptor antagonists for the treatment of respiratory, urinary and gastrointestinal diseases",
    "venue": "WO 2006035280 A1 20060406",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Sarma, Pakala Kumara Savithru; Dharmarajan, Sankaranarayanan; Chugh, Anita; Gupta, Suman",
    "title": "Preparation of phenyl-substituted amine diols and related compounds as muscarinic receptor antagonists for treating diseases such as those of the respiratory, urinary and gastrointestinal systems",
    "venue": "WO 2006032994 A2 20060330",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Anand, Nitya; Sharma, Somesh; Kapkoti, Gobind Singh; Chugh, Anita; Nanda, Kamna",
    "title": "Preparation of piperazine derivatives as adrenergic receptor antagonists",
    "venue": "WO 2006018815 A1 20060223",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Sarma, Pakala Kumara Savithru; Shelke, Sandeep Y.; Chugh, Anita; Gupta, Suman",
    "title": "Preparation of pyrrolidine derivatives as muscarinic receptor antagonists",
    "venue": "WO 2006018708 A2 20060223",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Sarma, Pakala Kumara Savithru; Kondaskar, Atul; Chugh, Anita; Gupta, Suman",
    "title": "Preparation of tetrahydronaphthyl azabicyclo[3.1.0] hexanes as muscarinic receptor antagonists",
    "venue": "WO 2006016245 A1 20060216",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Anand, Nitya; Salman, Mohammad; Sharma, Somesh; Kapkoti, Gobind Singh; Chugh, Anita; Nanda, Kamna; Sarma, Pakala Kumara Savithru",
    "title": "Preparation of thiazolidinediones as adrenergic receptor antagonists",
    "venue": "WO 2006013445 A2 20060209",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Mehta, Anita; Salman, Mohammad; Sarma, Pakala, Kumara, Savithru; Chugh, Anita; Gupta, Suman",
    "title": "Preparation of 9H-xanthene-9-carboxylic esters and related compounds as muscarinic receptor antagonists",
    "venue": "WO 2006005980 A1 20060119",
    "year": 2006,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Sharma, Somesh; Yadav, Gyan Chand; Kapkoti, Gobind Singh; Mishra, Anurag; Gupta, Praful; Anand, Nitya; Chugh, Anita; Nanda, Kamna",
    "title": "Preparation of piperazine derivatives, particularly piperazinyl-pyrrolidine-2,5-dione, piperazinyl-tetrahydroisoindole-1,3-dione, and piperazinyl-piperidine-2,6-dione derivatives, as adrenergic receptor antagonists for treating benign prostatic hyperplasia",
    "venue": "WO 2005118537 A2 20051215",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Anand, Nitya; Salman, Mohammad; Yadav, Gyan Chand; Sharma, Somesh; Kapkoti, Gobind Singh; Chugh, Anita; Nanda, Kamna",
    "title": "Preparation of condensed piperidine compounds acting as adrenergic receptor antagonists useful in the treatment of prostatic hyperplasia and lower urinary symptoms",
    "venue": "WO 2005118591 A1 20051215",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Sharma, Somesh; Kapkoti, Gobind Singh; Anand, Nitya; Chugh, Anita",
    "title": "Preparation of piperazinyl cyclohexyl heterocycles as adrenergic receptor antagonists",
    "venue": "WO 2005113498 A1 20051201",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Chugh, Anita; Tiwari, Atul",
    "title": "Combination therapy using adrenergic receptor antagonist in combination with muscarinic receptor antagonists and testosterone 5-reductase inhibitors for lower urinary tract symptoms",
    "venue": "WO 2005092341 A1 20051006",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Anand, Nitya; Salman, Mohammad; Sharma, Somesh; Kapkoti, Gobind Singh; Gupta, Praful; Mishra, Anurag; Chugh, Anita; Tiwari, Atul",
    "title": "Preparation of 1-alkylpiperazinyl-pyrrolidin-2,5-dione derivatives as adrenergic receptor antagonists for treating benign prostatic hyperplasia",
    "venue": "WO 2005037282 A1 20050428",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Anand, Nitya; Salman, Mohammad; Sharma, Somesh; Yadav, Gyan Chand; Chugh, Anita",
    "title": "1-(Alkylpiperazinyl) pyrrolidine-2,5-dione derivatives, particularly 3,4-substituted -[3-[4-(2-alkoxyphenyl) piperazin-1-yl]propyl]pyrrolidine-2,5-diones, as adrenergic receptor antagonists, and their preparation, pharmaceutical compositions, and use in the treatment of benign prostatic hyperplasia and urinary symptoms",
    "venue": "WO 2005037281 A1 20050428",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Yadav, Gyan Chand; Sharma, Somesh; Kapkoti, Gobind Singh; Mehta, Anita; Jain, Sanjay; Sinha, Neelima; Chugh, Anita; Paliwal, Jyoti Kumar; Anand, Nitya",
    "title": "Preparation of metabolites and prodrugs of 1-[3-[4-(2-methoxyphenyl)piperazin-1-yl]propyl] piperidine-2,6-dione for use in the treatment of benign prostatic hyperplasia",
    "venue": "WO 2005018643 A1 20050303",
    "year": 2005,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Sattigeri, Jitendra; Kumar, Yatendra; Aryan, Ram Chander; Ramanathan, Vikram Krishna; Chugh, Anita",
    "title": "Preparation of substituted pyrrole derivatives as 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA) reductase inhibitors",
    "venue": "WO 2004106299 A2 20041209",
    "year": 2004,
    "type": "patent"
  },
  {
    "authors": "Kumar, Yatendra; Aryan, Ram Chander; Gowrish",
    "title": "Preparation of (R)-(-)-5-[2-[[2-(2-ethoxyphenoxy)-ethyl]amino]propyl]-2-hydroxybenzenesulfonamide as an α1 adrenergic antagonist",
    "type": "patent",
    "incomplete": true
  },
  {
    "authors": "Salman, Mohammad; Yadav, Gyan Chand; Sharma, Somesh; Kapkoti, Gobind Singh; Chugh, Anita; Gupta, Jang Bahadur; Anand, Nitya",
    "title": "Preparation of α,ω-dicarboximides as α1-adrenoceptor receptor antagonists for treatment of benign prostatic hyperplasia",
    "venue": "WO 2003084928 A1 20031016",
    "year": 2003,
    "type": "patent"
  },
  {
    "authors": "Salman, Mohammad; Yadav, Gyan Chand; Sharma, Somesh; Kapkoti, Gobind Singh; Chugh, Anita; Gupta, Jang Bahadur; Anand, Nitya",
    "title": "Preparation of N-(piperazinylpropyl)carboxamides as α1-adrenoceptor receptor antagonists for treatment of benign prostatic hyperplasia",
    "venue": "WO 2003084541 A1 20031016",
    "year": 2003,
    "type": "patent"
  },
  {
    "authors": "Anand, Nitya; Jain, Sanjay; Sinha, Neelima; Chugh, Anita; Hegde, Laxminarayan G.; Gupta, Jang Bahadur",
    "title": "Preparation of 2-[(4-arylpiperazino) alkyl]isindolediones as α1-adrenoceptor antagonists",
    "venue": "WO 2002044151 A1 20020606",
    "year": 2002,
    "type": "patent"
  },
  {
    "authors": "Gupta, Y.K., & Chugh, A.",
    "title": "Digitalis and newer positive inotropic agents",
    "venue": "In S.D. Seth, S.K. Manchanda, & S. Seth (Eds.), Recent advances in cardiovascular therapy of cardiovascular diseases. Jaypee Brothers Medical Publishers",
    "year": 2003,
    "type": "chapter"
  },
  {
    "authors": "Ray, A.; Hegde, L. G.; Chugh, A.; Gupta, J. B.",
    "title": "Endothelin receptors: Targets for drug development",
    "venue": "In: Gupta, S.K. Pharmacology and Therapeutics in the New Millennium, New Delhi, India, Dec 1999 (2001), 18-24",
    "year": 2001,
    "type": "chapter"
  }
];
