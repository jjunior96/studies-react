/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import './styled.css';

function List(props) {
  return (
    <ul className="todo-list">
      {props.itemsList.map(item => (
        <li key={item.id}>
          {item.text}
          <button onClick={props.onItemDeleted(item)}>
            <img src="../../../assets/bin.png" alt="icon" />{' '}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
