import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-second-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation-second-page.component.html',
  styleUrl: './presentation-second-page.component.css'
})
export class PresentationSecondPageComponent {
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
