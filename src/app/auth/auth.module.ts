import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        LoginPageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatOptionModule,
        MatSelectModule,
        MatCardModule,
        AuthRoutingModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
})
export class AuthModule {
}
