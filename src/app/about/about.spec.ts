import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';
import { provideTranslateService } from '@ngx-translate/core';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
