import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";

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
          <legend>Create Deck</legend>
          <div>
            <label htmlFor="name">Name </label>
            <input
              id="name"
              name="name"
              placeholder="Deck Name"
              required={true}
              onChange={handleNameChange}
              value={name}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description </label>
            <textarea
              id="description"
              name="description"
              placeholder="Brief description of the deck"
              required={true}
              onChange={handleDescriptionChange}
              value={description}
            ></textarea>
          </div>
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
