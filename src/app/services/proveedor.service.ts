import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError, tap } from "rxjs/operators";
import { Proveedor } from '../entidades/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private urlEndPoint: string = "http://localhost:2000/";
  private httpHeaders = new HttpHeaders({
    "Content-type": "application/json",
    "Accept": "application/json"});

  constructor(private http: HttpClient, private router: Router) { }

  getProveedor(): Observable<any> {
    // el HTTP.GET devuelve un observable
    return this.http.get(this.urlEndPoint + "proveedor").pipe(
      tap( (response: any) => {
        (response as Proveedor[]).forEach( proveedor => {  
        })
      }),
      map ((response: any) => {
        (response as Proveedor[]).map( proveedor => {
          return proveedor;
        });
        return response;
      })
    );
  }

  buscarProveedor(id: number): Observable<Proveedor> {
    return this.http.get(`${this.urlEndPoint}proveedor/buscar/${id}`, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        console.log(response);
        return response;
      })
    );
  }

  borrarProducto(id: number): Observable<Proveedor> {
    return this.http.delete<Proveedor>(`${this.urlEndPoint}proveedor/borrar/${id}`, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Proveedor[]).map( proveedor => {
          return proveedor;
        });
        return response;
      })
    );
  }

  actualizarProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.urlEndPoint}proveedor/updateProveedor/${proveedor.id}`, proveedor, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        (response as Proveedor[]).map( proveedor => {
          return proveedor;
        });
        console.log(response);
        console.log(proveedor);
        return response;
      })
    );
  }

  crearProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<any>(`${this.urlEndPoint}proveedor/crearProveedor`, proveedor, {headers: this.httpHeaders}).pipe(
      map ((response: any) => {
        console.log(response);
        return response;
      })
    );
  }
}