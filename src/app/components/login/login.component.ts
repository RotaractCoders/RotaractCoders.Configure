import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Usuario } from '../../models/inputs/login/usuario';
import { Autenticacao } from '../../models/results/login/autenticacao';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {
  
  input = new Usuario();
  mensagemErro: string;

  constructor(private loginService:LoginService) {}

  ngOnInit() {
    this.loginService.logado().subscribe(x => {
      console.log(x);
      
      if (x == true) {
        location.href = "/";  
      }
    });
  }

  login() {
    this.loginService.login(this.input).subscribe(data => {

      let retorno: Autenticacao = data;
      
      if (!retorno.authenticated) {
        this.mensagemErro = retorno.message;
      } else {
        location.href = "/";
      }
    });
  }
}
