import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CvPersonalItem } from './cv-personal-item/cv-personal-item';

@Component({
  selector: 'app-cv-profile',
  imports: [TranslatePipe, NgOptimizedImage, CvPersonalItem],
  templateUrl: './cv-profile.html',
})
export class CvProfile {
  readonly age = input.required<number>();
}

