import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos-second-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos-second-page.component.html',
  styleUrl: './proyectos-second-page.component.css'
})
export class ProyectosSecondPageComponent {

  proyectosRealizados = [
    {
      nombre: "Arco: Aquel que gestiona una PQRSA",
      descripcion: "Un hombre tuvo un sueño, en el habia una aplicación diseñada para la toma de las distintas peticiones, quejas, reclamos, sugerencias y agradecimientos de una compañia, nunca espero que ese sueño fuera verdad.",
      lenguajes: [
        "Dart",
        "Flutter"
      ],
      conclusion: "El proyecto fue un exito y logro que la compañia mejorara su servicio al cliente, permitiendo una gestion eficiente de las PQRSA.",
    },
    {
      nombre: "Arco: Angular y Springboot, señores del front y backend organizado",
      descripcion: "A veces la ayuda viene de lugares inexperados. Angular y Spring Boot se unen para crear una aplicación web robusta y escalable, donde el frontend se encarga de la interfaz de usuario y el backend gestiona la lógica del negocio. Nadie espero esta alianza, pero era necesaria para salvar el día.",
      lenguajes: [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "Bootstrap",
        "Java",
        "Spring Boot"
      ],
      conclusion: "El proyecto demostró la efectividad de Angular y Spring Boot trabajando juntos, proporcionando una experiencia de usuario fluida y un backend sólido.",
    },
    {
      nombre: "Arco: El juego de los dioses: Conecta 4",
      descripcion: "En un torneo que definirá el destino de los dioses, un juego de Conecta 4 se convierte en la prueba final. Los jugadores deben usar su ingenio y estrategia para conectar cuatro fichas antes que sus oponentes.",
      lenguajes: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
      conclusion: "Se demostró que la estrategia y la planificación son clave para ganar en Conecta 4, y que React puede ser una herramienta poderosa para crear juegos interactivos.",
    }
  ]
}
