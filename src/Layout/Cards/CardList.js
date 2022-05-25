import React from "react";
import SingleCardDetail from "./SingleCardDetail";

function CardList({ cards, renderSingleDeckDetail }) {
  let cardsList = cards.map((card, index) => (
    <SingleCardDetail
      card={card}
      key={index}
      renderSingleDeckDetail={renderSingleDeckDetail}
    />
  ));

  return <>{cardsList}</>;
}

export default CardList;
