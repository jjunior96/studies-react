import React from 'react';

function List(props) {
  return (
    <ul className="todo-list">  
      {props.itemsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List;