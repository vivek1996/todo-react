import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    activeFilter: 'all',
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
        ...state.list,
      ];
    },
    toggleTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    clearCompleted: (state) => {
      state.list = state.list.filter((todo) => !todo.completed);
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  clearCompleted,
  setFilter,
} = todoSlice.actions;

export const selectTodos = (state) => state.todos.list;
export const selectFilter = (state) => state.todos.activeFilter;

export default todoSlice.reducer;
