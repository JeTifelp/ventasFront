import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from './components/project-list/project-list.component';
import {ProjectFormComponent} from './components/project-form/project-form.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'/projects',
  //   pathMatch:'full'
  // },
  // {
  //   path:'projects',
  //   component: ProjectListComponent
  // },
  // {
  //   path:'projects/add',
  //   component: ProjectFormComponent
  // },
  // {
  //   path:'projects/edit/:id',
  //   component: ProjectFormComponent
  // }
 {
  path: 'auth',
  loadChildren: ()=> import('./auth/auth.module').then( m => m.AuthModule )
 },
 {
    path:  'product',
    loadChildren: ()=> import('./pages/product/product.module').then( m => m.ProductModule)
  },
  {
    path:  'heroe',
    loadChildren: ()=> import('./pages/heroes/heroes.module').then( m => m.HeroesModule)
  },
  {
  path:'404',
  component: ErrorPageComponent
 },
 {
  path:'**',
  //component:ErrorPageComponent
  redirectTo: '404'
 }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//only forRoot in main component
  exports: [RouterModule]
})
export class AppRoutingModule { }
