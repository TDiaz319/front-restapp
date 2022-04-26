import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProductosComponent } from './productos/productos.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch: "full" },
  { path: "menu", component: MainMenuComponent },
  { path: "productos", component:ProductosComponent},
  //{ path: "pedidos", component:ProductosComponent}
  { path: "reservas", component:ReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
