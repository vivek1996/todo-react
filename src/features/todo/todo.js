import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, selectTodos } from './todoSlice';
import AddTodo from '../../containers/AddTodo';
import styles from './todo.module.css';

export function Counter() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <AddTodo />
        <ul>
          {todos && todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
        </ul>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(removeTodo())}
        >
          -
        </button>
      </div>
    </div>
  );
}
