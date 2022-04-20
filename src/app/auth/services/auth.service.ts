import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isLoggedIn: BehaviorSubject<boolean>;

    constructor(private router: Router) {
        this.isLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
    }

    public logIn(): void {
        localStorage.setItem('token', this.generateFakeToken());
        this.isLoggedIn.next(true);
    }

    public logOut(): void {
        localStorage.removeItem('token');
        this.isLoggedIn.next(false);
        this.router.navigate(['/login']);
    }

    private generateFakeToken(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const tokenLength = 7;
        const charactersLength = characters.length;

        let result = '';

        for (let i = 0; i < tokenLength; i += 1) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
}
