import './TodoCheck.css';

const TodoCheck = (props) => {
  return (
    <input
      className="todo__check"
      type="checkbox"
      name="checkbox"
      id="checkbox"
      {...props}
    />
  );
};

export default TodoCheck;
