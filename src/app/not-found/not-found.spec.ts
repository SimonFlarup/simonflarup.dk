import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { routes } from '../app.routes';
import { NotFound } from './not-found';

describe('NotFound', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes), provideTranslateService({ lang: 'en' })],
    });
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', {
      NOT_FOUND: { TITLE: 'Page not found', HEADING: "I'm sorry, but we've lost our way", DESCRIPTION: 'This page does not exist.', HOME_ACTION: 'Back to Home' },
    });
    translate.setTranslation('da', {
      NOT_FOUND: { TITLE: 'Siden blev ikke fundet', HEADING: 'Det beklager jeg, men vi er faret vild', DESCRIPTION: 'Siden findes ikke.', HOME_ACTION: 'Tilbage til forsiden' },
    });
  });

  it('renders unknown nested URLs with a link back home', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/missing/nested/page', NotFound);
    expect(TestBed.inject(Router).url).toBe('/missing/nested/page');
    expect(harness.routeNativeElement?.textContent).toContain('404');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe("I'm sorry, but we've lost our way");
    const home = harness.routeNativeElement?.querySelector('a');
    expect(home?.getAttribute('href')).toBe('/');
    expect(home?.textContent).toBe('Back to Home');
  });

  it('updates the page content when the language changes', async () => {
    const harness = await RouterTestingHarness.create('/missing');
    await firstValueFrom(TestBed.inject(TranslateService).use('da'));
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Det beklager jeg, men vi er faret vild');
    expect(harness.routeNativeElement?.textContent).toContain('Siden findes ikke.');
    expect(harness.routeNativeElement?.querySelector('a')?.textContent).toBe('Tilbage til forsiden');
  });
});
