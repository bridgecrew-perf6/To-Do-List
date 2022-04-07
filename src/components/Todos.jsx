import { useEffect } from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";

const Todos = ({ todos, handleContador, setTodos }) => {
  const eliminarTodo = (name) => {
    setTodos((prev) => prev.filter((item) => item.name !== name));
  };

  const updateDone = (name) => {
    const updateTodos = todos.map((item) =>
      item.name === name ? { ...item, done: !item.done } : item
    );
    setTodos(updateTodos);
  };

  useEffect(() => {
    handleContador();
  }, [todos]);

  return (
    <div className="todos__container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.name}
          todo={todo}
          eliminarTodo={eliminarTodo}
          changeTodo={updateDone}
        />
      ))}
    </div>
  );
};

export default Todos;
