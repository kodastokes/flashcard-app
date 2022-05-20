import React from "react";

function SingleCardDetail({ card: { front, back }, handleEdit, handleDelete }) {
  return (
    <div>
      <p>{front}</p>
      <p>{back}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SingleCardDetail;


//send all decks here and then useParams to access the id and use that id to access the correct array in decks