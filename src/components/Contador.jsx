const styles = {
  fontSize: '1.5rem',
};

const Contador = ({ totalTodos, completed }) => {
  return (
    <p style={styles}>
      Has completado {completed} de {totalTodos} Tareas
    </p>
  );
};

export default Contador;
