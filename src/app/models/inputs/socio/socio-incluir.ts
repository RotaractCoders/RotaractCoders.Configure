import { CargoSocio } from '../socio/cargo-socio';

export class SocioIncluir {
    rowKey: string;
    nome: string;
    apelido: string;
    dataNascimento: string;
    email: string;
    facebook: string;
    instagram: string;
    celular: string;
    clube: string;
    foto: string;
    cargos: CargoSocio[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}