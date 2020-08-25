import React from 'react';

function List (props) {
  return(
    <ul className="todo-list" >
      {props.itemsList.map(item => (<li>{item}</li> ))}
    </ul>
  )
}

export default List;