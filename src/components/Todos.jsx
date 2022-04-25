import { useEffect } from 'react'
import Spinner from './Spinner'
import TodoItem from './TodoItem'
import './Todos.css'

const Todos = ({
  todos,
  handleContador,
  setTodos,
  searchValue,
  loading,
  error
}) => {
  const eliminarTodo = name => {
    setTodos(prev => prev.filter(item => item.name !== name))
  }

  const updateDone = name => {
    const updateTodos = todos.map(item =>
      item.name === name ? { ...item, done: !item.done } : item
    )
    setTodos(updateTodos)
  }

  useEffect(() => {
    handleContador()
  }, [todos])

  let newTodos = []

  searchValue.length >= 1
    ? (newTodos = todos.filter(todo =>
        todo.name.toLowerCase().includes(searchValue.toLowerCase())
      ))
    : (newTodos = todos)

  return (
    <div className='todos__container'>
      {error && <p>Hubo un error</p>}
      {loading && <Spinner />}
      {!loading && newTodos.length === 0 && <p>¡Crea tu primer TODO!</p>}
      {newTodos.map(todo => (
        <TodoItem
          key={todo.name}
          todo={todo}
          eliminarTodo={eliminarTodo}
          changeTodo={updateDone}
        />
      ))}
    </div>
  )
}

export default Todos
