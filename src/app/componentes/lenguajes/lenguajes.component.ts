import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent {
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
