import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionBriefcaseOutline } from '@ng-icons/ionicons';
import { TranslatePipe } from '@ngx-translate/core';
import { ExperienceEntry } from '../../cv/cv.models';

export interface ExperienceListEntry extends Omit<ExperienceEntry, 'company' | 'startKey' | 'endKey'> {
  company?: string;
  companyKey?: string;
  startKey?: string;
  endKey?: string;
  logo?: string;
  portfolio?: {
    title: string;
    image: string;
    descriptionKey: string;
    href: string;
  }[];
}

@Component({
  selector: 'app-experience-list',
  imports: [NgIcon, TranslatePipe],
  providers: [provideIcons({ ionBriefcaseOutline })],
  templateUrl: './experience-list.html',
})
export class ExperienceList {
  readonly titleKey = input.required<string>();
  readonly icon = input('ionBriefcaseOutline');
  readonly showLogos = input(true);
  readonly entries = input.required<readonly ExperienceListEntry[]>();
}
