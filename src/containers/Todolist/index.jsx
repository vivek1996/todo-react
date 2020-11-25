import React from 'react';
import TodoItem from '../../components/TodoItem';
import './styles.scss';

const TodoList = ({ todos }) => {
  return (
    <ul className="list-container">
      {todos && todos.length ? (
        todos.map((todo) => <TodoItem key={todo.id} item={todo} />)
      ) : (
        <p>No Items!</p>
      )}
    </ul>
  );
};
export default TodoList;
