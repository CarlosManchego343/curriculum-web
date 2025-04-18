import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {

  openExternalUrl(url: string): void {
    window.open(url, '_blank');
  }
  
}
