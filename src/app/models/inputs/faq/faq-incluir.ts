export class FaqIncluir {
    rowKey: string;
    pergunta: string;
    resposta: string;
    posicao: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}