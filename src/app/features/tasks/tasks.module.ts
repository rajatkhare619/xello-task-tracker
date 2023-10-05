import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { tasksFeature } from './store/reducers';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './components/task/task.component';
import { MatCardModule } from '@angular/material/card';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { TaskMainComponent } from './components/task-main/task-main.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskComponent,
    TasksListComponent,
    TaskMainComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    StoreModule.forFeature(tasksFeature),
    EffectsModule.forFeature(TasksEffects),
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatSelectModule,
    HttpClientModule,
    TasksRoutingModule,
  ],
  exports: [TaskFormComponent, TasksListComponent],
})
export class TasksModule {}
