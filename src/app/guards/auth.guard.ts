import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.loginService.logado()
            .map(r => {
                if (r == true) {
                    return true;
                }
                
                if (state.url.indexOf("login") == -1) {
                    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
                    window.location.reload();
                }
                
                return false;
            });
    }
}