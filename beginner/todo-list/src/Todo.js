/* eslint-disable no-self-compare */
import React, { useState } from 'react';

import List from './components/List';
import Form from './components/Form';
import Item from './components/Item';

import './todo.css';

function Todo() {
  const [itemsList, setItemsList] = useState([]);

  function onAddItem(newItem) {
    const item = new Item(newItem);

    setItemsList([...itemsList, item]);
  }

  function onItemDeleted(item) {
    const filteredItems = itemsList.filter(
      itemCurrent => itemCurrent.id !== item.id
    );

    setItemsList(filteredItems);
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>

      <Form onAddItem={onAddItem} />

      <List onItemDeleted={onItemDeleted} itemsList={itemsList} />
    </div>
  );
}

export default Todo;
