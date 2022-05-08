import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../entidades/producto';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  producto: Producto = new Producto();
  checkoutForm: any;  

  constructor(private productosService: ProductosService, private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        nombre: "",
        cantidad: 0
      });
     }

  ngOnInit(): void {
    this.producto = new Producto();
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

  onSubmit(productoData: Producto) {
    console.log("Procesando... " + productoData.nombre, " " + productoData.cantidad);

    this.producto.nombre = productoData.nombre;
    this.producto.cantidad = productoData.cantidad;

    this.productosService.crearProducto(this.producto).subscribe(
      response => {
        console.log(response);
      });

    this.producto = new Producto();
    this.checkoutForm.reset();    
  }

}
