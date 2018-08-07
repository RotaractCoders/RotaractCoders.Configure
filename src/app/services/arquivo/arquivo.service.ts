import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ArquivoIncluir } from '../../models/inputs/arquivo/arquivo-incluir';
import { Config } from '../../config';

@Injectable()
export class ArquivoService {

  headers = new Headers();
  config: Config = new Config();

  constructor(private http: Http) {
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }

  listar() {
    console.log(this.headers);
    return this.http.get(this.config.apiUrl + 'api/Arquivo', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get(this.config.apiUrl + 'api/Arquivo/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: ArquivoIncluir) {
    return this.http.post(this.config.apiUrl + 'api/Arquivo', input, { headers: this.headers });
  }

  atualizar(input: ArquivoIncluir) {
    return this.http.put(this.config.apiUrl + 'api/Arquivo', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete(this.config.apiUrl + 'api/Arquivo?id=' + id, { headers: this.headers });
  }

}
