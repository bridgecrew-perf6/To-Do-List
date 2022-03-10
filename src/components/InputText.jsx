import React from 'react';
import './InputText.css';

const InputText = (props) => {
  return <input required type="text" className="input-text" {...props} />;
};

export default InputText;
