import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { SocioIncluir } from '../../models/inputs/socio/socio-incluir';

@Injectable()
export class SocioService {

  headers = new Headers();

  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }
  
  listar() {
    return this.http.get('http://localhost:60342/api/Socio', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Socio/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: SocioIncluir) {
    return this.http.post('http://localhost:60342/api/Socio', input, { headers: this.headers });
  }

  atualizar(input: SocioIncluir) {
    return this.http.put('http://localhost:60342/api/Socio', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Socio?id=' + id, { headers: this.headers });
  }
}
