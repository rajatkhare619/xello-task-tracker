import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskMainComponent } from './components/task-main/task-main.component';

const routes: Routes = [{ path: '', component: TaskMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
