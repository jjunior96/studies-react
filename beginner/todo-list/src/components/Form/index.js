import React, { useState } from 'react';

import './styled.css';

function Form(props) {
  const [task, setTask] = useState('');

  function handleInputTask(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  function addItem(event) {
    event.preventDefault();

    if (task) {
      props.onAddItem(task);
      setTask('');
    }
  }

  return (
    <form>
     <input type="text" placeholder="Adicione uma tarefa" onChange={handleInputTask} value={task} />
      <button type="submit" onClick={addItem}>
        Adicionar
      </button>
    </form>
  );
}

export default Form;
