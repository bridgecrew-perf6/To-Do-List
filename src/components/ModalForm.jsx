import useTodo from '../hooks/useTodo';
import Button from './Button';
import InputRadio from './InputRadio';
import InputText from './InputText';
import ContainerRadio from './ContainerRadio';

const ModalForm = ({ submit, setTrigger }) => {
  const [todo, handleChange, reset] = useTodo({
    name: '',
    priority: '',
    category: '',
    done: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(todo);
    setTrigger(false);
  };

  const styles = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <form style={styles} onSubmit={handleSubmit}>
      <InputText
        name="name"
        placeholder="Nombre de la tarea"
        value={todo.name}
        onChange={handleChange}
      />
      <ContainerRadio label={'Priority'}>
        <InputRadio
          value="Low"
          handleChange={handleChange}
          name="priority"
          checked={todo.priority === 'Low'}
        />
        <InputRadio
          handleChange={handleChange}
          name="priority"
          value="Medium"
          checked={todo.priority === 'Medium'}
        />
        <InputRadio
          handleChange={handleChange}
          name="priority"
          value="High"
          checked={todo.priority === 'High'}
        />
      </ContainerRadio>
      <ContainerRadio label={'Category'}>
        <InputRadio
          handleChange={handleChange}
          name="category"
          value="Work"
          checked={todo.category === 'Work'}
        />
        <InputRadio
          handleChange={handleChange}
          name="category"
          value="Family"
          checked={todo.category === 'Family'}
        />
        <InputRadio
          handleChange={handleChange}
          name="category"
          value="School"
          checked={todo.category === 'School'}
        />
      </ContainerRadio>
      <Button>Guardar</Button>
    </form>
  );
};

export default ModalForm;
