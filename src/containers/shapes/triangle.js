import React from 'react';

const removeAnimateClass = (el) => {
  el.classList.remove("triangle-animate");
}

const handleClick = (e) => {
  const el = document.getElementById(e.target.id);
  el.classList.add("triangle-animate");

  window.setTimeout(removeAnimateClass, 2000, el);
}

const Triangle = (props) => {
  return (
    <div id={`triangle${props.id}`} className="triangle-shape" onClick={handleClick}></div>
  )
}

export default Triangle