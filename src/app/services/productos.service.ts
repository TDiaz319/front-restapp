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
  private httpHeaders = new HttpHeaders({"Content-type": "application/json"});

  constructor(private http: HttpClient, private router: Router) { }

  getProducto(): Observable<any> {
    // el HTTP.GET devuelve un observable
    return this.http.get(this.urlEndPoint + "productos").pipe(
      tap( (response: any) => {
        (response as Producto[]).forEach( producto => {
          console.log(producto.id);
          console.log(producto.nombreProducto);
          console.log(producto.cantidad);
          console.log("___________________________");          
        })
      }),
    );
  }
}
