import { Component, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  ionBalloonSharp,
  ionCallSharp,
  ionDocumentText,
  ionHomeSharp,
  ionLogoGithub,
  ionLogoLinkedin,
  ionMail,
  ionPersonSharp,
} from '@ng-icons/ionicons';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, NgIcon, NgOptimizedImage],
  providers: [
    provideIcons({
      ionLogoLinkedin,
      ionLogoGithub,
      ionDocumentText,
    }),
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  encapsulation: ViewEncapsulation.None,
})
export class Home {}
