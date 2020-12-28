import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatCheckboxModule,
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [AddEditTaskComponent],
  declarations: [
    AppComponent,
    ToolbarComponent,
    TasksComponent,
    AddEditTaskComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
