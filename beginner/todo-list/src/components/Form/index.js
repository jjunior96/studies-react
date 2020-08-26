import React, { useState } from 'react';

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
      <input type="text" onChange={handleInputTask} value={task} />
      <button type="submit" onClick={addItem}>
        Adicionar
      </button>
    </form>
  );
}

export default Form;
