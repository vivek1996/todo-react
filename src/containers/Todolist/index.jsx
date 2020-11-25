import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, selectTodos } from '../../pages/todo/todoSlice';
import TodoItem from '../../components/TodoItem';
import './styles.scss';

const TodoList = () => {
  const todos = useSelector(selectTodos);
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
