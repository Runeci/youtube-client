import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PodcastListComponent } from './components/main-page/podcast-list/podcast-list.component';
import { PodcastItemComponent } from './components/main-page/podcast-list/podcast-item/podcast-item.component';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
    declarations: [
        MainPageComponent,
        PodcastListComponent,
        PodcastItemComponent,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,
        YoutubeRoutingModule,
    ],
    exports: [
        MainPageComponent,
    ],
})
export class YoutubeModule {
}
