import { identifierName } from "@angular/compiler";

export class Producto {
    id: number;
    nombreProducto: string;
    cantidad: number;

    constructor() {
        this.id = 0;
        this.nombreProducto = "";
        this.cantidad = 0;
    }
}

const producto = new Producto();