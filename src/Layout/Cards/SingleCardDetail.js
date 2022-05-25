import React from "react";
import { deleteCard } from "../../utils/api";

function SingleCardDetail({
  card: { front, back, id },
  handleEdit,
  renderDeckDetail,
}) {
  const handleDelete = async () => {
    const result = window.confirm(
      "Delete this card? You will not be able to recover it."
    );
    if (result) {
      await deleteCard(id);
      renderDeckDetail();
    }
  };

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
