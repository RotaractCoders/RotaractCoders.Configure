export class Config {
    apiUrl: string = 'https://rotaract4430api.azurewebsites.net/';
    //apiUrl: string = 'http://localhost:60342/';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
