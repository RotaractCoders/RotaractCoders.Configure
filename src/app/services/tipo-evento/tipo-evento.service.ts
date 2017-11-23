import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/RX";
import { Lista } from '../../models/results/tipo-evento/lista';

@Injectable()
export class TipoEventoService {

  constructor(private http: Http) { }
  
    listar() {
      return this.http.get('http://localhost:60342/api/TipoEvento')
        .map(res => res.json())
        .catch(this.handleError);
    }
  
    incluir(descricao: string) {
      return this.http.post('http://localhost:60342/api/TipoEvento', {descricao: descricao})
        .map(res => res.json())
        .catch(this.handleError);
    }

    deletar(id: string) {
      return this.http.delete('http://localhost:60342/api', { params: {id: id} })
        .map(res => res.json())
        .catch(this.handleError);
    }
  
    private handleError(error: any) {
      console.error(error);
      return Promise.reject(error);
    }
}
