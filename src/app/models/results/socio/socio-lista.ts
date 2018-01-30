export class SocioLista {
    rowKey: string;
    nome: string;
    clube: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}