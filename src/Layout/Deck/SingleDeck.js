import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function SingleDeck({
  deck: { name, description, id, cards },
  handleView,
  handleStudy,
  renderHomePage,
}) {
  const handleDelete = async () => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      await deleteDeck(id);
      renderHomePage();
    }
  };

  // link around the button
  // layout has a function that gets from api
  //

  return (
    <div>
      <h2>{name}</h2>
      <p>{cards.length} cards</p>
      <p>{description}</p>
      <Link to={`/decks/${id}`}>
        <button>View</button>
      </Link>
      <button onClick={handleStudy}>Study</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SingleDeck;
