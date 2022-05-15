export class Reserva {
    numeroReserva: number;
    dia: Date;
    hora: string;
    cliente: string;
    telefono: number;
    mesa: number;

    constructor() {
        this.numeroReserva = 0;
        this.dia = new Date;
        this.hora = "";
        this.cliente= "";
        this.telefono = 0;
        this.mesa= 0;
    }
}

const reserva = new Reserva();