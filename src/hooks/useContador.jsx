import { useState } from 'react';

const useContador = (inicial, todos) => {
  const [contador, setContador] = useState(inicial);

  const handleContador = () => {
    const myCount = todos.reduce((acc, item) => (item.done ? acc + 1 : acc), 0);
    setContador(myCount);
  };

  return [contador, handleContador];
};

export default useContador;
