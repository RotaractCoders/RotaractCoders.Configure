export class ArquivoLista {
    rowKey: string;
    nome: string;
    categoria: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}