import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/RX";
import { Usuario } from '../../models/inputs/login/usuario';
import { Autenticacao } from '../../models/results/login/autenticacao';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(input: Usuario) {
    
    return this.http.post('http://localhost:60342/api/Login', input)
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
