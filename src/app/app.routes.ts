import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'vendedores', component: VendedoresComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
