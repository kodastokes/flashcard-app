import React from "react";
import SingleCardDetail from "./SingleCardDetail";

function CardList({ cards, renderDeckDetail }) {
  let cardsList = cards.map((card, index) => (
    <SingleCardDetail
      card={card}
      key={index}
      renderDeckDetail={renderDeckDetail}
    />
  ));

  return <>{cardsList}</>;
}

export default CardList;
