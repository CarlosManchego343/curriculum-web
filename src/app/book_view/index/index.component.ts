import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  @Output() paginaSeleccionada = new EventEmitter<number>();

  irAPagina(pagina: number) {
    this.paginaSeleccionada.emit(pagina);
  }
}
