import React from 'react';

const Button = (props) => {
  return (
    <button className={props.classes} onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
  )
}

export default Button