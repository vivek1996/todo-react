import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, selectTodos } from './todoSlice';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <ul>{todos && todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}</ul>
  );
};
export default TodoList;
