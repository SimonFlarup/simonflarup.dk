import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  ionBalloonSharp,
  ionCallSharp,
  ionDocumentText,
  ionHomeSharp,
  ionMail,
  ionPersonSharp,
} from '@ng-icons/ionicons';
import { TranslatePipe } from '@ngx-translate/core';

interface ExperienceEntry {
  company: string;
  titleKey: string;
  startKey: string;
  endKey: string;
  descriptionKey?: string;
  descriptionSecondaryKey?: string;
  responsibilitiesKeys?: string[];
  projectKeys?: string[];
}

@Component({
  selector: 'app-cv',
  imports: [TranslatePipe, NgOptimizedImage, NgIcon],
  providers: [
    provideIcons({
      ionPersonSharp,
      ionBalloonSharp,
      ionHomeSharp,
      ionMail,
      ionCallSharp,
      ionDocumentText,
    }),
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
  readonly age = this.calculateAge();

  readonly workExperience: ExperienceEntry[] = [
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

  readonly education: ExperienceEntry[] = [
    {
      company: 'University of Southern Denmark',
      titleKey: 'CV.EDUCATION.MSC_TITLE',
      startKey: 'CV.DATE.SEPTEMBER_2021',
      endKey: 'CV.DATE.JULY_2023',
      projectKeys: ['CV.EDUCATION.MSC_PROJECT_1', 'CV.EDUCATION.MSC_PROJECT_2'],
    },
    {
      company: 'University of Southern Denmark',
      titleKey: 'CV.EDUCATION.BSC_TITLE',
      startKey: 'CV.DATE.SEPTEMBER_2018',
      endKey: 'CV.DATE.JULY_2021',
      projectKeys: ['CV.EDUCATION.BSC_PROJECT_1'],
    },
    {
      company: 'Randers HF & VUC',
      titleKey: 'CV.EDUCATION.HF_TITLE',
      startKey: 'CV.DATE.AUGUST_2017',
      endKey: 'CV.DATE.JULY_2018',
      descriptionKey: 'CV.EDUCATION.HF_DESCRIPTION',
    },
    {
      company: 'Aarhus Tech & Tradium Randers',
      titleKey: 'CV.EDUCATION.EUX_TITLE',
      startKey: 'CV.DATE.AUGUST_2015',
      endKey: 'CV.DATE.AUGUST_2017',
      descriptionKey: 'CV.EDUCATION.EUX_DESCRIPTION',
    },
  ];

  readonly languages = [
    { languageKey: 'CV.LANGUAGE.DANISH', levelKey: 'CV.LANGUAGE.MOTHER_TONGUE' },
    { languageKey: 'CV.LANGUAGE.ENGLISH', levelKey: 'CV.LANGUAGE.FLUENT' },
    { languageKey: 'CV.LANGUAGE.GERMAN', levelKey: 'CV.LANGUAGE.BASIC' },
  ];

  readonly volunteering: ExperienceEntry = {
    company: 'Redmew.com - Factorio community',
    titleKey: 'CV.VOLUNTEERING.REDMEW_TITLE',
    startKey: 'CV.DATE.MAY_2018',
    endKey: 'CV.DATE.PRESENT',
    descriptionKey: 'CV.VOLUNTEERING.REDMEW_DESCRIPTION',
  };

  readonly keywords =
    'Java - Python - TypeScript - C++ - C# - .NET - OSGi - SCRUM - LUA - PHP - JUnit - Spring Boot - JavaScript - Angular - NX - Cypress - Karma - Jest - Groovy - REST - JSON - Docker - IntelliJ IDEA - Atlassian - Jira - Bitbucket - Confluence - Jenkins';

  private calculateAge(): number {
    const today = new Date();
    let age = today.getFullYear() - 1998;
    if (today.getMonth() < 11) {
      age -= 1;
    }
    return age;
  }
}
