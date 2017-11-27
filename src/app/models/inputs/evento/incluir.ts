export class Incluir {
    nome: string;
    realizador: string;
    idTipoEvento: string;
    descricao: string;
    data: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}