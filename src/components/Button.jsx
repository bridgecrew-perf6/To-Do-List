import React from 'react';
import '../App.css';

const Button = (props) => {
  return (
    <button {...props} className="name-btn">
      {props.children}
    </button>
  );
};

export default Button;
