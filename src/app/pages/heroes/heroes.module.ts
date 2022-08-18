import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesSearchComponent } from './search/heroes-search.component';
import { HeroesListComponent } from './list/heroes-list.component';
import { HeroesFormComponent } from './form/heroes-form.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroesFormComponent,
    HeroesSearchComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    
  ]
})
export class HeroesModule { }
