import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-cv-personal-item',
  imports: [NgIcon],
  templateUrl: './cv-personal-item.html',
})
export class CvPersonalItem {
  readonly icon = input.required<string>();
}

