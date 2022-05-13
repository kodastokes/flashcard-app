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
