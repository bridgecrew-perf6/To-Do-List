import { useState } from 'react';
import Button from './Button';
import InputText from './InputText';

const ModalName = ({ setTrigger, setNombre }) => {
  const [newNombre, setNewNombre] = useState('');
  return (
    <>
      <InputText
        name="nombre"
        placeholder="Ingresa tu nombre"
        onChange={(nombre) => setNewNombre(nombre.target.value)}
      />
      <Button
        onClick={() => {
          setTrigger(false);
          setNombre(newNombre);
        }}
        children="Guardar Nombre"
      />
    </>
  );
};

export default ModalName;
