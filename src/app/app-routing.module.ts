import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './youtube/pages/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./youtube/youtube.module')
            .then((m) => m.YoutubeModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module')
            .then((m) => m.AuthModule),
    },
    // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
