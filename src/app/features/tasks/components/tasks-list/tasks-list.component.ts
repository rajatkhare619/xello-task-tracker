import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { tasksFeature } from '../../store/reducers';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import * as TaskActions from '../../store/actions/tasks.actions';
@Component({
  selector: 'xello-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  host: { class: 'd-flex justify-content-evenly flex-wrap mt-4' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  @Input() tasks$?: Observable<Task[]>;
  @Output() updateTask = new EventEmitter<string>();
  @Output() taskDelete = new EventEmitter<string>();

  onEditTask(id: string) {
    this.updateTask.emit(id);
  }

  onDeleteTask(id: string) {
    this.taskDelete.emit(id);
  }

  trackFn(index: number, task: Task) {
    return task.id;
  }
}
