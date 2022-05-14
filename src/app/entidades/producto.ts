import { Proveedor } from "./proveedor";


export class Producto {
    id: number;
    nombre: string;
    cantidad: number;
    proveedor: Proveedor;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.cantidad = 0;
        this.proveedor = new Proveedor();
    }
}

const producto = new Producto();