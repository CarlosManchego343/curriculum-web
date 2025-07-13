import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-exp-lab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-exp-lab.component.html',
  styleUrl: './timeline-exp-lab.component.css'
})
export class TimelineExpLabComponent {

  experiencias = [
    {
      tiempo: "Julio 2023 - Agosto 2023",
      cargo: "Ingeniero de sistemas Junior",
      lugar: "Clinica universidad de la sabana",
      descripciones: ["Participé en el desarrollo de proyectos Backend mediante Java y Spring bajo el patrón modelo-vista-controlador (MVC).",
        "Optimice las interfaces de los proyectos haciendo uso de HTML, CSS, JavaScript y Bootstrap, mejorando así la experiencia del usuario un 20%."]
    },
    {
      tiempo: "Julio 2022 - Enero 2023",
      cargo: "Practicante de desarrollador Front end",
      lugar: "NTTDATA",
      descripciones: ["Participé en el desarrollo de un proyecto de migración de una aplicación web hecha en Angular a React bajo la arquitectura de micro Frontends mejorando la escalabilidad del proyecto.",
        "Contribuí en la verificación de que los proyectos estén apuntando de manera correcta el backend desarrollado, asegurando la integridad de los datos.",
        "Colaboré en la documentación y capacitación sobre protocolos HTTP, frameworks y arquitecturas."]
    }
  ]

}
