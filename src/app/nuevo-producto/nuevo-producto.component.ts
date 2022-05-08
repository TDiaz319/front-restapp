import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../entidades/producto';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  producto: Producto = new Producto();
  checkoutForm: any;  

  constructor(private productosService: ProductosService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
      this.checkoutForm = this.formBuilder.group({
        nombre: this.producto.nombre,
        cantidad: this.producto.cantidad
      });
     }

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto(): void {
    this.activatedRoute.params.subscribe(params =>{
      let id = params["id"];
      console.log("id: " + id);
      if (id) {
        this.productosService.buscarProducto(id).subscribe( (producto) => this.producto = producto);
      }
    });
  }

  onSubmit(productoData: Producto) {
    console.log("Procesando... " + productoData.nombre, " " + productoData.cantidad);    
    console.log("producto: " + this.producto.nombre, " " + this.producto.cantidad);

    this.producto.nombre = productoData.nombre;
    this.producto.cantidad = productoData.cantidad;

    this.productosService.crearProducto(this.producto).subscribe(
      response => {
      });

    this.producto = new Producto();
    this.checkoutForm.reset();    
  }
}
