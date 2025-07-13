import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFirstPageComponent } from './presentation-first-page.component';

describe('PresentationFirstPageComponent', () => {
  let component: PresentationFirstPageComponent;
  let fixture: ComponentFixture<PresentationFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationFirstPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
