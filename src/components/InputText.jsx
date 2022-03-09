import React from 'react';
import './InputText.css';

const InputText = (props) => {
  return (
    <div className="field">
      <input required type="text" className="input-text" {...props} />
    </div>
  );
};

export default InputText;
