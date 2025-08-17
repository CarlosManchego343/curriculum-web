import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSecondPageComponent } from './proyectos-second-page.component';

describe('ProyectosSecondPageComponent', () => {
  let component: ProyectosSecondPageComponent;
  let fixture: ComponentFixture<ProyectosSecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosSecondPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
