import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { ProjectI, TaskI } from '../task.type';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  personas:ProjectI[]=
    [
    {id:1,name:'jjjj'},
    {id:2,name:'tttt'}
    ];
  fecha: Date=  new Date();
  tasksList: any= [];  
  filterPost: string='';
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTTasks();
    // this.tasksList.map((re:any) => {
    //   re.checked = false;
      
    // });
    console.log('map   '+ this.tasksList);
    
  }
  getTTasks(){
    this.taskService.getTTasks().subscribe(
      res=>{
      this.tasksList= res;

      this.tasksList.map((re:any) => {
      re.checked = false;
      re.checked2=false;
      re.checked3=false;      
      });

      console.log(this.tasksList);
      },
      err=> console.log(err)
    );
  }
  agregarPersonas(arg: TaskI){
    //console.log('componente output  ',arg);
   let  per: ProjectI={
     id:arg.projectId,
     name:arg.name

   }
    this.personas.push(per);
  }
  
  checkAll(event:any){
    //console.log(event.checked);
    this.tasksList.forEach((element:any) => 
      {
        element.checked =  event.checked;
        element.checked2 =  event.checked;
        element.checked3 =  event.checked;
      }    
    );
  }
  isCheckAll(){
    return this.tasksList.every((re:any) => re.checked);
  }
  save(){
    let array= this.tasksList.filter((x:any) => x.checked===true);
    array.forEach((element:any) => {
      console.log(element);
    });
  }

  checkAlmuezo(event:any,i:number){
    console.log(event.checked+' index : ' + i);
    
    this.tasksList[i].checked2 = event.checked;
    this.tasksList[i].checked3 = event.checked;
    console.log(this.tasksList[i].checked2);
    console.log(this.tasksList[i].checked3);
  } 

  isCheckAllfila(i:number){
    return (this.tasksList[i].checked2 && this.tasksList[i].checked3) ? this.tasksList[i].checked : null;
    //return this.tasksList.every((re:any) => re.checked);
  }

}
