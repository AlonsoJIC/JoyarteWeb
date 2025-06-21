import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vendedores',
  imports: [CommonModule],
  templateUrl: './vendedores.component.html',
  styleUrl: './vendedores.component.scss'
})
export class VendedoresComponent {
  vendedores = [
    {
      id: 1,
      nombre: 'María Fernández',
      especialidad: 'Collares y Pulseras',
      calificacion: 4.9,
      productos: 24,
      imagen: '/assets/placeholder.svg',
      descripcion: 'Artesana con 8 años de experiencia en joyería fina'
    },
    {
      id: 2,
      nombre: 'Carlos Rodríguez',
      especialidad: 'Anillos Minimalistas',
      calificacion: 4.8,
      productos: 18,
      imagen: '/assets/placeholder.svg',
      descripcion: 'Diseñador especializado en piezas modernas y elegantes'
    },
    {
      id: 3,
      nombre: 'Ana López',
      especialidad: 'Aretes Artesanales',
      calificacion: 5.0,
      productos: 32,
      imagen: '/assets/placeholder.svg',
      descripcion: 'Maestra artesana con técnicas tradicionales'
    },
    {
      id: 4,
      nombre: 'Roberto Silva',
      especialidad: 'Cadenas y Brazaletes',
      calificacion: 4.7,
      productos: 15,
      imagen: '/assets/placeholder.svg',
      descripcion: 'Experto en trabajos de orfebrería fina'
    }
  ]
}