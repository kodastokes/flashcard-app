import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

function CardCreate() {
  const params = useParams();
  const deckId = params.deckId;

  const [deck, setDeck] = useState({});
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "front") {
      setFront(event.target.value);
    } else {
      setBack(event.target.value);
    }
  };

  useEffect(() => {
    readDeck(deckId).then((result) => setDeck(result));
  }, [deckId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, {front, back}).then(() => {
      setFront("");
      setBack("");
    });
  };

  return (
    <>
      <div>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li>Add Card</li>
        </ol>
      </div>

      <form front="front" onSubmit={handleSubmit}>
        <fieldset>
          <h2>{deck.name}: Add Card</h2>
          <CardForm front={front} back={back} handleChange={handleChange} />
          <div>
            <Link to={`/decks/${deckId}`}>
              <button>Cancel</button>
            </Link>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default CardCreate;
