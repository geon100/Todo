import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  taskArray:any=[]
  constructor() { }


  getTask():Observable<any>{
    return this.taskArray
  }

  addTask(task:any){
    this.taskArray.push(task)
    console.log(task)
  }
}
