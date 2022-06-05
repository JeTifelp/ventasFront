import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from './components/project-list/project-list.component';
import {ProjectFormComponent} from './components/project-form/project-form.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/projects',
    pathMatch:'full'
  },
  {
    path:'projects',
    component: ProjectListComponent
  },
  {
    path:'projects/add',
    component: ProjectFormComponent
  },
  {
    path:'projects/edit/:id',
    component: ProjectFormComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
