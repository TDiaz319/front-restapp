import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../entidades/producto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
 
    constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void { 
    this.productosService.getProducto().subscribe(
      response => {
        this.productos = response as Producto[];
        console.log(response);
      });
  }

  deleteProduct(producto: Producto): void {
    console.log("borrando: " + producto.id);
    this.productosService.borrarProducto(producto.id).subscribe(
      response => {
        this.productos = this.productos.filter( pro => pro != producto);
      });
  }

  updateProduct(obj: Producto): void {
    let producto: Producto = obj;
    console.log("actualizando: " + producto.id);    

    this.productosService.actualizarProducto(producto).subscribe(
      response => {
      });
  }

  createProduct(): void {
    this.router.navigate(["nuevoproducto"]);
  }
}
