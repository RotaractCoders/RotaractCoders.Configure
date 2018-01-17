import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/RX";
import { Incluir } from '../../models/inputs/evento/incluir';

@Injectable()
export class EventoService {

  constructor(private http: Http) { }
  
  listar() {
    return this.http.get('http://localhost:60342/api/Evento')
      .map(res => res.json());
  }

  buscar(id:string) {
    return this.http.get('http://localhost:60342/api/Evento/' + id)
      .map(res => res.json());
  }

  incluir(input: Incluir) {
    return this.http.post('http://localhost:60342/api/Evento', input);
  }

  atualizar(input: Incluir) {
    return this.http.put('http://localhost:60342/api/Evento', input);
  }

  deletar(id: string) {
    return this.http.delete('http://localhost:60342/api/Evento?id=' + id);
  }
}
