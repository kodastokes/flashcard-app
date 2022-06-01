import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function SingleDeck({
  deck: { name, description, id, cards },
  renderHomePage,
}) {
  const handleDelete = async () => {
    const result = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (result) {
      await deleteDeck(id);
      renderHomePage();
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{cards.length} cards</p>
      <p>{description}</p>
      <Link to={`/decks/${id}`}>
        <button>View</button>
      </Link>
      <Link to={`/decks/${id}/study`}>
       <button>Study</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SingleDeck;
