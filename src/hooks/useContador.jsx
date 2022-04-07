import { useState } from "react";

const useContador = (inicial, todos) => {
  const [contador, setContador] = useState(inicial);

  const handleContador = () => {
    const myCount = todos.filter((todo) => !!todo.done).length;
    setContador(myCount);
  };

  return [contador, handleContador];
};

export default useContador;
