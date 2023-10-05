import { createSelector } from '@ngrx/store';
import { tasksFeature } from '../reducers/tasks.reducer';

export const selectBookListPageViewModel = createSelector(
  tasksFeature.selectTasks,
  tasksFeature.selectLoading,
  (books, loading) => ({ books, loading }),
);
