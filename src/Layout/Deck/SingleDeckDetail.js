import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteDeck, readDeck } from "../../utils/api";
import CardList from "../Cards/CardList";

function SingleDeckDetail({
  renderHomePage,
  handleEdit,
  handleStudy,
  handleAddCards,
}) {
  const history = useHistory();
  const params = useParams();
  const deckId = params.deckId;

  const [deck, setDeck] = useState({});

  const { name, description, cards = [], id } = deck;

  useEffect(() => {
    readDeck(deckId).then((result) => setDeck(result));
  }, []);

  const renderDeckDetail = () => {
    readDeck(deckId).then((result) => setDeck(result));
  };

  const handleDelete = async () => {
    const result = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (result) {
      await deleteDeck(id);
      renderHomePage();
      history.push("/");
    }
  };

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
        <CardList cards={cards} renderDeckDetail={renderDeckDetail} />
      </div>
    </>
  );
}

export default SingleDeckDetail;
