import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    activeFilter: 'all',
  },
  reducers: {
    // Reducer for adding an item to the array. Add item  to first to show the latest first
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
    // Toggle the completed state of a todo item
    toggleTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    // Filter out the deleted item from todos array
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    //  remove all completed in one go using filter function
    clearCompleted: (state) => {
      state.list = state.list.filter((todo) => !todo.completed);
    },
    //  set the filter type in state and filter out data in component
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

// Selector functions to get only particular piece of state
export const selectTodos = (state) => state.todos.list;
export const selectFilter = (state) => state.todos.activeFilter;

export default todoSlice.reducer;
