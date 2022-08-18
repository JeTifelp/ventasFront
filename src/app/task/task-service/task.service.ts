import { Injectable } from '@angular/core';
import { ProjectI, TaskI } from '../task.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private API_URI= 'http://localhost:4000';
 private projects:ProjectI[]=[
    {    id:1,    name:'project1'  },
    {    id:2,    name:'project2'  },
    {    id:3,    name:'project3'  },
    {    id:4,    name:'project4'  }
  ];
private tasks: TaskI[]=[
  { name:'task1',done:false, projectId: 1  },
  { name:'task2',done:false, projectId: 1  },
  { name:'task3',done:false, projectId: 2  },
];

constructor(private http:HttpClient){}
getTTasks(){
  return this.http.get(`${this.API_URI}/tasks`);
}

getProject(): ProjectI[]{
    return this.projects;
  }
getTasks():TaskI[]{
  return this.tasks;
}
createTask(task:TaskI):void{
  this.tasks.push(task);
}

}
