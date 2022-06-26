import React from 'react';

function Input(props) {
  return (
    <input onChange={props.onChange} placeholder={props.placeholder} value={props.value} type={props.type} />
  )
}

export default Input;