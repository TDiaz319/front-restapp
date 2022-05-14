export class Proveedor {
    id: number;
    nombre: string;
    telefono: string;
    correo:string;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.telefono = "";
        this.correo= "";
    }
}

const proveedor = new Proveedor();