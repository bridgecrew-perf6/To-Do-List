import React from 'react';
import './ContainerRadio.css';

const ContainerRadio = ({ label, children }) => {
  return (
    <div className="container__radio">
      <label>{label}</label>
      <div className="container__radio-input">{children}</div>
    </div>
  );
};

export default ContainerRadio;
