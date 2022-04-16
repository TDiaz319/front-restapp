import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { ProductosService } from './services/productos.service';

const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch: "full" },
  { path: "menu", component: MainMenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
