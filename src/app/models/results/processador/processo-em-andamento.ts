import { Processo } from "./processo";

export class ProcessoEmAndamento {
    
    processo: Processo;
    
    quantidadeClubeFila: number;
    quantidadeSociosFila: number;
    quantidadeProjetosFila: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}