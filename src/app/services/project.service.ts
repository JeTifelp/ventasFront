import { Injectable } from '@angular/core';

//para poder pedir datos http
import { HttpClient } from '@angular/common/http';
//modelo
import {Project} from '../models/Project';

import { CityI,CountryI } from '../models/Suscripcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
//2:00:46
  API_URI= 'http://localhost:4000';
  //http://localhost:4000/projects

private countries:CountryI[]=[
  {
    id:1,
    name:'Brasil'
  },
  {
    id:2,
    name:'España'
  },
  {
    id:3,
    name:'Panama'
  },
  {
    id:4,
    name:'Chile'
  }
];
private cities: CityI[]=[
  {
    id:1,
    countryId:1,
    name:'Sao Paulo'
  },
  {
    id:2,
    countryId:1,
    name:'Brasilia'
  },
  {
    id:3,
    countryId:2,
    name:'Barcelona'
  },
  {
    id:4,
    countryId:2,
    name:'Madrid'
  },
  {
    id:5,
    countryId:3,
    name:'Pan a ma'
  },
  {
    id:6,
    countryId:4,
    name:'Iquique'
  },
];


  constructor( private http: HttpClient) { 

  }

  getProjects(){
    return this.http.get(`${this.API_URI}/projects`);
  }
  getProject(id: string){
    return this.http.get(`${this.API_URI}/projects/${id}`);
  }
  deleteProject(id: string){
    return this.http.delete(`${this.API_URI}/projects/${id}`);
  }
  saveProject( project : Project){
    return this.http.post(`${this.API_URI}/projects`, project);

  }
  updateProject(id: string, updateProject1 : Project):Observable<Project>{
    return this.http.put(`${this.API_URI}/projects/${id}`, updateProject1);

  }

  getCountries(): CountryI[]{
    return this.countries;
  }
  getCities():CityI[]{
    return this.cities;
  }

}
