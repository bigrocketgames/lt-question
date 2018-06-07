import React from 'react';
import Circle from './shapes/circle';
import Square from './shapes/square';
import Triangle from './shapes/triangle';

const Spaces = (props) => {
  let shape = null;
  let editSelect = null;

  // determine which shape to display in the space
  if (props.name === "circle"){
    shape = <Circle name={props.name} id={props.id} />
  } else if (props.name === "square"){
    shape = <Square name={props.name} id={props.id} />
  } else if (props.name === "triangle") {
    shape = <Triangle name={props.name} id={props.id} />
  }

  // decide if the select box should be displayed in the spaces
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