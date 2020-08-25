import React, { useState } from 'react';

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

      <ul className="todo-list" >
        {/* Cria um "li" para cada item da lista */}
        {itemsList.map(item => (<li>{item}</li> ))}
      </ul>
    </div>
  );
}

export default Todo;
