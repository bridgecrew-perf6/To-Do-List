import TodoItem from './TodoItem';
import './Todos.css';

const Todos = ({ todos, handleContador }) => {
  return (
    <div className="todos__container">
      {todos.map((todo) => (
        <TodoItem key={todo.name} handleContador={handleContador} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
