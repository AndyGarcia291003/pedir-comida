import { Routes } from '@angular/router';

// Importaciones usando tus nombres de archivo reales (.ts)
import { Buscar } from './pages/buscar/buscar';
import { Perfil } from './pages/perfil/perfil';
import { Carrito } from './pages/carrito/carrito';
import { Atriculo } from './pages/atriculo/atriculo';
import { Rubro } from './pages/rubro/rubro';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: 'buscar', component: Buscar },
  { path: 'perfil', component: Perfil },
  { path: 'carrito', component: Carrito },
  { path: 'atriculo', component: Atriculo },
  { path: 'rubro', component: Rubro },
  // Ruta comodín: Si el usuario escribe cualquier cosa loca, lo manda a Home
  { path: '**', component: Home},
  
  // Ruta por defecto (cuando la URL esté vacía)
  { path: '', redirectTo: '/buscar', pathMatch: 'full' }
];