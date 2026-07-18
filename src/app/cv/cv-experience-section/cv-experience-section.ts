import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CvEntryHeader } from '../cv-entry-header/cv-entry-header';
import { CvHeading } from '../cv-heading/cv-heading';
import { ExperienceEntry } from '../cv.models';

@Component({
  selector: 'app-cv-experience-section',
  imports: [TranslatePipe, CvEntryHeader, CvHeading],
  templateUrl: './cv-experience-section.html',
})
export class CvExperienceSection {
  readonly icon = input.required<string>();
  readonly titleKey = input.required<string>();
  readonly entries = input.required<ExperienceEntry[]>();
  readonly showProjects = input(false);
  readonly showResponsibilities = input(false);
}

