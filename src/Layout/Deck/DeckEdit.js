import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function DeckEdit() {
  const history = useHistory();
  const params = useParams();
  const deckId = params.deckId;

  const [deck, setDeck] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    readDeck(deckId).then((result) => {
      setDeck(result);
    });
  }, [deckId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck(deck).then(({ id }) => history.push(`/decks/${id}`));
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
          <h2> Edit Deck </h2>
          <DeckForm
            name={deck.name}
            description={deck.description}
            handleChange={handleChange}
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

export default DeckEdit;
