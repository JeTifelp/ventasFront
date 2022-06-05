import { Component, OnInit } from '@angular/core';

// par obtener datos del servicio importamos el servicio
import {ProjectService} from '../../services/project.service';
import { Suscripcion, CityI,CountryI } from 'src/app/models/Suscripcion';
import { ANESTHESIA_LIST } from 'src/app/common/commonType';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

 projectsList: any= [];
// projectsList:string[];


  constructor( private projectsServices:ProjectService ) { 
 //   this.projectsList=["comer","programar","dormir"];
  }

      
//   <select [(ngModel)]="selectedCountry.id">
//   <option  *ngFor="let country of countries" values="{{country.id}}">
//       {{country.name}}>
//   </option>
// </select>
  public selectedCountry:CountryI={id:0, name:''};
  public countries: CountryI[]=[];
  public cities: CityI[]=[];
  optcities:string='';

  ANESTHESIA_LIST=ANESTHESIA_LIST;
  typeAnesthesia:string[]=[];

  ngOnInit(): void {
   // this.cities=this.projectsServices.getCities();
    this.countries=this.projectsServices.getCountries();
    this.getProjects();
    
  }
  onSelect(event:any): void {    
    const value = event.value;   
   console.log('valor 1: '+this.selectedCountry.id);
   this.cities= this.projectsServices.getCities().filter(item=>item.countryId==value);
   console.log('valor 2: '+this.optcities)
  }
  save(){
    this.typeAnesthesia=this.ANESTHESIA_LIST.filter(x=> x.isAssing== true).map(y=> {return y.name;});
    console.log(this.typeAnesthesia);
  }
  getProjects(){
    this.projectsServices.getProjects().subscribe(
      res=>{
        this.projectsList= res;
  
        console.log(res);
      },
      err=> console.log(err)
    );
  }
  editProject(id: string){
    alert('Edit project: '+id);
   // this.projectsServices.updateProject(id);
  }
  deleteProject(id:string){
    alert('eliminar project: '+id);
    this.projectsServices.deleteProject(id).subscribe(
      res=>{
        console.log(res);
        this.getProjects();        
      },
      err=> console.log(err)
    );
  }

}
