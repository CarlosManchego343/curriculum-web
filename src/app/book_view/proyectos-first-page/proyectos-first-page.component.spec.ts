import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosFirstPageComponent } from './proyectos-first-page.component';

describe('ProyectosFirstPageComponent', () => {
  let component: ProyectosFirstPageComponent;
  let fixture: ComponentFixture<ProyectosFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosFirstPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
