import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../../models/inputs/login/usuario';
import { Autenticacao } from '../../models/results/login/autenticacao';
import 'rxjs/add/operator/map';
import { Config } from '../../config';

@Injectable()
export class LoginService {

  config: Config = new Config();

  constructor(private http: Http) { }

  login(input: Usuario) {
    
    return this.http.post(this.config.apiUrl + 'api/Login', input)
      .map(res => {
        
        let retorno: Autenticacao = res.json();

        if (retorno.authenticated) {
          localStorage.setItem('autorizacao', JSON.stringify(retorno));
        }

        return retorno;
      });
  }

  logado() {
    return localStorage.getItem('autorizacao') != null;
  }

  logout() {
    localStorage.removeItem('autorizacao');
  }

}
