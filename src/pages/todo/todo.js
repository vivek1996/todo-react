import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, selectFilter, clearCompleted } from './todoSlice';
import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/Todolist';
import Filters from '../../components/Filters';
import './styles.scss';

const Container = () => {
  const todos = useSelector(selectTodos);
  const filterSelected = useSelector(selectFilter);
  const dispatch = useDispatch();

  // Get only todos based on the filter selected .
  const filteredTodos =
    filterSelected === 'all'
      ? todos
      : filterSelected === 'active'
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  const remainingItems = todos.filter((todo) => !todo.completed).length;

  // console.log({ filterSelected, remainingItems });

  return (
    <div className="container">
      <h1 className="title">My List</h1>
      <hr />
      <div className="filters-container">
        <p>{remainingItems} Items Remaining</p>
        <div className="filters">
          <Filters />
        </div>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed
        </button>
      </div>
      <div className="card">
        <AddTodo />
        <TodoList todos={filteredTodos} />
      </div>
    </div>
  );
};
export default Container;
