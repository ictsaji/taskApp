import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskDataFetchService } from 'src/app/task-data-fetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  taskForm!: FormGroup;
  taskId: any;
  tasks: any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskDataFetchService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    if ( this.taskService.latestTasks && this.taskService.latestTasks.length > 0) {
      //this.tasks = JSON.parse(JSON.stringify(this.taskService.latestTasks))
      this.tasks = [...this.taskService.latestTasks];
       console.log(this.tasks)
    }
    this.taskId = this.actRoute.snapshot.paramMap.get('id'); // Get the 'id' from the URL
    console.log(this.taskId)
    this.taskForm = this.fb.group({
      
      todo: ['', Validators.required],
      completed: ['', Validators.required],
      userId: ['5', Validators.required],
      priority: [''],
      dueDate: ['']
      
    });

    this.setValues();
  }

  onUpdate() {

    if (this.taskForm!.valid) {
      // Call the service to save the task
      let taskData = this.taskForm!.value;
      console.log(taskData); 

      let taskToModify = this.tasks.find( (task: any) => task.id == this.taskId);
       console.log(taskToModify)
       
        // Update the task properties with the values from taskData
      taskToModify.todo = taskData.todo;
      taskToModify.completed = taskData.completed;
      taskToModify.priority = taskData.priority;
      taskToModify.dueDate = taskData.dueDate;
       this.taskService.latestTasks = [...this.tasks];
       
      //this.taskService.fetchList(taskData); 
      this.router.navigate(['/tasks']);      
     }
  };


  setValues() {

    // Find the task with id match
    //const taskToModify = this.taskId ? this.tasks.find((task: { id: number }) => task.id === +this.taskId) : null;
    let taskToModify = this.tasks.find( (task: any) => task.id == this.taskId);
    console.log(taskToModify)
    // If the task exists, modify its property
    if (taskToModify) {
      //taskToModify.completed = true;
      this.taskForm.patchValue({
        todo: taskToModify.todo ? taskToModify.todo : '',
        completed: taskToModify.completed ? taskToModify.completed : '',
        userId: taskToModify.userId ? taskToModify.userId : '5', 
        priority: taskToModify.priority ? taskToModify.priority : '',
        dueDate: taskToModify.dueDate?  taskToModify.dueDate : ''
      });
    }

    console.log(this.tasks); // See updated tasks

  }

}
