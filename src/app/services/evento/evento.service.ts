import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Incluir } from '../../models/inputs/evento/incluir';
import { Config } from '../../config';

@Injectable()
export class EventoService {

  headers = new Headers();
  config: Config = new Config();
  
  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }
  
  listar() {
    return this.http.get(this.config.apiUrl + 'api/Evento', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get(this.config.apiUrl + 'api/Evento/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: Incluir) {
    return this.http.post(this.config.apiUrl + 'api/Evento', input, { headers: this.headers });
  }

  atualizar(input: Incluir) {
    return this.http.put(this.config.apiUrl + 'api/Evento', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete(this.config.apiUrl + 'api/Evento?id=' + id, { headers: this.headers });
  }
}
