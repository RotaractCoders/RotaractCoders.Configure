export class Config {
    apiUrl: string = 'https://rotaract4430api.azurewebsites.net/';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
