import { Component, signal } from '@angular/core';
import {RouterLink} from "@angular/router";
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionChevronDown, ionGlobeOutline, ionMoonOutline, ionSunnyOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgOptimizedImage, TranslatePipe, NgIcon],
  providers: [provideIcons({ ionChevronDown, ionGlobeOutline, ionMoonOutline, ionSunnyOutline })],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  darkMode = signal(false);
  language = signal<'en' | 'da'>('en');

  constructor(private translate: TranslateService) {
    // On load, check localStorage and set dark mode
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      this.setDarkMode(true);
    } else if (saved === 'false') {
      this.setDarkMode(false);
    } else {
      // Default: match system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }

    // On load, check localStorage and set language
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'da' || savedLang === 'en') {
      this.setLanguage(savedLang);
    } else {
      this.setLanguage('en');
    }
  }

  toggleDarkMode() {
    this.setDarkMode(!this.darkMode());
  }

  setDarkMode(isDark: boolean) {
    this.darkMode.set(isDark);
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDark));
  }

  toggleLanguage() {
    const newLang = this.language() === 'en' ? 'da' : 'en';
    this.setLanguage(newLang);
  }

  setLanguage(lang: 'en' | 'da') {
    this.language.set(lang);
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
