import TodoItem from './TodoItem';
import './Todos.css';

const Todos = ({ todos }) => {
  return (
    <div className="todos__container">
      {todos.map((todo) => (
        <TodoItem key={todo.name} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
