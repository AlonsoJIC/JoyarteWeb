import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
  productos = [
    {
      id: 1,
      nombre: "Collar de Perlas Artesanal",
      precio: "$45.000",
      imagen: "assets/placeholder.svg",
      vendedor: "María Fernández",
    },
    {
      id: 2,
      nombre: "Anillo Dorado Minimalista",
      precio: "$28.000",
      imagen: "assets/placeholder.svg",
      vendedor: "Carlos Rodríguez",
    },
    {
      id: 3,
      nombre: "Aretes Colgantes Elegantes",
      precio: "$35.000",
      imagen: "assets/placeholder.svg",
      vendedor: "Ana López",
    },
    {
      id: 4,
      nombre: "Pulsera Cadena Dorada",
      precio: "$38.000",
      imagen: "assets/placeholder.svg",
      vendedor: "Roberto Silva",
    },
    {
      id: 5,
      nombre: "Conjunto de Anillos",
      precio: "$52.000",
      imagen: "assets/placeholder.svg",
      vendedor: "Isabel Torres",
    },
    {
      id: 6,
      nombre: "Collar Choker Moderno",
      precio: "$42.000",
      imagen: "assets/placeholder.svg",
      vendedor: "Diego Morales",
    },
  ];
}