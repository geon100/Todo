import { JsonPipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { TodoServiceService } from '../service/todo-service.service';

// interface Task{
//   taskName:string,
//   status:boolean
// }

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{

  taskArray:any=[]
  
  constructor(private service: TodoServiceService){

  }

  ngOnInit():void{
    
      this.taskArray=this.service.getTask()
    
  }

  onSubmit(form:NgForm){
    let task={
      taskName:form.controls['task'].value,
      status:false
    }
    this.service.addTask(task)
    form.reset()
  }

  onDelete(i:number){
    this.taskArray.splice(i,1)
  }
  onComplete(i:number){
    this.taskArray[i].status=!this.taskArray[i].status
    let a=this.taskArray.splice(i,1)
    // alert(JSON.stringify(a))
    this.taskArray.push(a[0])
  }
}
