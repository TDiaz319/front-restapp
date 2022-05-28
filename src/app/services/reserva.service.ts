import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { formatDate, DatePipe } from "@angular/common";
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError, tap } from "rxjs/operators";
import { Reserva } from '../entidades/reserva';
import swal from "sweetalert2";

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

  buscarReservaPorFecha(fecha: string): Observable<any> {
    return this.http.post(`${this.urlEndPoint}reservas/buscarporfecha`, fecha, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Reserva[]).map( reserva => {
          //response.dia = formatDate(response.dia, "dd-MM-yyyy", "en-US");
          return reserva;
        });
        return response;
      })
    );
  }

  borrarReserva(id: number): Observable<Reserva> {
    return this.http.delete<Reserva>(`${this.urlEndPoint}reserva/borrar/${id}`, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        return response;
      }),
      catchError(e => {
        if (e.status == 400) {
          return throwError(() => e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, "error");
        return throwError(() => e);
      })
    );
  }

  actualizarReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.urlEndPoint}reserva/updateReserva/${reserva.numeroReserva}`, reserva, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        return response;
      }),
      catchError(e => {
        if (e.status == 400) {
          return throwError(() => e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, "error");
        return throwError(() => e);
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
