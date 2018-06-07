import React from 'react';

const removeAnimateClass = (el) => {
  el.classList.remove("circle-animate");
}

const handleClick = (e) => {
  const el = document.getElementById(e.target.id);
  el.classList.add("circle-animate");

  window.setTimeout(removeAnimateClass, 2000, el);
}

const Circle = (props) => {
  return (
    <div id={`circle${props.id}`} className="circle-shape" onClick={handleClick}></div>
  )
}

export default Circle