import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  getCarouselId(index: number): string {
    return `carouselExample-${index}`;
  }

  proyectosRealizados = [
    {
      nombre: "Gestor de PQRSA",
      imagenes: [
        "assets/proyectoPQRSA/inicioSesion.png", 
        "assets/proyectoPQRSA/menuAdmin.png", 
        "assets/proyectoPQRSA/menuUser.png", 
        "assets/proyectoPQRSA/registro.png", 
        "assets/proyectoPQRSA/reportes.png"
      ],
      descripcion : "Aplicación diseñada para la toma de las distintas peticiones, quejas, reclamos, sugerencias y agradecimientos de una compañia.",
      lenguajes: [
        "Dart", 
        "Flutter"
      ],
    },
    {
      nombre: "Gestor de Inventario",
      imagenes: [
        "assets/proyectoGestorDeInventario/tablaProductos.png",
        "assets/proyectoGestorDeInventario/panelAgregar.png",
        "assets/proyectoGestorDeInventario/controlador.png",
        "assets/proyectoGestorDeInventario/modelo.png",
        "assets/proyectoGestorDeInventario/repositorio.png",
      ],
      descripcion: "Aplicación diseñada para la gestion de productos de una tienda.",
      lenguajes: [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "Bootstrap",
        "Java",
        "Spring Boot"
      ]
    },
    {
      nombre: "Conecta 4",
      imagenes: [
        "assets/proyectoConecta4/tableroVacio.png",
        "assets/proyectoConecta4/tableroUsado.png",
        "assets/proyectoConecta4/ganador.png",
        "assets/proyectoConecta4/confetti.png",
      ],
      descripcion: "Aplicación que simula un juego de conecta 4",
      lenguajes: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ]
    }
  ]

}
