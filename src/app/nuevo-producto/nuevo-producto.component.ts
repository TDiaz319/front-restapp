import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  producto: Producto = new Producto();

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  crearProducto(nombreProducto: string, cantidad: number): void {
    console.log("creando: " + nombreProducto + " " + cantidad);

    this.producto.nombre = nombreProducto;
    this.producto.cantidad = cantidad;

    this.productosService.crearProducto(this.producto).subscribe(
      response => {
        console.log(response);
      });
  }

}
