import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError, tap } from "rxjs/operators";
import { Producto } from '../entidades/producto';
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlEndPoint: string = "http://localhost:2000/";
  private httpHeaders = new HttpHeaders({
    "Content-type": "application/json",
    "Accept": "application/json"});

  constructor(private http: HttpClient, private router: Router) { }

  getProducto(): Observable<any> {
    // el HTTP.GET devuelve un observable
    return this.http.get(this.urlEndPoint + "productos").pipe(
      map ((response: any) => {
        (response as Producto[]).map( producto => {
          return producto;
        });
        return response;
      })
    );
  }

  buscarProducto(id: number): Observable<Producto> {
    return this.http.get(`${this.urlEndPoint}productos/buscar/${id}`, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        console.log(response);
        return response;
      })
    );
  }

  borrarProducto(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.urlEndPoint}productos/borrar/${id}`, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Producto[]).map( producto => {
          return producto;
        });
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

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.urlEndPoint}productos/updateProducto/${producto.id}`, producto, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Producto[]).map( producto => {
          return producto;
        });
        console.log(response);
        console.log(producto);
        return response;
      })
    );
  }

  crearProducto(producto: Producto) : Observable<Producto> {
    return this.http.post<any>(`${this.urlEndPoint}productos/crearProducto`, producto, {headers: this.httpHeaders}).pipe(
      map( (response: any) => response.producto as Producto),
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
}
