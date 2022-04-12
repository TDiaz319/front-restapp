import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { of, Observable, throwError } from 'rxjs';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  private urlEndPoint: string = "http://localhost:2000";
  private httpHeaders = new HttpHeaders ({"Content-type": "application/json"});


  constructor(private http: HttpClient, private router: Router) { }

  getProducto: Observable<any> {
    // el HTTP.GET devuelve un observable
    return this.http.get(this.urlEndPoint + "/productos/").pipe(
      tap( (response: any) => {
        (response.content as Producto[]).forEach( producto => {
          console.log(producto.nombreProducto);
        })
      }),
    }

}
