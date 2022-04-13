import InputText from './InputText'

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = ({ target }) => {
    setSearchValue(target.value)
  }

  return (
    <InputText
      placeholder='Buscar TO-DO'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  )
}

export default TodoSearch
