import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectI, TaskI } from '../task.type';
import { TaskService } from '../task-service/task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
 public tasks: TaskI[]=[];
 public task:TaskI={
  name:'',
  done:false,
  projectId:0,
 }

 public task2:TaskI={
  name:'HeidyForm',
  done:false,
  projectId:10,
 }

  public selectedProject:ProjectI={id:0, name:''};
  public projects: ProjectI[]=[];


  @Input() personas:ProjectI[]=[];
  @Output() persona2: EventEmitter<TaskI>= new EventEmitter();

  constructor( private taskService:TaskService) { }

  ngOnInit(): void {
    this.projects=this.taskService.getProject();
   // console.log(this.projects);
  }
  agregar(){
    this.task.projectId= this.selectedProject.id;
    console.log(this.selectedProject.id)
    console.log('agregado',this.task);
    this.persona2.emit(this.task2);
  }

}
