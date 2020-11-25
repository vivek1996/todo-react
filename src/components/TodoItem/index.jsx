import React from 'react';

const TodoItem = ({ item }) => {
  console.log(item);
  return <li>{item.text}</li>;
};

export default TodoItem;
