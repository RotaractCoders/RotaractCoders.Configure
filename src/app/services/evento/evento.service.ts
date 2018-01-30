import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { Incluir } from '../../models/inputs/evento/incluir';

@Injectable()
export class EventoService {

  headers = new Headers();

  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }
  
  listar() {
    return this.http.get('http://localhost:60342/api/Evento', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Evento/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: Incluir) {
    return this.http.post('http://localhost:60342/api/Evento', input, { headers: this.headers });
  }

  atualizar(input: Incluir) {
    return this.http.put('http://localhost:60342/api/Evento', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Evento?id=' + id, { headers: this.headers });
  }
}
