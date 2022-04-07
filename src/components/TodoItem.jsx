import { useState } from "react";
import "./TodoItem.css";

import Priority from "./Priority";
import Category from "./Category";
import TodoName from "./TodoName";
import TodoCheck from "./TodoCheck";
import TodoDelete from "./TodoDelete";

const TodoItem = ({ todo, eliminarTodo, changeTodo }) => {
  const { name, priority, category, done } = todo;
  const [checked, setChecked] = useState(done);

  const handleChange = () => {
    changeTodo(name);
    setChecked(!done);
  };

  return (
    <div className="todo__item-container">
      <Category category={category}>{category}</Category>
      <Priority priority={priority}>{priority}</Priority>
      <TodoCheck onChange={handleChange} checked={checked} />
      <TodoName>{name}</TodoName>
      <TodoDelete onClick={() => eliminarTodo(name)} />
    </div>
  );
};

export default TodoItem;
