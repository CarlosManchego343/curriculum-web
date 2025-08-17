import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineExpLabSecondPageComponent } from './timeline-exp-lab-second-page.component';

describe('TimelineExpLabSecondPageComponent', () => {
  let component: TimelineExpLabSecondPageComponent;
  let fixture: ComponentFixture<TimelineExpLabSecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineExpLabSecondPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineExpLabSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
