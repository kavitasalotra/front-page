import * as React from 'react';

const Button = ({ text, children, className }) => {
  return (
    <button type="button" className={className}>
      {text || children}
    </button>
  );
};

export default Button;
