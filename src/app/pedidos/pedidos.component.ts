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
  
  onSubmit(productoData: Producto) {
    console.log(productoData);
   
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
