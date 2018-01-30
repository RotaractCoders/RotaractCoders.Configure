import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/RX";
import { ArquivoIncluir } from '../../models/inputs/arquivo/arquivo-incluir';

@Injectable()
export class ArquivoService {

  headers = new Headers();

  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }

  listar() {
    console.log(this.headers);
    return this.http.get('http://localhost:60342/api/Arquivo', { headers: this.headers })
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Arquivo/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  incluir(input: ArquivoIncluir) {
    return this.http.post('http://localhost:60342/api/Arquivo', input, { headers: this.headers });
  }

  atualizar(input: ArquivoIncluir) {
    return this.http.put('http://localhost:60342/api/Arquivo', input, { headers: this.headers });
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Arquivo?id=' + id, { headers: this.headers });
  }

}
