import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reserva } from '../entidades/reserva';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.scss']
})
export class ListaReservasComponent implements OnInit {

  reserva: Reserva[] = [];
  checkoutForm: any;  

  constructor(private formBuilder: FormBuilder,
    private reservaService : ReservaService) { 

   }
  

  ngOnInit(): void {
  }

  onSubmit(reservaData: Reserva) {
    console.log(reservaData);
 
  }
  /*
  buscarReservas (id: string){
    this.reservaService.buscarReserva(id).subscribe(
      response =>{
        this.reserva= response as Reserva[];
        console.log(response);
      }
    );
  }*/

  recargaTabla(event:any) {
    console.log(event.target.value);
    //this.buscarReservas(event.target.value);
  }

}


