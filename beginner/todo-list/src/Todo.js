import React, { useState } from 'react';

import './todo.css';

function Todo() {
  const [task, setTask] = useState(""); // <------ estado
  const [itemsList, setItemsList] = useState([]); // <----- será um Array

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    
    setTask(inputTask); // <----- atualizamos o estado "task" atraves de "setTask"
  }
  
  // Adiciona um novo elemento na lista
  function handleAddItemToList(event) {
    event.preventDefault(); // <----- desabilita o refresh na pagina ao enviar um formulário

    if (!task) { // <----- Se nao tiver vazio, nao faz nada
      return
    };
    
    setItemsList([...itemsList, task]); // <----- Copia todos os items ja existentes e entao adiociona o novo item
    setTask(""); // <----- Reseta o valor do input
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />

        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list" >
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;