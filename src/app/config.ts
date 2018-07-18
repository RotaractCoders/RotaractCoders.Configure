export class Config {
    apiUrl: string = 'https://apirotaract4430.azurewebsites.net/';
    //apiUrl: string = 'http://localhost:60342/';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
