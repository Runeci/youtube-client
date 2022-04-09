import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    constructor(
        private authService: AuthService,
        ) {
    }

    public username: string = '';

    public onSubmit(): void {
        this.authService.logIn(this.username);
    }
}
