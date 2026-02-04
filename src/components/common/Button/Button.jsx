import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button', href }) => {
  if (href) {
    return (
      <a href={href} className={`btn btn-${variant}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;