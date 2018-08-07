import { Headers } from '@angular/http';

export class Config {
    apiUrl: string = 'https://apirotaract4430.azurewebsites.net/';
    //apiUrl: string = 'http://localhost:60342/';
    headers = new Headers();

    constructor(values: Object = {}) {
        Object.assign(this, values);

        if (localStorage.getItem('autorizacao') != null) {
            this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
        }
        
        this.headers.append('Content-Type', 'application/json');
    }
}
