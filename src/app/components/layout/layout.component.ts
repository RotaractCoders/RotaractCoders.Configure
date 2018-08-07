import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [
    LoginService
  ]
})
export class LayoutComponent implements OnInit {

  mostrarMenu: boolean = true;

  constructor(
    private loginService: LoginService) { }

  ngOnInit() {

    if (location.href.indexOf('login') > 0) {
      this.mostrarMenu = false;
    }
  }


  logout() {
    this.loginService.logout();
    this.mostrarMenu = false;
    location.href = 'login';
  }
}
