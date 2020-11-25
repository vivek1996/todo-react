import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [
        ...state.list,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
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
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodos = (state) => state.todos.list;

export default todoSlice.reducer;
