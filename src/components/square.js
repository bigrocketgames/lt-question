import React from 'react';

const removeAnimateClass = (el) => {
  el.classList.remove("square-animate");
}

const handleClick = (e) => {
  const el = document.getElementById(e.target.id);
  el.classList.add("square-animate");

  window.setTimeout(removeAnimateClass, 2000, el);
}

const Square = (props) => {
  return (
    <div id={`square${props.id}`} className="square-shape" onClick={handleClick}></div>
  )
}

export default Square