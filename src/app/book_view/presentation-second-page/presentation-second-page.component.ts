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
    {
      lenguaje: "Java",
      nivel: "⭐⭐⭐⭐☆"
    },
    {
      lenguaje: "Python",
      nivel: "⭐⭐☆☆☆"
    },
    {
      lenguaje: "HTML",
      nivel: "⭐⭐⭐⭐⭐"
    },
    {
      lenguaje: "CSS",
      nivel: "⭐⭐⭐☆☆"
    },
    {
      lenguaje: "JavaScript",
      nivel: "⭐⭐⭐⭐☆"
    },
    {
      lenguaje: "Spring Boot",
      nivel: "⭐⭐⭐☆☆"
    },
    {
      lenguaje: "Bootstrap",
      nivel: "⭐⭐⭐⭐☆"
    },
    {
      lenguaje: "React",
      nivel: "⭐⭐⭐☆☆"
    },
    {
      lenguaje: "Angular",
      nivel: "⭐⭐⭐⭐☆"
    },
    {
      lenguaje: "Flutter",
      nivel: "⭐⭐⭐☆☆"
    }
  ]
}
