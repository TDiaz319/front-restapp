import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reserva } from '../entidades/reserva';
import { ReservaService } from '../services/reserva.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.scss']
})
export class ListaReservasComponent implements OnInit {

  reservas: Reserva[] = [];
  checkoutForm: any;  

  constructor(private formBuilder: FormBuilder,
    private reservaService : ReservaService) { 

   }
  

  ngOnInit(): void {
  }

  onSubmit(reservaData: Reserva) {
    console.log(reservaData);
 
  }
  
  buscarReservas (fecha: string){
    this.reservaService.buscarReservaPorFecha(fecha).subscribe(
      response =>{
        this.reservas = response as Reserva[];
        console.log(response);
      }
    );
  }

  recargaTabla(event:any) {
    console.log(event.target.value);
    this.buscarReservas(event.target.value);
  }

  eliminarReserva(reserva: Reserva) {   
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: `¿Seguro que desea eliminar la reserva de la mesa ${reserva.mesa}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Eliminando reserva: " + reserva.numeroReserva);
        this.reservaService.borrarReserva(reserva.numeroReserva).subscribe(
          response => {
            this.reservas = this.reservas.filter( re => re != reserva);

            swalWithBootstrapButtons.fire(
              'Reserva borrada',
              'Reserva eliminada con éxito.',
              'success'
            )
        });
      }
    })
  }
}


