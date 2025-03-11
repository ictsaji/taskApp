import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { TaskDataFetchService } from '../task-data-fetch.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskDatePipe } from '../task-date.pipe';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    TaskDatePipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TaskDataFetchService]
})
export class TasksModule { }
