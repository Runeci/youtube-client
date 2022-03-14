import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './pages/auth/auth.component';
import { PodcastPageComponent } from './pages/podcast-page/podcast-page.component';
import { PodcastListComponent} from './pages/podcast-page/podcast-list/podcast-list.component';
import { PodcastItemComponent } from './pages/podcast-page/podcast-list/podcast-item/podcast-item.component';
import { FilterComponent } from './shared/filter/filter.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './shared/search/search.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PodcastListComponent,
    PodcastItemComponent,
    AuthComponent,
    PodcastPageComponent,
    FilterComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
