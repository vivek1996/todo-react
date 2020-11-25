import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, selectTodos } from './todoSlice';
import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/Todolist';
import styles from './todo.module.css';

export function Counter() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
