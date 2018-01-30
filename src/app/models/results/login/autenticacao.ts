export class Autenticacao {
    authenticated: boolean;
    created: Date;
    expiration: Date;
    accessToken: string
    message: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}