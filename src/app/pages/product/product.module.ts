import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './list/product-list.component';
import { ProductFormComponent } from './form/product-form.component';
import { ProductSearchComponent } from './search/product-search.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [    
    ProductListComponent,
    ProductFormComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
