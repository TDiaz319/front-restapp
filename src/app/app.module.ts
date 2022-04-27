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
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch: "full" },
  { path: "menu", component: MainMenuComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponent },
  { path: "", redirectTo: "reservas", pathMatch: "full" },
  { path: "reservas", component: ReservasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductosComponent,
    InicioComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
