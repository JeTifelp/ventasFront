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

import { CommonModule2 } from './common/common.module';
import { TaskModule } from './task/task.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './pages/heroes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ErrorPageComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    contadorModule,
    CommonModule2,
    TaskModule,
    BrowserAnimationsModule
  ],
  providers: [   // los proveedores de servicio
  ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
