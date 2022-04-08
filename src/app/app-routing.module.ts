import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './youtube/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./youtube/youtube.module')
            .then((m) => m.YoutubeModule),
    },

    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
