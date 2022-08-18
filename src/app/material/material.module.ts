import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule
  ]
  
})
export class MaterialModule { }
