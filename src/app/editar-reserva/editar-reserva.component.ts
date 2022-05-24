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
    private activatedRoute: ActivatedRoute
  ) { this.checkoutForm = this.formBuilder.group({});
   
  }

  ngOnInit(): void {
    this.cargarReserva();
  }
cargarReserva():void {
  this.reservaService.getReserva().subscribe(
    response => {
      this.reservas = response as Reserva[];
    }
  );

    
  }
}


