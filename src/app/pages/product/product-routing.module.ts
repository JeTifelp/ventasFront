import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../heroes/home/home.component';
import { ProductFormComponent } from './form/product-form.component';
import { ProductListComponent } from './list/product-list.component';
import { ProductSearchComponent } from './search/product-search.component';
const routes : Routes = [
  {
    path: '',    
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'register',
        component: ProductFormComponent
      },
      {
        path:  'edit/:id',
        component: ProductFormComponent
      },
      {
        path:  'search',
        component: ProductSearchComponent
      },
      {
        path: '**',
        redirectTo:'list'
      }

    ]
  }
]


@NgModule({
  
  imports: [
    RouterModule.forChild(routes)    
  ],
  exports:[
    RouterModule
  ]

})
export class ProductRoutingModule { }
