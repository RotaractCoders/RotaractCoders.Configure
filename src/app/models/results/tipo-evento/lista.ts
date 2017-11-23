export class Lista {
    id: string;
    descricao: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}