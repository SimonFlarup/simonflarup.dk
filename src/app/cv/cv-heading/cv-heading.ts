import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-heading',
  imports: [NgIcon, TranslatePipe],
  templateUrl: './cv-heading.html',
})
export class CvHeading {
  readonly titleKey = input.required<string>();
  readonly icon = input<string>();
}

