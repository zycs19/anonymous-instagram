import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddEditPostComponent} from './post/add-edit-post/add-edit-post.component';
import {ShowPostComponent} from './post/show-post/show-post.component';

const routes: Routes = [
  {path:'timeline', component:ShowPostComponent},
  {path:'edit', component:AddEditPostComponent},
  {path:'compose', component:AddEditPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
