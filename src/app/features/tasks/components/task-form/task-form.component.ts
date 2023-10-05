import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../store/actions/tasks.actions';
import { filter, Subscription, take } from 'rxjs';
import { tasksFeature } from '../../store/reducers';
import { Status, Task } from '../../models/task';
import { updateTask } from '../../store/actions/tasks.actions';
@Component({
  selector: 'xello-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  host: {
    class: 'd-flex flex-column align-items-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit, OnDestroy {
  editedTask: Task | null = null;
  statusValues = Status;
  taskSubscription$!: Subscription;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.taskSubscription$ = this.store
      .select(tasksFeature.selectEditedTask)
      .pipe(filter(Boolean))
      .subscribe((editedTask) => {
        this.editedTask = editedTask;
        const { id, ...rest } = editedTask;
        this.taskForm.setValue(rest);
      });
  }

  taskForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    due: new FormControl(new Date(), {
      nonNullable: true,
      validators: [Validators.required],
    }),
    status: new FormControl(this.statusValues.OPEN, { nonNullable: true }),
  });

  submitTask() {
    if (this.editedTask) {
      this.store.dispatch(
        TaskActions.updateTask({
          payload: {
            task: { ...this.taskForm.value, id: this.editedTask!.id } as Task,
          },
        }),
      );
    } else {
      this.store.dispatch(
        TaskActions.createTask({
          payload: this.taskForm.value as Task,
        }),
      );
    }
    this.editedTask = null;
    this.taskForm.reset();
  }

  ngOnDestroy() {
    this.taskSubscription$.unsubscribe();
  }
}
