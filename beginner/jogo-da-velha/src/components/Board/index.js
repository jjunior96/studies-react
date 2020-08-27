import React from 'react';

import Square from '../Square';

import './styled.css';

function Board() {
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
