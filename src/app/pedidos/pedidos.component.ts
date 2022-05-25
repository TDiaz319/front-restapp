import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ProveedorService } from '../services/proveedor.service';
import { Producto } from '../entidades/producto';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";
import { Proveedor } from '../entidades/proveedor';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  productos: Producto[] = [];
  proveedores: Proveedor[] = [];
  checkoutForm: any;

  constructor(private productosService: ProductosService,
    private modalService: ModalService, 
    private proveedorService: ProveedorService) {

     }

  ngOnInit(): void {
    this.cargarProveedores();
    this.buscarProductos(1);
  }
  
  cargarProveedores(): void {
    this.proveedorService.getProveedor().subscribe(
      response => {
        this.proveedores = response as Proveedor[];
      });
  }
  
  submit(producto: Producto, cantidad: string) {
    console.log(producto);
    console.log("Cantidad: " + cantidad);
    let nuevaCantidad: number = Number(producto.cantidad) + Number(cantidad);
    console.log("Nueva cantidad: " + nuevaCantidad);
    console.log(producto.proveedor);

    producto.cantidad = nuevaCantidad;
    this.productosService.actualizarProducto(producto).subscribe(
      response => {
        swal.fire("Producto pedido", `El pedido ${producto.nombre} ha sido realizado con éxito!`, "success");
      });   
  }

  buscarProductos(id: number) {
    this.productosService.buscarProductoPorProveedor(id).subscribe(
      response => {
        this.productos = response as Producto[];
        console.log(response);
      });
  }

  recargaTabla(event: any) {
    console.log(event.target.value);
    this.buscarProductos(event.target.value);    
  }

}
