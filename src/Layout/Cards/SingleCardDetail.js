import React from "react";
import { Link } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function SingleCardDetail({
  card: { front, back, id, deckId },
  handleEdit,
  renderSingleDeckDetail,
}) {
  const handleDelete = async () => {
    const result = window.confirm(
      "Delete this card? You will not be able to recover it."
    );
    if (result) {
      await deleteCard(id);
      renderSingleDeckDetail();
    }
  };

  return (
    <div>
      <p>{front}</p>
      <p>{back}</p>
      <Link to= {`/decks/${deckId}/cards/${id}/edit`} >
         <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SingleCardDetail;