import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     // Индикатор загрузки
//     dispatch(fetchingInProgress());
//     // HTTP-запрос
//     const response = await axios.get('/tasks');
//     // Обработка данных
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обработка ошибки
//     dispatch(fetchingError(e.message));
//   }
// };

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
