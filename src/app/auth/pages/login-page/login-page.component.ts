import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    PasswordStrengthValidator,
} from '../../../shared/helpers/validators/password.validator';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    public username: string = '';

    public loginForm: FormGroup;

    public ngOnInit() {
        this.loginForm = new FormGroup(
            {
                email: new FormControl('', [Validators.required, Validators.email]),
                password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
            },
        );
    }

    public onSubmit(): void {
        this.authService.logIn();
        this.router.navigate(['']);
    }

    get f() {
        return this.loginForm.controls;
    }
}
