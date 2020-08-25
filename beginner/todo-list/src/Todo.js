import React, { useState } from 'react';

// Importa o meu componente List
import List from './components/List';

function Todo() {
  // Estados
  const [text, setText] = useState("");
  const [itemsList, setItemsList] = useState([]);
  
  // Captura o valor do input e atualiza o valor do estado
  function handleInputText(event) {
    let inputText = event.target.value;
    setText(inputText);
  }

  // Adiciona um novo elemento na lista
  function addItem(event) {
    event.preventDefault();
    
    // Verifica se tem um item para adicionar
    if(text) {
      setItemsList([...itemsList, text]);
      // Limpa o campo de input
      setText("");
    }
  }
  
  // Renderiza o componente
  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form >
        <input type="text" onChange={handleInputText} value={text} />
        <button type="submit" onClick={addItem} >Adiciona</button>
      </form>

      {/* Componente List */}
      <List itemsList={itemsList} />
    </div>
  );
}

export default Todo;
