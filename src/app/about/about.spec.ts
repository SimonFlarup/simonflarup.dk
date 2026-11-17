import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';
import { provideTranslateService } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [provideTranslateService(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link to social profiles, CV, email, and phone', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(Array.from(element.querySelectorAll('.about-details a'), link => link.getAttribute('href')))
      .toEqual([
        'https://github.com/simonflarup',
        'https://www.linkedin.com/in/SimonFlarup',
        '/cv',
        'mailto:mail@simonflarup.dk',
        'tel:+4520995563',
      ]);
  });

  it('should preserve the biography, portrait, and detail groups', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.about-headline')?.textContent).toContain('ABOUT.HEADLINE');
    expect(element.querySelectorAll('.about-biography p')).toHaveLength(6);
    expect(element.querySelector('.about-portrait')?.getAttribute('alt'))
      .toBe('Portrait of Simon with an Universal Robots robot');
    expect(element.querySelectorAll('.about-details ul')).toHaveLength(3);
    expect(element.querySelectorAll('.about-details li')).toHaveLength(8);
    expect(element.querySelectorAll('.about-details hr')).toHaveLength(2);
  });
});
