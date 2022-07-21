import React from 'react';

const Heading = ({ text, children }) => {
  return (
    <h1 class="is-title text-medium has-text-secondary has-text-weight-bold mb-6">
      {text || children}
    </h1>
  );
};

export default Heading;
