import { BiTrashAlt } from "react-icons/bi";

const TodoDelete = (props) => {
  return (
    <button {...props}>
      <BiTrashAlt />
    </button>
  );
};

export default TodoDelete;
