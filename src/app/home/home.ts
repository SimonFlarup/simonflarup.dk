import { Component, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  ionDocumentText,
  ionLogoGithub,
  ionLogoLinkedin,
  ionSchoolOutline,
  ionPricetagOutline,
} from '@ng-icons/ionicons';
import { ImageRow } from './image-row/image-row';
import { RouterLink } from '@angular/router';
import { education, volunteering, workExperience } from '../cv/cv.data';
import { ExperienceList, ExperienceListEntry } from './experience-list/experience-list';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, NgIcon, ImageRow, RouterLink, ExperienceList],
  providers: [
    provideIcons({
      ionLogoLinkedin,
      ionLogoGithub,
      ionDocumentText,
      ionSchoolOutline,
      ionPricetagOutline,
    }),
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  encapsulation: ViewEncapsulation.None,
})
export class Home {
  readonly other: ExperienceListEntry[] = [
    volunteering,
    {
      titleKey: 'CV.OTHER.DRIVERS_LICENSE_TITLE',
      companyKey: 'CV.OTHER.DRIVERS_LICENSE_VALUE',
    },
    {
      titleKey: 'CV.OTHER.GLENTEN_TITLE',
      company: 'Glenten Antennelaug',
      startKey: '2018',
      endKey: '2025',
    },
  ];

  readonly education: ExperienceListEntry[] = education.map(entry => ({
    ...entry,
    logo: this.companyLogo(entry.company),
  }));

  readonly workExperience: ExperienceListEntry[] = workExperience.map(entry => ({
    ...entry,
    logo: this.companyLogo(entry.company),
    portfolio: entry.titleKey === 'CV.WORK.SOFTWARE_ENGINEER' ? [
      {
        title: 'PolyScope 5',
        image: 'images/portfolio/polyscope_5.png',
        descriptionKey: 'HOME.EXPERIENCE.POLYSCOPE_5',
        href: 'https://www.universal-robots.com/products/polyscope-5/',
      },
      {
        title: 'PolyScope X',
        image: 'images/portfolio/polyscope_x.png',
        descriptionKey: 'HOME.EXPERIENCE.POLYSCOPE_X',
        href: 'https://www.universal-robots.com/products/polyscope-x/',
      },
    ] : undefined,
  }));

  private companyLogo(company: string): string | undefined {
    const logos: Record<string, string> = {
      'Universal Robots A/S': 'images/logos/ur.jpg',
      'BROEN Valve Technologies': 'images/logos/broen.jpg',
      'Aarhus Tech': 'images/logos/aarhustech.jpg',
      'University of Southern Denmark': 'images/logos/sdu.jpg',
      'Randers HF & VUC': 'images/logos/randershf.png',
      'Aarhus Tech & Tradium Randers': 'images/logos/aarhustech.jpg',
    };
    return logos[company];
  }
}
