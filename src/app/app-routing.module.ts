// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorWorksComponent } from './author-works/author-works.component';


const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' }, // Điều hướng mặc định
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:key', component: AuthorDetailComponent },
  { path: 'authors/:key/works', component: AuthorWorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
