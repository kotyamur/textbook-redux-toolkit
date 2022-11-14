// import { nanoid } from 'nanoid';
import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/deleteTask', text => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});
export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');
export const setStatusFilter = createAction('filters/setStatusFilter');
