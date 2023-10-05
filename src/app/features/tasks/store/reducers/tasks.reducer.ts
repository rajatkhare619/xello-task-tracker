import { Task } from '../../models/task';
import { createFeature, createReducer, on } from '@ngrx/store';
import {
  createTaskSuccess,
  deleteTaskSuccess,
  editTask,
  editTaskSuccess,
  getTasksSuccess,
} from '../actions';
interface State {
  tasks: Task[];
  editedTask: Task | null;
}

const initialState: State = {
  tasks: [],
  editedTask: null,
};

export const tasksFeature = createFeature({
  name: 'tasks',
  reducer: createReducer(
    initialState,
    on(getTasksSuccess, (state, action) => ({
      ...state,
      tasks: action.payload,
    })),
    on(createTaskSuccess, (state, action) => ({
      ...state,
      tasks: [...state.tasks, action.payload],
    })),
    on(editTaskSuccess, (state, action) => {
      const oldTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.task.id,
      );
      if (state.tasks[oldTaskIndex]) {
        const tasks = [...state.tasks];
        tasks[oldTaskIndex] = action.payload.task;
        return { ...state, tasks };
      }
      return state;
    }),
    on(editTask, (state, action) => ({
      ...state,
      editedTask: state.tasks.find((task) => task.id === action.payload.id)!,
    })),
    on(deleteTaskSuccess, (state, action) => ({
      ...state,
      tasks: [...state.tasks.filter((task) => task.id !== action.payload.id)],
    })),
  ),
});

export const { name, reducer, selectTasks, selectEditedTask } = tasksFeature;
