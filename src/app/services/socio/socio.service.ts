import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { SocioIncluir } from '../../models/inputs/socio/socio-incluir';
import { Config } from '../../config';

@Injectable()
export class SocioService {

  headers = new Headers();
  config: Config = new Config();
  
  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }
  
  listar() {
    return this.http.get(this.config.apiUrl + 'api/Socio', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get(this.config.apiUrl + 'api/Socio/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: SocioIncluir) {
    return this.http.post(this.config.apiUrl + 'api/Socio', input, { headers: this.headers });
  }

  atualizar(input: SocioIncluir) {
    return this.http.put(this.config.apiUrl + 'api/Socio', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete(this.config.apiUrl + 'api/Socio?id=' + id, { headers: this.headers });
  }
}
