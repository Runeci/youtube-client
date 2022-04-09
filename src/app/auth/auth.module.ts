import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

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
    ],
})
export class AuthModule {
}
