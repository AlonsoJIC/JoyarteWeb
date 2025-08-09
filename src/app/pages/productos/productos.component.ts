import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // 1. Importa OnInit
import { RouterModule } from '@angular/router';

// 2. Importa el servicio y la interfaz
import { ProductService, Producto } from '../../services/product.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productService: ProductService) { }

  // 6. Usa el hook ngOnInit para obtener los datos cuando el componente se inicia.
  ngOnInit(): void {
    this.productos = this.productService.getProductos();
  }
}
