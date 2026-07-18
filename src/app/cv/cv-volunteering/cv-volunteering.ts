import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CvEntryHeader } from '../cv-entry-header/cv-entry-header';
import { CvHeading } from '../cv-heading/cv-heading';
import { ExperienceEntry } from '../cv.models';

@Component({
  selector: 'app-cv-volunteering',
  imports: [TranslatePipe, CvEntryHeader, CvHeading],
  templateUrl: './cv-volunteering.html',
})
export class CvVolunteering {
  readonly entry = input.required<ExperienceEntry>();
}

