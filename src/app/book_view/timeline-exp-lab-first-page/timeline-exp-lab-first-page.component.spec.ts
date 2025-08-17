import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineExpLabFirstPageComponent } from './timeline-exp-lab-first-page.component';

describe('TimelineExpLabFirstPageComponent', () => {
  let component: TimelineExpLabFirstPageComponent;
  let fixture: ComponentFixture<TimelineExpLabFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineExpLabFirstPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineExpLabFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
