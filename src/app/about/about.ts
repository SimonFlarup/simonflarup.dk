import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
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

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, NgOptimizedImage, NgIcon],
  providers: [provideIcons({ ionPersonSharp, ionHomeSharp, ionBalloonSharp, ionLogoLinkedin, ionLogoGithub, ionDocumentText, ionMail, ionCallSharp })],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
