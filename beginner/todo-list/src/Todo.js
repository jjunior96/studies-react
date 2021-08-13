import React, { useState } from 'react';

import './todo.css';

function Todo() {
  const [task, setTask] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    
    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    /**
     * Evita o usuário adicionar uma tarefa sem nome
     */
    if (task) {
      /**
       * Adiciona no final no array a nova tarefa
       */
      setItemsList([...itemsList, task]);
      
      // Limpa o campo de input
      setTask("");
    }
  }

  return (
    <div className="todo-wrapper" >
      <form onSubmit={handleAddItemToList}>
        <h1>ToDo</h1>

        <input type="text" onChange={(event) => handleChangeInput(event)} value={task} />
        <button type="submit">Add</button>
      </form>

      {itemsList.map((item, index) => (
        <div key={index} >{item}</div>
      ))}
    </div>
  )
}

export default Todo;