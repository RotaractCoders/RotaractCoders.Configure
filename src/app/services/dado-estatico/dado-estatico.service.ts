import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DadoEstaticoIncluir } from '../../models/inputs/dados-estaticos/dado-estatico-incluir';
import { Config } from '../../config';

@Injectable()
export class DadoEstaticoService {

  headers = new Headers();
  config: Config = new Config();
  
  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }

  listar() {
    return this.http.get(this.config.apiUrl + 'api/DadoEstatico', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get(this.config.apiUrl + 'api/DadoEstatico/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: DadoEstaticoIncluir) {
    return this.http.post(this.config.apiUrl + 'api/DadoEstatico', input, { headers: this.headers });
  }
}
