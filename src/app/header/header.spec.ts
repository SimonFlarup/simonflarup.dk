import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let savedDarkMode: string | null;
  let savedLanguage: string | null;
  let wasDark: boolean;

  beforeEach(async () => {
    savedDarkMode = localStorage.getItem('darkMode');
    savedLanguage = localStorage.getItem('language');
    wasDark = document.documentElement.classList.contains('dark');
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([]), provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    const savedPreferences: [string, string | null][] = [
      ['darkMode', savedDarkMode],
      ['language', savedLanguage],
    ];
    for (const [key, value] of savedPreferences) {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    }
    document.documentElement.classList.toggle('dark', wasDark);
    vi.unstubAllGlobals();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
