import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([]), provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should preserve navigation and technology links', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(Array.from(element.querySelectorAll('nav a'), link => link.getAttribute('href')))
      .toEqual(['/', '/about', '/privacy']);
    expect(Array.from(element.querySelectorAll('.footer-credits a'), link => link.getAttribute('href')))
      .toEqual([
        'https://angular.dev/',
        'https://tailwindcss.com/',
        'https://ionic.io/ionicons',
        'https://pages.github.com/',
      ]);
  });
});
