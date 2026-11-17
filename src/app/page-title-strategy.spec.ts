import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, TitleStrategy } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { routes } from './app.routes';
import { PageTitleStrategy } from './page-title-strategy';

@Component({ template: '' })
class TestPage {}

describe('PageTitleStrategy', () => {
  let originalTitle: string;

  beforeEach(() => {
    originalTitle = document.title;
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'untitled', component: TestPage },
          ...routes.map(route => ({ ...route, component: TestPage })),
        ]),
        { provide: TitleStrategy, useClass: PageTitleStrategy },
        provideTranslateService({ lang: 'en' }),
      ],
    });
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', {
      HOME: { TITLE: 'Home' },
      ABOUT: { TITLE: 'About' },
      CV: { TITLE: 'CV' },
      PRIVACY_POLICY: { TITLE: 'Privacy Policy' },
      NOT_FOUND: { TITLE: 'Page not found' },
    });
    translate.setTranslation('da', {
      HOME: { TITLE: 'Forside' },
      ABOUT: { TITLE: 'Om' },
      CV: { TITLE: 'CV' },
      PRIVACY_POLICY: { TITLE: 'Privatlivspolitik' },
      NOT_FOUND: { TITLE: 'Siden blev ikke fundet' },
    });
  });

  afterEach(() => {
    document.title = originalTitle;
  });

  it('sets the page name and site name on each navigation', async () => {
    const harness = await RouterTestingHarness.create();
    for (const [url, pageName] of [['/', 'Home'], ['/about', 'About'], ['/cv', 'CV'], ['/privacy', 'Privacy Policy']]) {
      await harness.navigateByUrl(url);
      expect(document.title).toBe(`${pageName} | Simon Holland Flarup`);
    }
  });

  it('updates the current page title when the language changes', async () => {
    const harness = await RouterTestingHarness.create('/about');
    await firstValueFrom(TestBed.inject(TranslateService).use('da'));
    expect(document.title).toBe('Om | Simon Holland Flarup');

    await harness.navigateByUrl('/');
    expect(document.title).toBe('Forside | Simon Holland Flarup');
    await firstValueFrom(TestBed.inject(TranslateService).use('en'));
    expect(document.title).toBe('Home | Simon Holland Flarup');
  });

  it('uses the site name alone for a route without a title', async () => {
    const harness = await RouterTestingHarness.create('/about');
    await harness.navigateByUrl('/untitled');
    await firstValueFrom(TestBed.inject(TranslateService).use('da'));
    expect(document.title).toBe('Simon Holland Flarup');
  });

  it('sets and translates the title for an unknown route', async () => {
    await RouterTestingHarness.create('/missing/nested/page');
    expect(document.title).toBe('Page not found | Simon Holland Flarup');
    await firstValueFrom(TestBed.inject(TranslateService).use('da'));
    expect(document.title).toBe('Siden blev ikke fundet | Simon Holland Flarup');
  });
});
