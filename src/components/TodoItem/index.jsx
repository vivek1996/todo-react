import React from 'react';
import { toggleTodo, removeTodo } from '../../pages/todo/todoSlice';
import { useDispatch } from 'react-redux';
import './styles.scss';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  return (
    <li className="list-item">
      <div class="round">
        <input
          type="checkbox"
          id={`checkbox_${item.id}`}
          onChange={() => dispatch(toggleTodo({ id: item.id }))}
        />
        <label for={`checkbox_${item.id}`}></label>
      </div>
      <p className={item.completed ? 'completed' : ''}>{item.text}</p>
      <button
        className="button"
        onClick={() => dispatch(removeTodo({ id: item.id }))}
      >
        -
      </button>
    </li>
  );
};

export default TodoItem;
