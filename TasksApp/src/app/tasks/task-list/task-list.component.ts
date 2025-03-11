import { Component, OnInit } from '@angular/core';
import { TaskDataFetchService } from 'src/app/task-data-fetch.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [];

  constructor( 
    private taskService: TaskDataFetchService
  ) { }

  ngOnInit(): void {

    if ( this.taskService.latestTasks && this.taskService.latestTasks.length > 0) {
      //this.tasks = JSON.parse(JSON.stringify(this.taskService.latestTasks))
      this.tasks = [...this.taskService.latestTasks];
    
    } else{
      this.taskService.getTasks().subscribe((data: any) => {
        this.tasks = data.todos;
        this.taskService.fetchList(this.tasks);
        console.log(this.tasks)
      });

    }

   
  }


  trackByTaskId(index: number, task: any): number {
    return task.id;
  }

}
