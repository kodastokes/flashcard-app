import React from "react";
import SingleDeck from "./SingleDeck";

function DeckList({ decks, handleDelete }) {
  let deckList = decks.map((deck, index) => (
    <SingleDeck handleDelete={() => handleDelete(index)} deck={deck} />
  ));

  return <>{deckList}</>;
}

export default DeckList;
