import React, { useState } from 'react';

import List from './components/List';
import Form from './components/Form';

import './todo.css';

function Todo() {
  const [itemsList, setItemsList] = useState([]);
  
  function onAddItem(newItem) {
    setItemsList([...itemsList, newItem])
  }
  
  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      
      <Form onAddItem={onAddItem}/>

      <List itemsList={itemsList} />
    </div>
  );
}

export default Todo;
