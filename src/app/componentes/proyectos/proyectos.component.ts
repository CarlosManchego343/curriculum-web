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
        "assets/Iconos/dart.png", 
        "assets/Iconos/flutter.png"
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
        "assets/Iconos/HTML.png",
        "assets/Iconos/CSS.png",
        "assets/Iconos/Javascript.png",
        "assets/Iconos/Angular.png",
        "assets/Iconos/Bootstrap.png",
        "assets/Iconos/Java.png",
        "assets/Iconos/SpringBoot.png"
      ]
    }
  ]

}
