import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  valores = [
    {
      icono: 'bi bi-heart-fill',
      titulo: 'Pasión',
      descripcion: 'Creemos en el poder transformador del arte hecho con amor y dedicación.'
    },
    {
      icono: 'bi bi-award-fill',
      titulo: 'Calidad',
      descripcion: 'Cuidamos cada detalle para ofrecer piezas únicas, hermosas y duraderas.'
    },
    {
      icono: 'bi bi-people-fill',
      titulo: 'Comunidad',
      descripcion: 'Unimos a creadores y clientes en una red que valora el trabajo auténtico.'
    },
    {
      icono: 'bi bi-bullseye',
      titulo: 'Transparencia',
      descripcion: 'Operamos con ética, confianza y compromiso en cada transacción.'
    }
  ];

  equipo = [
    {
      nombre: 'Ana García',
      rol: 'CEO & Fundadora',
      img: 'assets/ana.jpg',
      desc: 'Visionaria y amante de la joyería artesanal. Ana lidera JOYARTE con el corazón y un firme compromiso con la cultura local.'
    },
    {
      nombre: 'Carlos Mendoza',
      rol: 'CTO',
      img: 'assets/carlos.jpg',
      desc: 'Apasionado de la tecnología y la innovación, construye la plataforma que conecta talento con oportunidades.'
    },
    {
      nombre: 'Laura Jiménez',
      rol: 'Directora de Marketing',
      img: 'assets/laura.jpg',
      desc: 'Creativa y empática, Laura da voz a los artesanos y conecta la marca con quienes buscan algo genuino.'
    }
  ];

  estadisticas = [
    { valor: '150+', descripcion: 'Artesanos que confían en nosotros' },
    { valor: '2,500+', descripcion: 'Joyas vendidas con amor' },
    { valor: '1,200+', descripcion: 'Clientes que eligieron lo auténtico' },
    { valor: '15', descripcion: 'Ciudades con presencia artesanal' }
  ];
}