import { Component, input } from '@angular/core';
import { CvHeading } from '../cv-heading/cv-heading';

@Component({
  selector: 'app-cv-keywords',
  imports: [CvHeading],
  templateUrl: './cv-keywords.html',
})
export class CvKeywords {
  readonly keywords = input.required<string>();
}

