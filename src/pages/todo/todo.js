import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, selectTodos } from './todoSlice';
import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/Todolist';
import './styles.scss';

const Container = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="title">My List</h1>
      <div className="card">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};
export default Container;