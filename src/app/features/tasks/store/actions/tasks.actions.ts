import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task';

export const getTasks = createAction('[Tasks] Get tasks');
export const getTasksSuccess = createAction(
  '[Tasks] Get tasks success',
  props<{ payload: Task[] }>(),
);
export const createTask = createAction(
  '[Tasks] Create a task',
  props<{ payload: Omit<Task, 'id'> }>(),
);

export const createTaskSuccess = createAction(
  '[Tasks] Task creation successful',
  props<{ payload: Task }>(),
);

export const updateTask = createAction(
  '[Tasks] Update a task',
  props<{ payload: { task: Task } }>(),
);

export const editTaskSuccess = createAction(
  '[Tasks] Task edit successful',
  props<{ payload: { task: Task } }>(),
);

export const editTask = createAction(
  '[Tasks] Edit a task',
  props<{ payload: { id: string } }>(),
);
export const deleteTask = createAction(
  '[Tasks] Delete a task',
  props<{ payload: { id: string } }>(),
);

export const deleteTaskSuccess = createAction(
  '[Tasks] Task deletion successful',
  props<{ payload: { id: string } }>(),
);
