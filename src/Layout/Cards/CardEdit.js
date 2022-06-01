import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function CardEdit() {
  const history = useHistory();
  const params = useParams();
  const deckId = params.deckId;
  const cardId = params.cardId;

  const [deck, setDeck] = useState({});
  const [card, setCard] = useState([])

  const [inputFront, setInputFront] = useState("");
  const handleInputFrontChange = (event) => setInputFront(event.target.value);

  const [inputBack, setInputBack] = useState("");
  const handleInputBackChange = (event) => setInputBack(event.target.value);

  useEffect(() => {
    readDeck(deckId)
      .then((result) => setDeck(result))
      .then(() => readCard(cardId))
      .then((result) => {
        setCard(result)
        setInputFront(result.front);
        setInputBack(result.back);
      });
  }, [deckId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    card.front = inputFront;
    card.back = inputBack;
    updateCard(card).then(({ deckId }) => history.push(`/decks/${deckId}`));
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
          <li>Study Cards</li>
        </ol>
      </div>
      <form name="name" onSubmit={handleSubmit}>
        <fieldset>
          <h2> Edit Card </h2>
          <CardForm
            front={inputFront}
            back={inputBack}
            handleFrontChange={handleInputFrontChange}
            handleBackChange={handleInputBackChange}
          />
          <div>
            <button
              onClick={() => {
                history.push(`/decks/${deckId}`);
              }}
            >
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default CardEdit;
