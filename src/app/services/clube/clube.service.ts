import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { ClubeIncluir } from '../../models/inputs/clube/clube-incluir';
import { Config } from '../../config';

@Injectable()
export class ClubeService {

  headers = new Headers();
  config: Config = new Config();
  
  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }
  
  listar() {
    return this.http.get(this.config.apiUrl + 'api/Clube', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get(this.config.apiUrl + 'api/Clube/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: ClubeIncluir) {
    return this.http.post(this.config.apiUrl + 'api/Clube', input, { headers: this.headers });
  }

  atualizar(input: ClubeIncluir) {
    return this.http.put(this.config.apiUrl + 'api/Clube', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete(this.config.apiUrl + 'api/Clube?id=' + id, { headers: this.headers });
  }
}
