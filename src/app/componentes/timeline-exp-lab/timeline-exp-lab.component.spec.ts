import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineExpLabComponent } from './timeline-exp-lab.component';

describe('TimelineExpLabComponent', () => {
  let component: TimelineExpLabComponent;
  let fixture: ComponentFixture<TimelineExpLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineExpLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineExpLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
