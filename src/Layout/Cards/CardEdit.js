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
  const [card, setCard] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    readDeck(deckId)
      .then((result) => setDeck(result))
      .then(() => readCard(cardId))
      .then((result) => setCard(result))
  }, [deckId, cardId]);


  const handleSubmit = (event) => {
    event.preventDefault();
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
            front={card.front}
            back={card.back}
            // handleFrontChange={handleInputFrontChange}
            // handleBackChange={handleInputBackChange}
            handleChange = {handleChange}
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
