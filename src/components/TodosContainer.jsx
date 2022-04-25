import { useState } from 'react'
import Contador from './Contador'
import Todos from './Todos'
import AddTodo from './AddTodo'
import ModalForm from './ModalForm'
import Popup from './Popup'
import useContador from '../hooks/useContador'
import TodoSearch from './TodoSearch'
import useLocalStorage from '../hooks/useLocalStorage'

const TodosContainer = () => {
  const { item: todos, saveItem: setTodos, loading, error } = useLocalStorage(
    'TODOS_V1',
    []
  )
  const [buttonForm, setButtonForm] = useState(false)
  const [contador, handleContador] = useContador(0, todos)

  const [searchValue, setSearchValue] = useState('')

  const submit = todo => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <Contador totalTodos={todos.length} completed={contador} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Todos
        searchValue={searchValue}
        todos={todos}
        handleContador={handleContador}
        setTodos={setTodos}
        loading={loading}
        error={error}
      />
      <div className='btn-container'>
        <AddTodo onClick={() => setButtonForm(true)} />
      </div>
      <Popup trigger={buttonForm} setTrigger={setButtonForm}>
        <ModalForm setTrigger={setButtonForm} submit={submit} />
      </Popup>
    </>
  )
}

export default TodosContainer
