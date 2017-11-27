import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/RX";

@Injectable()
export class TipoEventoService {

  constructor(private http: Http) { }
  
    listar() {

      console.log("a");

      return this.http.get('http://localhost:60342/api/TipoEvento')
        .map(res => res.json());
    }
  
    incluir(descricao: string) {

      return this.http.post('http://localhost:60342/api/TipoEvento', { descricao: descricao });
    }

    deletar(ida: string) {
      return this.http.delete('http://localhost:60342/api/TipoEvento', {params: {id: ida}});
    }
}
