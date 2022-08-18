import { Component, HostBinding, OnInit } from '@angular/core';

//modelo
import{Project} from '../../models/Project';
import{ProjectService} from '../../services/project.service';
//rutas
import{Router} from '@angular/router';
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
proy: Project={
  id:0,
  name:'',
  description:'',
  createdAt: new Date(),
  updateAt: new Date()
};

 @HostBinding('class')classes='row';
  constructor( private  projectsService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }
  saveNewProject(){
    //console.log(this.proy);
    delete this.proy.createdAt;
    delete this.proy.updateAt;
    delete this.proy.id;
    this.projectsService.saveProject(this.proy).subscribe(
      res=>{
        //console.log(res);
        this.router.navigate(['/projects']);
      },
      err=> console.error(err)
    );

  }
}
