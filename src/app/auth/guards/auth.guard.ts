import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate, Router,
    RouterStateSnapshot,
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

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const { url } = state;
        return this.checkLogin(url);
    }

    private checkLogin(url: string): true | UrlTree {
        if (this.authService.isLoggedIn) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Redirect to the login page
        return this.router.parseUrl('/login');
    }
}
