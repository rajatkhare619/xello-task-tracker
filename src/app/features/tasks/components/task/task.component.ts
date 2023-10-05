import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'xello-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task!: Task;

  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<string>();

  onDelete(id: string) {
    this.deleteTask.emit(id);
  }

  onEditTask(id: string) {
    this.editTask.emit(id);
  }
}
