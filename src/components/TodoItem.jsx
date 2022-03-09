import { useState } from 'react';
import './TodoItem.css';

import Priority from './Priority';
import Category from './Category';
import TodoName from './TodoName';
import TodoCheck from './TodoCheck';

const TodoItem = ({ todo }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    console.log(todo);
    setChecked(!checked);
  };
  todo.done = checked;
  console.log(todo);

  return (
    <div className="todo__item-container">
      <Category category={todo.category}>{todo.category}</Category>
      <Priority priority={todo.priority}>{todo.priority}</Priority>
      <TodoCheck onChange={handleChange} checked={todo.done} />
      <TodoName>{todo.name}</TodoName>
    </div>
  );
};

export default TodoItem;
