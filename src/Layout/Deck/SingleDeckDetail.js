import React from "react";
import CardList from "../Cards/CardList";

function SingleDeckDetail({
  deck: { name, description, cards },
  handleEdit,
  handleStudy,
  handleAddCards,
  handleDelete,
}) {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleStudy}>Study</button>
        <button onClick={handleAddCards}>Add Cards</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <h2>Cards</h2>
        <CardList cards={cards} />
      </div>
    </>
  );
}

export default SingleDeckDetail;
