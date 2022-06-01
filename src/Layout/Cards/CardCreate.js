import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createCard, createDeck } from "../../utils/api";
import CardForm from "./CardForm";

function CardCreate() {
  const history = useHistory();
  const params = useParams();
  const deckId = params.deckId;

  const cardFormat = {
    front: "",
    back: "",
  };

  const [newCard, setNewCard] = useState(cardFormat);

  const [front, setFront] = useState("");
  const handleFrontChange = (event) => setFront(event.target.value);

  const [back, setBack] = useState("");
  const handleBackChange = (event) => setBack(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    newCard.front = front;
    newCard.back = back;
    createCard(deckId, newCard).then(() => {
        setFront("")
        setBack("")
    });
  };

  return (
    <>
      <form front="front" onSubmit={handleSubmit}>
        <fieldset>
          <h2>Create Card</h2>
          <CardForm
            front={front}
            back={back}
            handleFrontChange={handleFrontChange}
            handleBackChange={handleBackChange}
          />
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
