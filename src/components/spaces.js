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
      {shape}
    </div>
  )
}

export default Spaces