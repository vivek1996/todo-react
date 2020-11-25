import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../pages/todo/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
