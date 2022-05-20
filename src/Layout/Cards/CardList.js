import React from "react";
import SingleCardDetail from "./SingleCardDetail";

function CardList({ cards, handleDelete }) {
  let cardsList = cards.map((card, index) => (
    <SingleCardDetail handleDelete={() => handleDelete(index)} card={card} key={index}/>
  ));

  return <>{cardsList}</>;
}

export default CardList;
