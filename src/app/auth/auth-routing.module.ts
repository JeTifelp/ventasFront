import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path:'**',
        redirectTo:'login'
      },
      // {
      //   path:  'dashboard',
      //   loadChildren: ()=> import('../pages/product/product.module').then( m => m.ProductModule)
      // },
    ]

  }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,

  ]
})
export class AuthRoutingModule { }
