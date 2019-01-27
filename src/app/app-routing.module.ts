import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/movielist', pathMatch: 'full' },
  { path: 'movielist', component: MovieListComponent, data: {animation: 'MovieListPage'} },
  { path: 'moviedetail/:id', component: MovieDetailComponent, data: {animation: 'MovieDetailPage'} },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
