import { ExperienceEntry } from './cv.models';

export const workExperience: ExperienceEntry[] = [
  {
    company: 'Universal Robots A/S',
    titleKey: 'CV.WORK.SOFTWARE_ENGINEER',
    startKey: 'CV.DATE.APRIL_2023',
    endKey: 'CV.DATE.PRESENT',
    descriptionKey: 'CV.WORK.UR_FULL.DESCRIPTION',
    descriptionSecondaryKey: 'CV.WORK.UR_FULL.DESCRIPTION_EXTENDED',
    responsibilitiesKeys: [
      'CV.WORK.UR_FULL.LI_1',
      'CV.WORK.UR_FULL.LI_2',
      'CV.WORK.UR_FULL.LI_3',
      'CV.WORK.UR_FULL.LI_4',
      'CV.WORK.UR_FULL.LI_5',
      'CV.WORK.UR_FULL.LI_6',
    ],
  },
  {
    company: 'Universal Robots A/S',
    titleKey: 'CV.WORK.SOFTWARE_DEVELOPER',
    startKey: 'CV.DATE.JANUARY_2021',
    endKey: 'CV.DATE.APRIL_2023',
    descriptionKey: 'CV.WORK.UR_PART_1.DESCRIPTION',
    descriptionSecondaryKey: 'CV.WORK.UR_PART_1.DESCRIPTION_EXTENDED',
  },
  {
    company: 'BROEN Valve Technologies',
    titleKey: 'CV.WORK.STUDENT_WORKER',
    startKey: 'CV.DATE.AUGUST_2019',
    endKey: 'CV.DATE.JANUARY_2021',
    descriptionKey: 'CV.WORK.BROEN.DESCRIPTION',
    descriptionSecondaryKey: 'CV.WORK.BROEN.DESCRIPTION_EXTENDED',
  },
  {
    company: 'Aarhus Tech',
    titleKey: 'CV.WORK.APPRENTICE',
    startKey: 'CV.DATE.AUGUST_2016',
    endKey: 'CV.DATE.AUGUST_2017',
    descriptionKey: 'CV.WORK.APPRENTICE_ROLE.DESCRIPTION',
  },
];
