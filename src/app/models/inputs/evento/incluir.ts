import { Data } from "@angular/router/src/config";

export class Incluir {
    rowKey: string;
    nome: string;
    realizador: string;
    tipoEvento: string;
    programa:string;
    descricao: string;
    endereco: string;
    latitude: number;
    longitude: number;
    dataEvento: Date;

    data:string;
    hora:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}