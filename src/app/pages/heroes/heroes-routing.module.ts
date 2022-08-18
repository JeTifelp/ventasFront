import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesFormComponent } from './form/heroes-form.component';
import { HeroesListComponent } from './list/heroes-list.component';
import { HeroesSearchComponent } from './search/heroes-search.component';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: HeroesListComponent
      },
      {
        path: 'register',
        component: HeroesFormComponent
      },
      {
        path:  'edit/:id',
        component: HeroesFormComponent
      },
      {
        path:  'search',
        component: HeroesSearchComponent
      },
      
      {
        path: '**',
        redirectTo:'list'
      }

    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
