import { useState } from 'react';

const useTodo = (inicial) => {
  const [todo, setTodo] = useState(inicial);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setTodo(inicial);
  };

  return [todo, handleChange, reset];
};

export default useTodo;
