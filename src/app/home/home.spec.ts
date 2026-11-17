import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { education } from '../cv/cv.data';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([]), provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the shared work history with portfolio cards and a CV link', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('app-experience-list[titleKey="CV.WORK.TITLE"] ol > li')).toHaveLength(component.workExperience.length);
    expect(element.querySelectorAll('app-experience-list article')).toHaveLength(2);
    expect(element.querySelector('app-experience-list a[list-action]')?.getAttribute('href')).toBe('/cv');
  });

  it('should display the shared education history with logos and project bullets', () => {
    const element = fixture.nativeElement as HTMLElement;
    const list = element.querySelector('app-experience-list[titleKey="CV.EDUCATION.TITLE"]');
    expect(list?.querySelectorAll('ol > li')).toHaveLength(education.length);
    expect(list?.querySelectorAll('img')).toHaveLength(education.length);
    expect(list?.querySelectorAll('ul li')).toHaveLength(3);
    expect(list?.textContent).toContain('CV.EDUCATION.MSC_TITLE');
    expect(list?.textContent).toContain('CV.EDUCATION.HF_DESCRIPTION');
    expect(list?.textContent).toContain('CV.EDUCATION.EUX_DESCRIPTION');
    expect(component.education.map(({ logo, ...entry }) => entry)).toEqual(education);
  });
});
