import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDataFetchService {

  latestTasks: any[] = [];
  
  // Mock API URL for data fetch
  private apiUrl = 'https://dummyjson.com/todos'; 


  constructor( 
    private http: HttpClient
  ) { }


  // data fetch api function
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTask(task: any): Observable<any> {
    //task posting service will produce an err in the mock server, 
    // so modified the codes
    console.log( task)
    return this.http.post<any>( `${this.apiUrl}/add`, 
      {        
          todo: task.todo,          // Use the `todo` value from the task object
          completed: task.completed, // Use the `completed` value from the task object
          userId: task.userId,      // Use the `userId` value from the task object
      }
    );
    
  };

  modifyList(newTask: any) {
    this.latestTasks.push(newTask);

  }

  fetchList(listedTasks : any) {
    this.latestTasks = JSON.parse( JSON.stringify(listedTasks));

  }



}
