import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as TaskActions from '../../store/actions/tasks.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { tasksFeature } from '../../store/reducers';

@Component({
  selector: 'xello-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskMainComponent implements OnInit {
  taskList$: Observable<Task[]> = this.store.select(tasksFeature.selectTasks);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TaskActions.getTasks());
  }
  onTaskUpdate(id: string) {
    this.store.dispatch(TaskActions.editTask({ payload: { id } }));
  }

  onTaskDelete(id: string) {
    this.store.dispatch(TaskActions.deleteTask({ payload: { id } }));
  }
}
