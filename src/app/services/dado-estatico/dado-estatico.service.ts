import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/RX";
import { DadoEstaticoIncluir } from '../../models/inputs/dados-estaticos/dado-estatico-incluir';

@Injectable()
export class DadoEstaticoService {

  constructor(private http: Http) { }

  listar() {
    return this.http.get('http://localhost:60342/api/DadoEstatico')
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/DadoEstatico/' + id)
      .map(res => res.json());
  }

  incluir(input: DadoEstaticoIncluir) {
    return this.http.post('http://localhost:60342/api/DadoEstatico', input);
  }
}
