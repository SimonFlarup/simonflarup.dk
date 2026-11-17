import { TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { ExperienceList, ExperienceListEntry } from './experience-list';

describe('ExperienceList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExperienceList],
      providers: [provideTranslateService({ lang: 'en' })],
    });
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', { WORK: 'Work experience', ROLE: 'Engineer', START: '2023', END: 'Present', DESCRIPTION: 'Builds software', PROJECT: 'Thesis' });
    translate.setTranslation('da', { WORK: 'Erhvervserfaring', ROLE: 'Ingeniør', START: '2023', END: 'Nu', DESCRIPTION: 'Udvikler software', PROJECT: 'Speciale' });
  });

  async function render(entries: ExperienceListEntry[]) {
    const fixture = TestBed.createComponent(ExperienceList);
    fixture.componentRef.setInput('titleKey', 'WORK');
    fixture.componentRef.setInput('entries', entries);
    await fixture.whenStable();
    return fixture;
  }

  it('renders translated entries and follows language changes', async () => {
    const fixture = await render([{
      company: 'Company', titleKey: 'ROLE', startKey: 'START', endKey: 'END',
      descriptionKey: 'DESCRIPTION', logo: 'images/logos/ur.jpg',
    }]);
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h2')?.textContent).toContain('Work experience');
    expect(element.querySelector('h3')?.textContent).toBe('Engineer');
    expect(element.textContent).toContain('Builds software');
    expect(element.querySelector('img')?.getAttribute('src')).toBe('images/logos/ur.jpg');
    expect(element.textContent).not.toContain('CV.PROJECTS');

    TestBed.inject(TranslateService).use('da');
    await fixture.whenStable();
    expect(element.querySelector('h2')?.textContent).toContain('Erhvervserfaring');
    expect(element.querySelector('h3')?.textContent).toBe('Ingeniør');
  });

  it('supports education projects without a logo or portfolio', async () => {
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', { CV: { PROJECTS: 'Projects' } }, true);
    translate.setTranslation('da', { CV: { PROJECTS: 'Projekter' } }, true);
    const fixture = await render([{
      company: 'University', titleKey: 'ROLE', startKey: 'START', endKey: 'END',
      projectKeys: ['PROJECT'],
    }]);
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('University');
    expect(element.querySelector('ul li')?.textContent).toBe('Thesis');
    expect(element.querySelector('ul')?.previousElementSibling?.textContent).toBe('Projects:');
    expect(element.querySelector('img')).toBeNull();
    expect(element.querySelector('article')).toBeNull();
    expect(element.textContent).not.toContain('CV.RESPONSIBILITIES');

    translate.use('da');
    await fixture.whenStable();
    expect(element.querySelector('ul')?.previousElementSibling?.textContent).toBe('Projekter:');
    expect(element.querySelector('ul li')?.textContent).toBe('Speciale');
  });

  it('renders responsibility bullets and updates their translations', async () => {
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', { CV: { RESPONSIBILITIES: 'Responsibilities and achievements' } }, true);
    translate.setTranslation('da', { CV: { RESPONSIBILITIES: 'Ansvar og resultater' } }, true);
    const fixture = await render([{
      company: 'Company', titleKey: 'ROLE', startKey: 'START', endKey: 'END',
      responsibilitiesKeys: ['DESCRIPTION', 'PROJECT'],
    }]);
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Responsibilities and achievements');
    expect(Array.from(element.querySelectorAll('ul li'), item => item.textContent))
      .toEqual(['Builds software', 'Thesis']);

    translate.use('da');
    await fixture.whenStable();
    expect(element.textContent).toContain('Ansvar og resultater');
    expect(Array.from(element.querySelectorAll('ul li'), item => item.textContent))
      .toEqual(['Udvikler software', 'Speciale']);
  });

  it('renders portfolio images and links', async () => {
    const fixture = await render([{
      company: 'Company', titleKey: 'ROLE', startKey: 'START', endKey: 'END',
      portfolio: [{
        title: 'PolyScope 5', image: 'images/portfolio/polyscope_5.png',
        descriptionKey: 'DESCRIPTION', href: 'https://www.universal-robots.com/',
      }],
    }]);
    const article = (fixture.nativeElement as HTMLElement).querySelector('article');
    expect(article?.querySelector('img')?.getAttribute('alt')).toBe('PolyScope 5');
    expect(article?.querySelector('a')?.getAttribute('href')).toBe('https://www.universal-robots.com/');
    expect(article?.textContent).toContain('Builds software');
  });
});
