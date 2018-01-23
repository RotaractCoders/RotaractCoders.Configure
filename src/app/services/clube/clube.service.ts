import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/RX";
import { ClubeIncluir } from '../../models/inputs/clube/clube-incluir';

@Injectable()
export class ClubeService {

  constructor(private http: Http) { }
  
  listar() {
    return this.http.get('http://localhost:60342/api/Clube')
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Clube/' + id)
      .map(res => res.json());
  }

  incluir(input: ClubeIncluir) {
    return this.http.post('http://localhost:60342/api/Clube', input);
  }

  atualizar(input: ClubeIncluir) {
    return this.http.put('http://localhost:60342/api/Clube', input);
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Clube?id=' + id);
  }
}
