import { useEffect } from 'react'
import TodoItem from './TodoItem'
import './Todos.css'

const Todos = ({ todos, handleContador, setTodos, searchValue }) => {
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
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])

  useEffect(() => {
    handleContador()
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  let newTodos = []

  searchValue.length >= 1
    ? (newTodos = todos.filter(todo =>
        todo.name.toLowerCase().includes(searchValue.toLowerCase())
      ))
    : (newTodos = todos)

  return (
    <div className='todos__container'>
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
