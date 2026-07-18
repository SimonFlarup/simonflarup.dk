import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CvHeading } from '../cv-heading/cv-heading';

@Component({
  selector: 'app-cv-keywords',
  imports: [TranslatePipe, CvHeading],
  templateUrl: './cv-keywords.html',
})
export class CvKeywords {
  readonly keywords = input.required<string>();
}

