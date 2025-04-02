import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentacionComponent, NavbarComponent],
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
