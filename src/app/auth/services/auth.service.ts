import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public redirectUrl: string | null = null;

    constructor(private router: Router) {
    }

    public logIn(token: string): void {
        localStorage.setItem('token', this.generateFakeToken(token));
        this.router.navigate(['']);
    }

    public logOut(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    public get isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    private generateFakeToken(id: string): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const tokenLength = 7;
        const charactersLength = characters.length;

        let result = ' ';

        for (let i = 0; i < tokenLength; i += 1) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        result += id;
        return result;
    }
}
