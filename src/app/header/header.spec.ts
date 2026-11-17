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

  it('should preserve navigation and preference controls', async () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(Array.from(element.querySelectorAll('.header-nav a'), link => link.getAttribute('href')))
      .toEqual(['/', '/about']);
    const buttons = element.querySelectorAll<HTMLButtonElement>('.header-theme-toggle, .header-language-toggle');
    expect(buttons).toHaveLength(2);

    const wasDarkMode = component.darkMode();
    buttons[0].click();
    await fixture.whenStable();
    expect(component.darkMode()).toBe(!wasDarkMode);

    const previousLanguage = component.language();
    buttons[1].click();
    await fixture.whenStable();
    expect(component.language()).toBe(previousLanguage === 'en' ? 'da' : 'en');
  });

  it('should connect the mobile Menu button to a dismissible navigation popover', () => {
    const element = fixture.nativeElement as HTMLElement;
    const trigger = element.querySelector('[popovertarget]');
    const menu = element.querySelector('#header-menu');
    expect(trigger?.getAttribute('popovertarget')).toBe(menu?.id);
    expect(menu?.hasAttribute('popover')).toBe(true);
    expect(Array.from(menu?.querySelectorAll('a') ?? [], link => link.getAttribute('href')))
      .toEqual(['/', '/about']);
    expect(element.querySelector('.header-theme-toggle')?.hasAttribute('aria-label')).toBe(true);
    expect(element.querySelector('.header-language-toggle')?.hasAttribute('aria-label')).toBe(true);
  });
});
