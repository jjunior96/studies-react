import React from 'react';

import './styled.css';

function List (props) {
  return(
    <ul className="todo-list" >
      {props.itemsList.map(item => (<li>{item}</li> ))}
    </ul>
  )
}

export default List;