export class Reserva {
    numeroReserva: number;
    dia: string;
    hora: string;
    cliente:string;
    nMesa: number;

    constructor() {
        this.numeroReserva = 0;
        this.dia = "";
        this.hora = "";
        this.cliente= "";
        this.nMesa= 0;
    }
}

const reserva = new Reserva();