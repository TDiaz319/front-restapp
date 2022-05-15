export class Reserva {
    numeroReserva: number;
    dia: Date;
    hora: string;
    cliente:string;
    nMesa: number;

    constructor() {
        this.numeroReserva = 0;
        this.dia = new Date;
        this.hora = "";
        this.cliente= "";
        this.nMesa= 0;
    }
}

const reserva = new Reserva();