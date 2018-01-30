export class Usuario {
    login: string;
    senha: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}