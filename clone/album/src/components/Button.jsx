import React from 'react';
import './Style.css';

const Button = ({ txt, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {txt}
    </button>
  );
};

export default Button;