import React from 'react';

const Heading = ({ text, children }) => {
  return (
    <h1 className="is-title text-medium has-text-secondary has-text-weight-bold">
      {text || children}
    </h1>
  );
};

export default Heading;
