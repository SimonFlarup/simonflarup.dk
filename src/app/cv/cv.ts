import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  ionBalloonSharp,
  ionBody,
  ionBriefcase,
  ionCallSharp,
  ionCodeWorking,
  ionDocumentText,
  ionEllipsisHorizontal,
  ionHomeSharp,
  ionInformationCircle,
  ionLanguage,
  ionMail,
  ionPersonSharp,
  ionSchool,
} from '@ng-icons/ionicons';
import { CvExperienceSection } from './cv-experience-section/cv-experience-section';
import { CvKeywords } from './cv-keywords/cv-keywords';
import { ExperienceEntry, LanguageEntry } from './cv.models';
import { education, workExperience } from './cv.data';
import { CvProfile } from './cv-profile/cv-profile';
import { CvSideSections } from './cv-side-sections/cv-side-sections';
import { CvSummary } from './cv-summary/cv-summary';
import { CvVolunteering } from './cv-volunteering/cv-volunteering';

@Component({
  selector: 'app-cv',
  imports: [
    CvProfile,
    CvSummary,
    CvExperienceSection,
    CvSideSections,
    CvVolunteering,
    CvKeywords,
  ],
  providers: [
    provideIcons({
      ionPersonSharp,
      ionBalloonSharp,
      ionHomeSharp,
      ionMail,
      ionCallSharp,
      ionDocumentText,
      ionBriefcase,
      ionInformationCircle,
      ionLanguage,
      ionSchool,
      ionBody,
      ionCodeWorking,
      ionEllipsisHorizontal
    }),
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
  encapsulation: ViewEncapsulation.None,
})
export class Cv {
  /*
    * Calculate the age based on the date of birth (December 1, 1998)
    * the month index is starts at 0 for January and ends at 11 for December (Not a very human friendly design)
   */
  readonly age = this.calculateAge(new Date(1998, 11, 1));

  readonly workExperience = workExperience;

  readonly education = education;

  readonly languages: LanguageEntry[] = [
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

  private calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > dateOfBirth.getMonth() ||
      (today.getMonth() === dateOfBirth.getMonth() && today.getDate() >= dateOfBirth.getDate());

    if (!hasHadBirthdayThisYear) {
      age -= 1;
    }

    return age;
  }
}
