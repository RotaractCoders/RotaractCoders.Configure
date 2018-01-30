import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { DadoEstaticoIncluir } from '../../models/inputs/dados-estaticos/dado-estatico-incluir';

@Injectable()
export class DadoEstaticoService {

  headers = new Headers();

  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }

  listar() {
    return this.http.get('http://localhost:60342/api/DadoEstatico', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/DadoEstatico/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: DadoEstaticoIncluir) {
    return this.http.post('http://localhost:60342/api/DadoEstatico', input, { headers: this.headers });
  }
}
