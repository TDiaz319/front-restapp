import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ProveedorService } from '../services/proveedor.service';
import { Producto } from '../entidades/producto';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";
import { Proveedor } from '../entidades/proveedor';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  producto: Producto = new Producto();
  proveedores: Proveedor[] = [];
  checkoutForm: any;  
  crear: boolean = true;

  constructor(private productosService: ProductosService, 
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private proveedorService: ProveedorService) {

      this.checkoutForm = this.formBuilder.group({
        nombre: this.producto.nombre,
        cantidad: this.producto.cantidad,
        proveedor: this.producto.proveedor
      });
     }

  ngOnInit(): void {
    this.cargarProducto();
    this.cargarProveedores();
  }

  cargarProducto(): void {
    this.activatedRoute.params.subscribe(params =>{
      let id = params["id"];
      if (id) {
        this.productosService.buscarProducto(id).subscribe( (producto) => this.producto = producto);
        this.crear = false;
      }
    });
  }

  cargarProveedores(): void {
    this.proveedorService.getProveedor().subscribe(
      response => {
        this.proveedores = response as Proveedor[];
      });
  }

  onSubmit(productoData: Producto) {
    console.log(productoData);

    let proveedor: Proveedor = new Proveedor();
    proveedor = productoData.proveedor;

    this.producto.nombre = productoData.nombre;
    this.producto.cantidad = productoData.cantidad;
    this.producto.proveedor = proveedor;

    this.productosService.crearProducto(this.producto).subscribe(
      response => {
        swal.fire("Producto Guardado", `El Producto ${productoData.nombre} ha sido creado/actualizado con éxito!`, "success");
      });

    this.producto = new Producto();
    this.checkoutForm.reset();    
  }
}
