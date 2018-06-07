import React from 'react';
import Circle from './circle';
import Square from './square';
import Triangle from './triangle';

const Spaces = (props) => {
  let shape = null;
  if (props.name === "circle"){
    shape = <Circle name={props.name} />
  } else if (props.name === "square"){
    shape = <Square name={props.name} />
  } else if (props.name === "triangle") {
    shape = <Triangle name={props.name} />
  }
  return (
    <div className="space">
      <select className="change-shape" value={props.name}>
        <option value="">Not Selected</option>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
      </select>
      <li className="shape-container">
        {shape}
      </li>
    </div>
  )
}

export default Spaces