import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VendedorService, Vendedor } from '../../services/vendedor.service';

@Component({
  selector: 'app-vendedor-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vendedor-detail.component.html',
  styleUrls: ['./vendedor-detail.component.scss']
})
export class VendedorDetailComponent implements OnInit {

  vendedor: Vendedor | undefined;

  constructor(
    private route: ActivatedRoute,
    private vendedorService: VendedorService
  ) { }

  ngOnInit(): void {
    // Obtenemos el 'id' de la URL y lo convertimos a número
    const id = +this.route.snapshot.paramMap.get('id')!;

    // Usamos el servicio para obtener el vendedor específico
    this.vendedor = this.vendedorService.getVendedorById(id);
  }
}
