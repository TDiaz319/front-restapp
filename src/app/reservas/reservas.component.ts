import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reserva } from '../entidades/reserva';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  reserva: Reserva = new Reserva();
  checkoutForm: any;  

  constructor(private formBuilder: FormBuilder) { 

    this.checkoutForm = this.formBuilder.group({
      cliente: this.reserva.cliente,
      mesa: this.reserva.nMesa,
      fecha: this.reserva.dia,
      hora: this.reserva.hora
    });
   }
  

  ngOnInit(): void {
  }

  onSubmit(reservaData: Reserva) {
    console.log(reservaData);
  }

}
