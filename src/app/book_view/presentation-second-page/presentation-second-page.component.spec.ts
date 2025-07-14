import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSecondPageComponent } from './presentation-second-page.component';

describe('PresentationSecondPageComponent', () => {
  let component: PresentationSecondPageComponent;
  let fixture: ComponentFixture<PresentationSecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationSecondPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
