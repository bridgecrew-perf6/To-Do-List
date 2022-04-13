import { BiTrashAlt } from 'react-icons/bi'
import './TodoDelete.css'

const TodoDelete = props => {
  return (
    <button className='todo__delete' {...props}>
      <BiTrashAlt />
    </button>
  )
}

export default TodoDelete
