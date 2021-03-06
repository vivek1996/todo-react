import React from 'react';
import { toggleTodo, removeTodo } from '../../pages/todo/todoSlice';
import { useDispatch } from 'react-redux';
import DeleteIcon from '../../assets/delete.svg';
import './styles.scss';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  // console.log(item);
  return (
    <li className="list-item">
      <div className="round">
        <input
          type="checkbox"
          checked={item.completed}
          id={`checkbox_${item.id}`}
          onChange={() => dispatch(toggleTodo({ id: item.id }))}
        />
        <label htmlFor={`checkbox_${item.id}`}></label>
      </div>
      <p className={item.completed ? 'completed' : ''}>{item.text}</p>
      <button
        className="button"
        onClick={() => dispatch(removeTodo({ id: item.id }))}
      >
        <img alt="delete" src={DeleteIcon} />
      </button>
    </li>
  );
};

export default TodoItem;
