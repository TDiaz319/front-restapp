import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../entidades/producto';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";

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

    this.producto.nombre = productoData.nombre;
    this.producto.cantidad = productoData.cantidad;

    this.productosService.crearProducto(this.producto).subscribe(
      response => {
        swal.fire("Producto Guardado", `El Producto ${productoData.nombre} ha sido creado/actualizado con éxito!`, "success");
      });

    this.producto = new Producto();
    this.checkoutForm.reset();    
  }
}
