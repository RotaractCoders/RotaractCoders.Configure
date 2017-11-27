import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/RX";
import { Incluir } from '../../models/inputs/evento/incluir';

@Injectable()
export class EventoService {

  constructor(private http: Http) { }
  
    listar() {
      return this.http.get('http://localhost:60342/api/Evento')
        .map(res => res.json())
        .catch(this.handleError);
    }

    buscar(id:number) {
      return this.http.get('http://localhost:60342/api/Evento/' + id)
        .map(res => res.json())
        .catch(this.handleError);
    }
  
    incluir(input: Incluir) {
      return this.http.post('http://localhost:60342/api/Evento', input)
        .map(res => res.json())
        .catch(this.handleError);
    }

    deletar(id: string) {
      return this.http.delete('http://localhost:60342/api/Evento', { params: {id: id} })
        .map(res => res.json())
        .catch(this.handleError);
    }
  
    private handleError(error: any) {
      console.error(error);
      return Promise.reject(error);
    }

}
