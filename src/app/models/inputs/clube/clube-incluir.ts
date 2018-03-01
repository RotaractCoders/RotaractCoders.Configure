export class ClubeIncluir {
    rowKey: string;
    nome: string;
    site: string;
    facebook: string;
    instagram: string;
    email: string;
    dataFundacao: string;
    programa: string;
    rotaryPadrinho: string;
    numeroDistrito: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}