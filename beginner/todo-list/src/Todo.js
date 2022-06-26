import React, { useState } from 'react';

import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import List from './components/List';

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
      <Form onSubmit={handleAddItemToList}>
        <Input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />

        <Button type="submit">Adicionar</Button>
      </Form>

     <List itemsList={itemsList} />
    </div>
  );
}

export default Todo;