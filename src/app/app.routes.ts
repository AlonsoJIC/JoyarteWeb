import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { VendedorDetailComponent } from './pages/vendedor-detail/vendedor-detail.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductDetailComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'vendedores', component: VendedoresComponent },
  // 👇 2. Añade la nueva ruta para el detalle del vendedor
  { path: 'vendedores/:id', component: VendedorDetailComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
