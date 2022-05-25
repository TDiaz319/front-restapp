import { Component, OnInit } from '@angular/core';
import { Reserva } from '../entidades/reserva';
import { ReservaService } from '../services/reserva.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.scss']
})
export class EditarReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();
  checkoutForm: any; 

  constructor(private reservaService: ReservaService,
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute) { 
      
    this.checkoutForm = this.formBuilder.group({
      cliente: this.reserva.cliente,
      telefono: this.reserva.telefono,
      mesa: this.reserva.mesa,
      dia: this.reserva.dia,
      hora: this.reserva.hora
    });   
  }

  ngOnInit(): void {
    this.cargarReserva();
  }

cargarReserva():void {
  this.activatedRoute.params.subscribe(params => {
    let id = params ["id"];
    if(id){
      this.reservaService.buscarReserva(id).subscribe( (reserva)=> this.reserva= reserva);
    }
  });
 
  }
  onSubmit(reservaData:Reserva){
    console.log(reservaData);

    this.reserva.cliente = reservaData.cliente;
    this.reserva.telefono = reservaData.telefono;
    this.reserva.mesa = reservaData.mesa;
    this.reserva.dia = reservaData.dia;
    this.reserva.hora = reservaData.hora;
    this.reserva.numeroReserva = reservaData.numeroReserva;

    this.reservaService.crearReserva(this.reserva).subscribe(
      response => {}
    );
    this.reserva = new Reserva();
    this.checkoutForm.reset();
  }
}


