import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { routes } from '../app.routes';
import { PrivacyPolicy } from './privacy-policy';

describe('PrivacyPolicy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes), provideTranslateService({ lang: 'en' })],
    });
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', { PRIVACY_POLICY: { TITLE: 'Privacy Policy', PREFERENCES: 'Saved language and theme' } });
    translate.setTranslation('da', { PRIVACY_POLICY: { TITLE: 'Privatlivspolitik', PREFERENCES: 'Gemt sprog og tema' } });
  });

  it('renders at the existing footer destination with provider links', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/privacy', PrivacyPolicy);
    const element = harness.routeNativeElement;
    expect(element?.querySelector('h1')?.textContent).toBe('Privacy Policy');
    expect(element?.querySelectorAll('section')).toHaveLength(3);
    expect(element?.querySelectorAll('li')).toHaveLength(4);
    expect(element?.querySelector('a[href="https://developers.cloudflare.com/web-analytics/about/"]')).not.toBeNull();
    expect(element?.querySelector('a[href="https://www.cloudflare.com/privacypolicy/"]')).not.toBeNull();
    expect(element?.querySelector('a[href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"]')).not.toBeNull();
  });

  it('updates the policy when the language changes', async () => {
    const harness = await RouterTestingHarness.create('/privacy');
    await firstValueFrom(TestBed.inject(TranslateService).use('da'));
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Privatlivspolitik');
    expect(harness.routeNativeElement?.textContent).toContain('Gemt sprog og tema');
  });
});
