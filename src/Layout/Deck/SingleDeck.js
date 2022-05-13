import React from "react";

function SingleDeck({
  deck: { name, description },
  handleView,
  handleStudy,
  handleDelete,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={handleView}>View</button>
      <button onClick={handleStudy}>Study</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SingleDeck;
