import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-entry-header',
  imports: [TranslatePipe],
  templateUrl: './cv-entry-header.html',
})
export class CvEntryHeader {
  readonly titleKey = input.required<string>();
  readonly company = input.required<string>();
  readonly startKey = input.required<string>();
  readonly endKey = input.required<string>();
  readonly largeTopMargin = input(false);
}

