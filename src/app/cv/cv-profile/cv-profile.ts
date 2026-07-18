import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-profile',
  imports: [TranslatePipe, NgOptimizedImage, NgIcon],
  templateUrl: './cv-profile.html',
})
export class CvProfile {
  readonly age = input.required<number>();
}

