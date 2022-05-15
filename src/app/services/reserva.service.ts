import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError, tap } from "rxjs/operators";
import { Reserva } from '../entidades/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private urlEndPoint: string = "http://localhost:2000/";
  private httpHeaders = new HttpHeaders({
    "Content-type": "application/json",
    "Accept": "application/json"});

  constructor(private http: HttpClient, private router: Router) { }

  getReserva(): Observable<any> {
    // el HTTP.GET devuelve un observable
    return this.http.get(this.urlEndPoint + "reserva").pipe(
      tap( (response: any) => {
        (response as Reserva[]).forEach( reserva => {  
        })
      }),
      map ((response: any) => {
        (response as Reserva[]).map( reserva => {
          return reserva;
        });
        return response;
      })
    );
  }

  buscarReserva(id: number): Observable<Reserva> {
    return this.http.get(`${this.urlEndPoint}reserva/buscar/${id}`, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        console.log(response);
        return response;
      })
    );
  }

  borrarReserva(id: number): Observable<Reserva> {
    return this.http.delete<Reserva>(`${this.urlEndPoint}reserva/borrar/${id}`, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Reserva[]).map( reserva => {
          return reserva;
        });
        return response;
      })
    );
  }

  actualizarReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.urlEndPoint}reserva/updateProducto/${reserva.numeroReserva}`, reserva, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Reserva[]).map( reserva => {
          return reserva;
        });
        return response;
      })
    );
  }

  crearReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<any>(`${this.urlEndPoint}reserva/crearReserva`, reserva, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        return response;
      })
    );
  }
}
