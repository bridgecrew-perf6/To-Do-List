const Contador = ({ todos }) => {
  const myCount = todos.reduce((acc, item) => (item.done ? acc + 1 : acc), 0);

  return (
    <div>
      Has completado {myCount} de {todos.length} Tareas
    </div>
  );
};

export default Contador;
