import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import GetDate from './components/GetDate';
import Contador from './components/Contador';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import ModalName from './components/ModalName';
import Button from './components/Button';
import Popup from './components/Popup';
import ModalForm from './components/ModalForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonForm, setButtonForm] = useState(false);

  const submit = (todo) => {
    setTodos([...todos, todo]);
  };

  return nombre === '' ? (
    <div className="container__first-modal">
      <Button
        onClick={() => setButtonPopup(true)}
        children="Ingresa tu nombre"
      />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <ModalName setTrigger={setButtonPopup} setNombre={setNombre} />
      </Popup>
    </div>
  ) : (
    <Layout>
      <Header nombre={nombre} />
      <GetDate />
      <Contador todos={todos} />
      <Todos todos={todos} />
      <AddTodo onClick={() => setButtonForm(true)} />
      <Popup trigger={buttonForm} setTrigger={setButtonForm}>
        <ModalForm setTrigger={setButtonForm} submit={submit} />
      </Popup>
    </Layout>
  );
};

export default App;
