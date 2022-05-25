import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import CardList from "../Cards/CardList";

function SingleDeckDetail({
  handleEdit,
  handleStudy,
  handleAddCards,
  handleDelete,
}) {
  
  const params = useParams()
  const deckId = params.deckId

  const [deck, setDeck] = useState({});

  useEffect(() => {
    readDeck(deckId).then((result) => setDeck(result));
  }, []);

  const { name, description, cards = [], id } = deck

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
