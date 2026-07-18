export interface ExperienceEntry {
  company: string;
  titleKey: string;
  startKey: string;
  endKey: string;
  descriptionKey?: string;
  descriptionSecondaryKey?: string;
  responsibilitiesKeys?: string[];
  projectKeys?: string[];
}

export interface LanguageEntry {
  languageKey: string;
  levelKey: string;
}

