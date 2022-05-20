import React from "react";
import SingleDeck from "./SingleDeck";

function DeckList({ decks, renderHomePage }) {
  let deckList = decks.map((deck, index) => (
    <SingleDeck renderHomePage={renderHomePage} deck={deck} key={index}/>
  ));

  return <>{deckList}</>;
}

export default DeckList;
