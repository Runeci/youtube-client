import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailsComponent } from './pages/details/details.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        data: {
            filterConfig: {
                sortFields: ['date', 'count'],
            },
        },
    },
    { path: 'details/:id', component: DetailsComponent },
    {path: 'admin', component: AdminPageComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class YoutubeRoutingModule {
}
