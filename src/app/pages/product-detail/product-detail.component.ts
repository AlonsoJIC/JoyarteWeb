import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// 1. Importa el servicio Y la interfaz desde el mismo archivo de servicio.
import { ProductService, Producto } from '../../services/product.service'; // Asegúrate que la ruta sea correcta

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // CommonModule es necesario para usar *ngIf
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // 2. Declara la propiedad 'producto' usando la interfaz importada.
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // 3. Obtiene el 'id' de la URL. El '+' lo convierte a número.
    const id = +this.route.snapshot.paramMap.get('id')!;

    // 4. Llama al servicio para obtener el producto.
    // El tipo de 'producto' ahora coincidirá perfectamente.
    this.producto = this.productService.getProductoById(id);
  }
}
