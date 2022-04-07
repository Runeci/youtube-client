import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastListComponent } from './youtube/components/main-page/podcast-list/podcast-list.component';

const routes: Routes = [
    { path: 'list', component: PodcastListComponent },
    {
        path: 'youtube',
        loadChildren: () => import('./youtube/youtube.module')
            .then((m) => m.YoutubeModule),
    },
    {
        path: 'orders',
        loadChildren: () => import('./youtube/youtube.module')
            .then((m) => m.YoutubeModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
