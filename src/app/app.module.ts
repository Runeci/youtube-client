import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/components/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core /core.module';
import { PageNotFoundComponent } from './youtube/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {

}
