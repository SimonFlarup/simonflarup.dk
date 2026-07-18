import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CvEntryHeader } from '../cv-entry-header/cv-entry-header';
import { ExperienceEntry } from '../cv.models';

@Component({
  selector: 'app-cv-experience-section',
  imports: [TranslatePipe, CvEntryHeader],
  templateUrl: './cv-experience-section.html',
})
export class CvExperienceSection {
  readonly titleKey = input.required<string>();
  readonly entries = input.required<ExperienceEntry[]>();
  readonly showProjects = input(false);
  readonly showResponsibilities = input(false);
}

