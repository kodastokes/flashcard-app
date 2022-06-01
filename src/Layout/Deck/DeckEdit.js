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

//   const [deck, setDeck] = useState({});

 const deck = {
  id: "",
  name: "",
  description: ""
}
  const [inputName, setInputName] = useState("");
  const handleNameChange = (event) => setInputName(event.target.value);

  const [inputDescription, setInputDescription] = useState("");
  const handleDescriptionChange = (event) =>
    setInputDescription(event.target.value);

//   useEffect(() => {
//     readDeck(deckId).then((result) => {
//       setDeck(result);
//       setInputName(result.name);
//       setInputDescription(result.description);
//     });
//   }, [deckId]);

  useEffect(() => {
    readDeck(deckId).then((result) => {
      deck.name = result.name
      setInputName(result.name);
      setInputDescription(result.description);
    });
  }, [deckId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    deck.name = inputName;
    deck.description = inputDescription;
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
            name={inputName}
            description={inputDescription}
            handleNameChange={handleNameChange}
            handleDescriptionChange={handleDescriptionChange}
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
