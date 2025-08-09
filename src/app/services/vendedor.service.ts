import { Injectable } from '@angular/core';

// 1. Definimos la interfaz para un Vendedor aquí.
export interface Vendedor {
  id: number;
  nombre: string;
  descripcion: string;
  logo: string; // Ruta a la imagen del logo
}

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  // 2. El array de vendedores vive aquí, de forma privada.
  private vendedores: Vendedor[] = [
    {
      id: 1,
      nombre: "El Tucán Dorado",
      descripcion: "Especialistas en joyería inspirada en la avifauna de Costa Rica, con diseños delicados en plata y oro.",
      logo: "assets/t.webp"
    },
    {
      id: 2,
      nombre: "Tesoros del Arenal",
      descripcion: "Artesanía única que incorpora rocas volcánicas, maderas nativas y piedras semipreciosas de la región del Volcán Arenal.",
      logo: "assets/a.webp"
    },
    {
      id: 3,
      nombre: "Artesanias Sarchi",
      descripcion: "Diseños modernos y audaces que capturan la esencia vibrante de la cultura costarricense en cada pieza.",
      logo: "assets/s.webp"
    }
  ];

  constructor() { }

  // 3. Método público para que los componentes puedan pedir la lista completa.
  getVendedores(): Vendedor[] {
    return this.vendedores;
  }

  // 4. Método para obtener un solo vendedor por su ID (útil para futuras páginas de detalle).
  getVendedorById(id: number): Vendedor | undefined {
    return this.vendedores.find(v => v.id === id);
  }
}
