import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function DeckCreate() {
  const history = useHistory();

  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);

  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck({ name, description }).then(({ id }) =>
      history.push(`/decks/${id}`)
    );
  };

  return (
    <>
      <form name="name" onSubmit={handleSubmit}>
        <fieldset>
          <h2>Create Deck</h2>
          <DeckForm
            name={name}
            description={description}
            handleNameChange={handleNameChange}
            handleDescriptionChange={handleDescriptionChange}
          />
          <div>
            <Link to="/">
              <button>Cancel</button>
            </Link>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default DeckCreate;
