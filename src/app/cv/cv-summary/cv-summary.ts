import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-summary',
  imports: [TranslatePipe],
  templateUrl: './cv-summary.html',
})
export class CvSummary {}

