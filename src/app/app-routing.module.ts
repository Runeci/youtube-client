import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastListComponent } from './pages/podcast-page/podcast-list/podcast-list.component';

const routes: Routes = [
  { path: 'list', component: PodcastListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
