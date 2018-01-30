export class ArquivoIncluir {
    rowKey: string;
    nome: string;
    categoria: string;
    link: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}