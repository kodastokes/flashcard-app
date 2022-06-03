import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function DeckCreate() {
  const history = useHistory();

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

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
            handleChange={handleChange}
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
