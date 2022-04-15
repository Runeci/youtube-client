import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }

    public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkLogin();
    }

    private checkLogin(): true | UrlTree {
        console.log(this.authService.isLoggedIn.value);
        if (this.authService.isLoggedIn.value) {
            return true;
        }

        return this.router.parseUrl('/login');
    }
}
