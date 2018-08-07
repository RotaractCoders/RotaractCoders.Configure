import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../../models/inputs/login/usuario';
import { Autenticacao } from '../../models/results/login/autenticacao';
import 'rxjs/add/operator/map';
import { Config } from '../../config';
import { Observable } from '../../../../node_modules/rxjs';
import 'rxjs/add/operator/catch';

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
    return this.http.get(this.config.apiUrl + 'api/Login/Autenticado', { headers: this.config.headers })
      .map(
        r => {
            return true;
        })
      .catch((error: any) => {  
        return Observable.of(false);
      });
  }

  logout() {
    localStorage.removeItem('autorizacao');
  }

}
