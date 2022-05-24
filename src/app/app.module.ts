import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { ProductosService } from './services/productos.service';
import { InicioComponent } from './inicio/inicio.component';
import { ReservasComponent } from './reservas/reservas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaReservasComponent } from './lista-reservas/lista-reservas.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';


const routes: Routes = [
  { path: "menu", component: MainMenuComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponent },
  { path: "reservas", component: ReservasComponent },
  { path: "nuevoproducto", component: NuevoProductoComponent },
  { path: "nuevoproducto/:id", component: NuevoProductoComponent },
  { path: "pedidos", component: PedidosComponent },
  { path: "listareservas", component: ListaReservasComponent },
  { path: "editarreserva", component: EditarReservaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductosComponent,
    InicioComponent,
    ReservasComponent,
    NuevoProductoComponent,
    NavbarComponent,
    PedidosComponent,
    ListaReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
