import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskDatePipe } from './task-date.pipe';
import { HighlightPriorityDirective } from './highlight-priority.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskDatePipe,
    HighlightPriorityDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
