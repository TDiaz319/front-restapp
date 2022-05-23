import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Reserva } from '../entidades/reserva';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  reserva: Reserva = new Reserva();
  checkoutForm: any;  

  constructor(private formBuilder: FormBuilder,
    private reservaService : ReservaService) { 

    this.checkoutForm = this.formBuilder.group({
      cliente: this.reserva.cliente,
      telefono: this.reserva.telefono,
      mesa: this.reserva.mesa,
      dia: this.reserva.dia,
      hora: this.reserva.hora
    });
   }
  

  ngOnInit(): void {
  }

  onSubmit(reservaData: Reserva) {
    console.log(reservaData);
    this.reserva.cliente = reservaData.cliente;
    this.reserva.telefono = reservaData.telefono;
    this.reserva.dia = reservaData.dia;
    this.reserva.hora = reservaData.hora;
    this.reserva.mesa = reservaData.mesa;

    this.reservaService.crearReserva(this.reserva).subscribe(
      response => {
        Swal.fire("Reserva Guardada", `La reseva ha sido guardada`, "success");

      });

      
    this.reserva = new Reserva();
    this.checkoutForm.reset();
  }

}
