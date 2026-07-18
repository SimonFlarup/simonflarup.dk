import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageEntry } from '../cv.models';

@Component({
  selector: 'app-cv-side-sections',
  imports: [TranslatePipe],
  templateUrl: './cv-side-sections.html',
})
export class CvSideSections {
  readonly languages = input.required<LanguageEntry[]>();
}

