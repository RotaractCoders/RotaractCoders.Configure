import { Data } from "@angular/router/src/config";

export class Incluir {
    rowKey: string;
    nome: string;
    realizador: string;
    tipoEvento: string;
    programa:string;
    descricao: string;
    dataEvento: Date;

    data:string;
    hora:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}