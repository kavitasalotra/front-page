import React from 'react';

const Heading = ({ text, children, color, ...props }) => {
  return (
    <div color={color} {...props}>
      <h1
        className={`is-title text-medium has-text-weight-bold ${
          color ? 'has-text-white-lite' : 'has-text-secondary'
        } `}
      >
        {text || children}
      </h1>
    </div>
  );
};

export default Heading;
