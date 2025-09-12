import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos-first-page.component.html',
  styleUrl: './proyectos-first-page.component.css'
})
export class ProyectosFirstPageComponent {

  getCarouselId(index: number): string {
    return `carouselExample-${index}`;
  }

  imagenes_proyectos = [
    {
      imagenes: [
        "assets/proyectoPQRSA/inicioSesion.png",
        "assets/proyectoPQRSA/menuAdmin.png",
        "assets/proyectoPQRSA/menuUser.png",
        "assets/proyectoPQRSA/registro.png",
        "assets/proyectoPQRSA/reportes.png"
      ],
    },
    {
      imagenes: [
        "assets/proyectoGestorDeInventario/tablaProductos.webp",
        "assets/proyectoGestorDeInventario/panelAgregar.webp",
        "assets/proyectoGestorDeInventario/controlador.webp",
        "assets/proyectoGestorDeInventario/modelo.webp",
        "assets/proyectoGestorDeInventario/repositorio.webp",
      ],
    },
    {
      imagenes: [
        "assets/proyectoConecta4/tableroVacio.webp",
        "assets/proyectoConecta4/tableroUsado.webp",
        "assets/proyectoConecta4/ganador.webp",
        "assets/proyectoConecta4/confetti.webp",
      ],
    }
  ]
}
