import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskDataFetchService } from 'src/app/task-data-fetch.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskDataFetchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      
      todo: ['', Validators.required],
      completed: ['', Validators.required],
      userId: ['5', Validators.required],
      priority: [''],
      dueDate: ['']
      
    });
  }

  onSubmit(): void {
    if (this.taskForm!.valid) {
      // Call the service to save the task
      let taskData = this.taskForm!.value;
      console.log(taskData)

      this.taskService.addTask(taskData).subscribe(
        {
          next: (response: any) => {
            console.log('Task saved successfully', response);
            taskData['id'] = response.id;
            this.taskService.modifyList(taskData);
            this.router.navigate(['/tasks']);
          },
          error: (error: any) => {
            console.error('Error saving task', error);
          },
          complete: () => {
            console.log('Task save operation completed');
          }
        });       
      
    }
  }

}
