import { IterableDiffers, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, I18nSelectPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task-service/task.service';

//para la fecha en español
import localeEs from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';
import { FilterNamePipe } from './pipes/filter-name.pipe';


registerLocaleData(localeEs);


@NgModule({
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    FilterNamePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    TaskListComponent,
    TaskFormComponent
  ],
  providers:[
    TaskService,
    {provide:LOCALE_ID, useValue:'es-HN'}
  ]
})
export class TaskModule { }
