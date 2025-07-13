import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {

  openExternalUrl(url: string): void {
    window.open(url, '_blank');
  }

  lenguajesConocidos = [
    "Java",
    "PHP",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Dart",
    "Spring Boot",
    "Bootstrap",
    "React",
    "React Native",
    "Angular",
    "Flutter"
  ]
}
