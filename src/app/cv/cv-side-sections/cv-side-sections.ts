import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CvHeading } from '../cv-heading/cv-heading';
import { LanguageEntry } from '../cv.models';

@Component({
  selector: 'app-cv-side-sections',
  imports: [TranslatePipe, CvHeading],
  templateUrl: './cv-side-sections.html',
})
export class CvSideSections {
  readonly languages = input.required<LanguageEntry[]>();
}

