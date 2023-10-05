import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import * as TaskActions from '../../store/actions/tasks.actions';
import {
  createTask,
  deleteTaskSuccess,
  editTaskSuccess,
} from '../../store/actions/tasks.actions';
import { Task } from '../../models/task';
@Injectable()
export class TasksEffects {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.getTasks),
      exhaustMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => TaskActions.getTasksSuccess({ payload: tasks })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.createTask),
      exhaustMap((action) =>
        this.taskService
          .createTask({ ...action.payload, id: crypto.randomUUID() })
          .pipe(
            map((newTask: Task) =>
              TaskActions.createTaskSuccess({ payload: newTask }),
            ),
            catchError(() => EMPTY),
          ),
      ),
    ),
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.updateTask),
      exhaustMap((action) =>
        this.taskService.editTask(action.payload.task).pipe(
          map((newTask: Task) =>
            TaskActions.editTaskSuccess({ payload: { task: newTask } }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      exhaustMap((action) =>
        this.taskService.deleteTask(action.payload.id).pipe(
          map((newTask: Task) =>
            TaskActions.deleteTaskSuccess({
              payload: { id: action.payload.id },
            }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
  ) {}
}
