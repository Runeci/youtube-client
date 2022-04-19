import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app.component';

import { AuthComponent } from './pages/auth/auth.component';
import { PodcastPageComponent } from './pages/podcast-page/podcast-page.component';
import { PodcastListComponent } from './pages/podcast-page/podcast-list/podcast-list.component';
import { PodcastItemComponent } from './pages/podcast-page/podcast-list/podcast-item/podcast-item.component';
import { FilterComponent } from './shared/filter/filter.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './pages/podcast-page/filter-pipe/filter.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PodcastListComponent,
    PodcastItemComponent,
    AuthComponent,
    PodcastPageComponent,
    FilterComponent,
    HeaderComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
