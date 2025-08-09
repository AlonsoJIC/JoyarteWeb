import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 1. Importamos el NUEVO servicio y su interfaz.
import { VendedorService, Vendedor } from '../../services/vendedor.service'; // Asegúrate que la ruta sea correcta

@Component({
  selector: 'app-vendedores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent implements OnInit {

  // Propiedad para guardar la lista de vendedores.
  vendedores: Vendedor[] = [];

  // 2. Inyectamos VendedorService en el constructor.
  constructor(private vendedorService: VendedorService) { }

  // 3. En ngOnInit, llamamos al método del servicio para obtener los datos.
  ngOnInit(): void {
    this.vendedores = this.vendedorService.getVendedores();
  }
}
