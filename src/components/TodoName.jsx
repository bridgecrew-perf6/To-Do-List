import './TodoName.css';

const TodoName = ({ children }) => {
  return <p className="todo__title">{children}</p>;
};

export default TodoName;
