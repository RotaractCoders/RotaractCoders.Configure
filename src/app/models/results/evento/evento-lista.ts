export class EventoLista {
    rowKey: string;
    nome: string;
    tipoEvento: string;
    programa: string;
    descricao: string;
    dataCriacao: Date;
    dataEvento: Date;
    dataAtualizacao: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}