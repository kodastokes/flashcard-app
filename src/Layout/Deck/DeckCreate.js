import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function DeckCreate({ createDeck }) {
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);

  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   createPost({ type, post });
  //   setType("Text");
  //   setPost("");
  // };

  return (
    <>
      <form name="name">
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
            <button>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default DeckCreate;
