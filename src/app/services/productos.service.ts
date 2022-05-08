import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError, tap } from "rxjs/operators";
import { Producto } from '../entidades/producto';

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
      tap( (response: any) => {
        (response as Producto[]).forEach( producto => {  
        })
      }),
      map ((response: any) => {
        (response as Producto[]).map( producto => {
          return producto;
        });
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
      })
    );
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.urlEndPoint}productos/updateProducto/${producto.id}`, producto, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Producto[]).map( producto => {
          return producto;
        });
        return response;
      })
    );
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<any>(`${this.urlEndPoint}productos/crearProducto`, producto, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        console.log(response);
        return response;
      })
    );
  }
}
