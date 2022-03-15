import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PodcastPageComponent } from './pages/podcast-page/podcast-page.component';
import { PodcastListComponent } from './pages/podcast-page/podcast-list/podcast-list.component';
import { PodcastItemComponent } from './pages/podcast-page/podcast-list/podcast-item/podcast-item.component';
import { FilterComponent } from './shared/filter/filter.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './shared/search/search.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
