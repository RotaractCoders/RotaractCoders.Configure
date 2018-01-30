import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { ClubeIncluir } from '../../models/inputs/clube/clube-incluir';

@Injectable()
export class ClubeService {

  headers = new Headers();

  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }
  
  listar() {
    return this.http.get('http://localhost:60342/api/Clube', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Clube/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: ClubeIncluir) {
    return this.http.post('http://localhost:60342/api/Clube', input, { headers: this.headers });
  }

  atualizar(input: ClubeIncluir) {
    return this.http.put('http://localhost:60342/api/Clube', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Clube?id=' + id, { headers: this.headers });
  }
}
