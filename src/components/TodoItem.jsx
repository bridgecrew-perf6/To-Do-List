import { useState } from 'react';
import './TodoItem.css';

import Priority from './Priority';
import Category from './Category';
import TodoName from './TodoName';
import TodoCheck from './TodoCheck';

const TodoItem = ({ todo, handleContador }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    todo.done = !checked;
    handleContador();
    console.log(todo);
  };

  return (
    <div className="todo__item-container">
      <Category category={todo.category}>{todo.category}</Category>
      <Priority priority={todo.priority}>{todo.priority}</Priority>
      <TodoCheck onChange={handleChange} checked={checked} />
      <TodoName>{todo.name}</TodoName>
    </div>
  );
};

export default TodoItem;
