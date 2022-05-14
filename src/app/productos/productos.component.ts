import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../entidades/producto';
import { Router } from '@angular/router';
import swal from "sweetalert2";
import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
 
    constructor(private productosService: ProductosService, private router: Router,
      private modalService: ModalService) { }

  ngOnInit(): void { 
    this.productosService.getProducto().subscribe(
      response => {
        this.productos = response as Producto[];
        console.log(response);
      });
  }

  deleteProduct(producto: Producto): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: `¿Seguro que desea eliminar el producto ${producto.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("borrando: " + producto.id);
        this.productosService.borrarProducto(producto.id).subscribe(
          response => {
            this.productos = this.productos.filter( pro => pro != producto);

            swalWithBootstrapButtons.fire(
              'Producto borrado',
              'Producto eliminado con éxito.',
              'success'
            )
        });
      }
    })    
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
