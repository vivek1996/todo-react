import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Input from '../../components/Input';
import { addTodo } from '../../pages/todo/todoSlice';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    dispatch(addTodo({ id: nanoid(), text: value }));
    setValue('');
  };
  return (
    <>
      <form onSubmit={formSubmit} className="form-container">
        <div className="input-container">
          <Input value={value} onChange={handleInputChange} />
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
