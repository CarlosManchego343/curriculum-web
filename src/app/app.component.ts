import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Title } from '@angular/platform-browser';
import { TimelineExpLabComponent } from './componentes/timeline-exp-lab/timeline-exp-lab.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentacionComponent, NavbarComponent, TimelineExpLabComponent, ProyectosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Mi Portafolio Profesional | Carlos Manchego');
  }
  
  title = 'Titulo facil de leer';
}
