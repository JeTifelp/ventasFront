import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasureRoutingModule } from './measure-routing.module';
import { MeasureFormComponent } from './form/measure-form.component';
import { MeasureListComponent } from './list/measure-list.component';



@NgModule({
  declarations: [
    MeasureFormComponent,
    MeasureListComponent
  ],
  imports: [
    CommonModule,
    MeasureRoutingModule
  ]
})
export class MeasureModule { }
