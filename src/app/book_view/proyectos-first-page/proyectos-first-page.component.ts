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
        "assets/proyectoGestorDeInventario/tablaProductos.png",
        "assets/proyectoGestorDeInventario/panelAgregar.png",
        "assets/proyectoGestorDeInventario/controlador.png",
        "assets/proyectoGestorDeInventario/modelo.png",
        "assets/proyectoGestorDeInventario/repositorio.png",
      ],
    },
    {
      imagenes: [
        "assets/proyectoConecta4/tableroVacio.png",
        "assets/proyectoConecta4/tableroUsado.png",
        "assets/proyectoConecta4/ganador.png",
        "assets/proyectoConecta4/confetti.png",
      ],
    }
  ]
}
