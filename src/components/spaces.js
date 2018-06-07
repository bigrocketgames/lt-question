import React from 'react';
import Circle from './circle';
import Square from './square';
import Triangle from './triangle';

const Spaces = (props) => {
  let shape = null;
  let editSelect = null;

  if (props.name === "circle"){
    shape = <Circle name={props.name} id={props.id} />
  } else if (props.name === "square"){
    shape = <Square name={props.name} id={props.id} />
  } else if (props.name === "triangle") {
    shape = <Triangle name={props.name} id={props.id} />
  }

  if (props.edit === "true") {
    editSelect = <select className="change-shape" value={props.name} onChange={(e) => props.onChange(e)}>
      <option value="">Not Selected</option>
      <option value="circle">Circle</option>
      <option value="square">Square</option>
      <option value="triangle">Triangle</option>
    </select>
  } 
  return (
    <div id={props.id} className="space">
      {editSelect}
      <li className="shape-container">
        {shape}
      </li>
    </div>
  )
}

export default Spaces