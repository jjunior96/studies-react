import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

export default Form;