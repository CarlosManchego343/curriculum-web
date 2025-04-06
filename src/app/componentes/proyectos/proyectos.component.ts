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
      lenguajes: [
        "assets/Iconos/dart.png", 
        "assets/Iconos/flutter.png"
      ]
    }
  ]

}
