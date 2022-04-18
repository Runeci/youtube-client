import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PodcastListComponent } from './pages/main-page/podcast-list/podcast-list.component';
import { PodcastItemComponent } from './pages/main-page/podcast-list/podcast-item/podcast-item.component';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
        MainPageComponent,
        PodcastListComponent,
        PodcastItemComponent,
        FilterPipe,
        DetailsComponent,
        AdminPageComponent,
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
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    exports: [
        MainPageComponent,
    ],
})
export class YoutubeModule {
}
