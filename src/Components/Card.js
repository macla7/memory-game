import React from "react";

function Card(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <img src={props.src} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default Card;
