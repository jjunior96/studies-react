import React from 'react';

function Button(props) {
  return (
    <button type={props.type}>
      {props.children}
    </button>
  )
}

export default Button;