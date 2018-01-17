import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/RX";
import { FaqIncluir } from '../../models/inputs/faq/faq-incluir';

@Injectable()
export class FaqService {

  constructor(private http: Http) { }

  listar() {
    return this.http.get('http://localhost:60342/api/Faq')
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Faq/' + id)
      .map(res => res.json());
  }

  incluir(input: FaqIncluir) {
    return this.http.post('http://localhost:60342/api/Faq', input);
  }

  atualizar(input: FaqIncluir) {
    return this.http.put('http://localhost:60342/api/Faq', input);
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Faq?id=' + id);
  }
}
