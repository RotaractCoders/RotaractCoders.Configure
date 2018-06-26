export class Processo {    

    rowKey: string;
    partitionKey: string;
    numeroDistrito: String;
    
    quantidadeClubes: String;
    quantidadeSocios: String;
    quantidadeProjetos: String;
    
    statusProcessamentoClube: String;
    statusProcessamentoSocio: String;
    statusProcessamentoProjeto: String;
    
    descricaoProcessamentoClube: String;
    descricaoProcessamentoSocio: String;
    descricaoProcessamentoProjeto: String;
    
    inicioProcessamentoClube: Date;
    fimProcessamentoClube: Date;
    duracaoProcessamentoClube: string;

    inicioProcessamentoSocio: Date;
    fimProcessamentoSocio: Date;
    duracaoProcessamentoSocio: string;

    inicioProcessamentoProjeto: Date;
    fimProcessamentoProjeto: Date;
    duracaoProcessamentoProjeto: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}