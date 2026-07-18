import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CvHeading } from '../cv-heading/cv-heading';

@Component({
  selector: 'app-cv-summary',
  imports: [TranslatePipe, CvHeading],
  templateUrl: './cv-summary.html',
})
export class CvSummary {}

