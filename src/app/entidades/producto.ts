export class Producto {
    id: number;
    nombre: string;
    cantidad: number;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.cantidad = 0;
    }
}

const producto = new Producto();