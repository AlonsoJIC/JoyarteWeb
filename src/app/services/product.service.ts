import { Injectable } from '@angular/core';

// Es una buena práctica definir una interfaz para tus objetos
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string; // Lo mantenemos como string para que coincida con tus datos "₡22.000"
  imagen: string;
  tienda: string;
}

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la app
})
export class ProductService {

  // 1. El array de productos ahora vive aquí, de forma privada.
  private productos: Producto[] = [
    {
      id: 1,
      nombre: "Aretes Colibrí Esmeralda",
      descripcion: "Delicados aretes de plata con incrustaciones de cristales verdes, simulando el aleteo de un colibrí.",
      precio: "₡22.000",
      imagen: "assets/1.webp",
      tienda: "El Tucán Dorado",
    },
    {
      id: 2,
      nombre: "Collar Lapa Roja",
      descripcion: "Un collar llamativo con un dije central esmaltado a mano con los colores vivos de la guacamaya roja.",
      precio: "₡35.000",
      imagen: "assets/2.webp",
      tienda: "Artesanias Sarchi",
    },
    {
      id: 3,
      nombre: "Pulsera Quetzal Radiante",
      descripcion: "Pulsera de cuero trenzado con un dije de quetzal bañado en oro y una pluma de metal detallada.",
      precio: "₡28.500",
      imagen: "assets/3.webp",
      tienda: "Artesanias Sarchi",
    },
    {
      id: 4,
      nombre: "Anillo Tucán Piquiverde",
      descripcion: "Anillo ajustable de plata 925 con un diseño estilizado del pico de un tucán, pintado a mano.",
      precio: "₡31.000",
      imagen: "assets/4.webp",
      tienda: "El Tucán Dorado",
    },
    {
      id: 5,
      nombre: "Collar Oropéndola",
      descripcion: "Collar fino con pequeñas cuentas doradas y un dije central que evoca el nido de una oropéndola.",
      precio: "₡25.500",
      imagen: "assets/5.webp",
      tienda: "El Tucán Dorado",
    },
    {
      id: 6,
      nombre: "Broche Mariposas Morpho",
      descripcion: "Broche de plata de mariposa morpho en esmalte azul iridiscente.",
      precio: "₡19.000",
      imagen: "assets/6.webp",
      tienda: "Artesanias Sarchi",
    },
    // --- Productos de: Tesoros del Arenal ---
    {
      id: 7,
      nombre: "Collar de Roca Volcánica",
      descripcion: "Collar robusto con esferas de auténtica roca volcánica del Arenal y detalles en acero inoxidable.",
      precio: "₡40.000",
      imagen: "assets/7.webp",
      tienda: "Tesoros del Arenal",
    },
    {
      id: 8,
      nombre: "Pulsera de Jaspe, Madera y Cuarzo",
      descripcion: "Pulsera elástica que combina la energía de la piedra jaspe con la calidez de la madera de cocobolo y la claridad del cuarzo.",
      precio: "₡24.000",
      imagen: "assets/8.webp",
      tienda: "Tesoros del Arenal",
    },
    {
      id: 9,
      nombre: "Aretes de Obsidiana Pulida",
      descripcion: "Elegantes aretes colgantes con gotas de obsidiana negra, pulidas hasta obtener un brillo espejado.",
      precio: "₡26.500",
      imagen: "assets/9.webp",
      tienda: "Tesoros del Arenal",
    },
    {
      id: 10,
      nombre: "Anillo con Cuarzo Ahumado",
      descripcion: "Anillo de plata con una piedra de cuarzo ahumado en bruto, engastada artesanalmente.",
      precio: "₡38.000",
      imagen: "assets/10.webp",
      tienda: "Tesoros del Arenal",
    },
    {
      id: 11,
      nombre: "Dije Corazón de Lava",
      descripcion: "Un dije único en forma de corazón, tallado en roca de lava y montado en un cordón de cuero.",
      precio: "₡18.000",
      imagen: "assets/11.webp",
      tienda: "Tesoros del Arenal",
    }
  ];

  constructor() { }

  // 2. Método público para que los componentes puedan pedir la lista de productos.
  getProductos(): Producto[] {
    return this.productos;
  }

  // 3. Método para obtener un solo producto por su ID (lo necesitarás para la página de detalles).
  getProductoById(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
