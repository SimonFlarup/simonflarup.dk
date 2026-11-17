import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

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
    expect(element.querySelectorAll('app-experience-list ol > li')).toHaveLength(component.workExperience.length);
    expect(element.querySelectorAll('app-experience-list article')).toHaveLength(2);
    expect(element.querySelector('app-experience-list a[list-action]')?.getAttribute('href')).toBe('/cv');
  });
});
