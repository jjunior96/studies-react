/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import './styled.css';

function Square() {
  const [state, setState] = useState({ value: null });

  return (
    <button
      type="button"
      className="square"
      onClick={() => {
        setState({ value: 'X' });
      }}
    >
      {state.value}
    </button>
  );
}

export default Square;
