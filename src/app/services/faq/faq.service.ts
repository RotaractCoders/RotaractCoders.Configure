import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { FaqIncluir } from '../../models/inputs/faq/faq-incluir';

@Injectable()
export class FaqService {

  headers = new Headers();

  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }

  listar() {
    return this.http.get('http://localhost:60342/api/Faq', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Faq/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: FaqIncluir) {
    return this.http.post('http://localhost:60342/api/Faq', input, { headers: this.headers });
  }

  atualizar(input: FaqIncluir) {
    return this.http.put('http://localhost:60342/api/Faq', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Faq?id=' + id, { headers: this.headers });
  }
}
