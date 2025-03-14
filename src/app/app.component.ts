import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Titulo facil de leer';
}
