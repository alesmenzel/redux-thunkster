import React from 'react';

import './Loader.css';

const Loader = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="Loader">
      <div className="Spinner">
        <div className="Spinner__One" />
        <div className="Spinner__Two" />
      </div>
    </div>
  );
};

export default Loader;
