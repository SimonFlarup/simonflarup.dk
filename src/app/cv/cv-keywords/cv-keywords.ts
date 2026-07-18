import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-keywords',
  imports: [TranslatePipe],
  templateUrl: './cv-keywords.html',
})
export class CvKeywords {
  readonly keywords = input.required<string>();
}

