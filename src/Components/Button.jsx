import React from 'react';

const Button = ({ label = "Default Label" }) => {
  return (
    <button>{label}</button>
  );
};

export default Button;
