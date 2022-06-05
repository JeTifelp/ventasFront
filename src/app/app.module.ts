import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import para enlazar datos en formuario
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

//para los servicios
import  {ProjectService} from './services/project.service';
//tb importamos HttpClienteModule
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { contadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectFormComponent,
    ProjectListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    contadorModule
  ],
  providers: [   // los proveedores de servicio
  ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
