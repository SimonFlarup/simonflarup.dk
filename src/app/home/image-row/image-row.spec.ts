import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRow } from './image-row';

describe('ImageRow', () => {
  let component: ImageRow;
  let fixture: ComponentFixture<ImageRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageRow],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
