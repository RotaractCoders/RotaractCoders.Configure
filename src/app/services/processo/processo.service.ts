import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ProcessoService {

  headers = new Headers();
  config: Config = new Config();
  
  constructor(private http: Http) { 
    this.headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('autorizacao')).accessToken);
    this.headers.append('Content-Type', 'application/json');
  }

  obterProcessoEmAndamento() {
    return this.http.get(this.config.apiUrl + 'api/Processador/ProcessoEmAndamento', { headers: this.headers })
      .map(res => res.json());
  }

  listarProcessamentosFinalizados() {
    return this.http.get(this.config.apiUrl + 'api/Processador/ListarProcessamentoFinalizados', { headers: this.headers })
      .map(res => res.json());
  }
}
