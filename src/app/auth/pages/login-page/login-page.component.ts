import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
        ) {
    }

    public username: string = '';

    public onSubmit(): void {
        this.authService.logIn();
        this.router.navigate(['']);
    }
}
