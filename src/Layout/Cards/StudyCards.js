import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";

function StudyCards() {
  const { deckId } = useParams();
  const history = useHistory();

  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(1);
  const [front, isFront] = useState(true);

  useEffect(() => {
    readDeck(deckId)
        .then((result) =>{ 
            setDeck(result)
            setCards(result.cards);
  })}, []);

  function nextCard(index, numberOfCards) {
    if (index < numberOfCards) {
      setSelectedCard(selectedCard + 1);
      isFront(true);
    } else {
      if (
        window.confirm(
          `Restart cards? Click 'cancel' to return to the home page`
        )
      ) {
        setSelectedCard(1);
        isFront(true);
      } else {
        history.push("/");
      }
    }
  }

  function flipCard() {
    if (front) {
      isFront(false);
    } else {
      isFront(true);
    }
  }

  function showNextButton(cards, index) {
    if (front) {
      return null;
    } else {
      return (
        <button onClick={() => nextCard(index + 1, cards.length)}>Next</button>
      );
    }
  }

  function enoughCards() {
    return (
      <div>
        {cards.map((card, index) => {
          if (index === selectedCard - 1) {
            return (
              <div key={card.id}>
                <div>{`Card ${index + 1} of ${cards.length}`}</div>
                <div>{front ? card.front : card.back}</div>
                <button onClick={flipCard}>Flip</button>
                {showNextButton(cards, index)}
              </div>
            );
          }
        })}
      </div>
    );
  }

  function notEnoughCards() {
    return (
      <div>
        <h2>Not enough cards.</h2>
        <p>
          You need at least 3 cards to StudyCards. There are {cards.length}{" "}
          cards in this deck.
        </p>
        <Link to={`/decks/${deck.id}/cards/new`}>Add Cards</Link>
      </div>
    );
  }

  return (
    <div>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li>Study Cards</li>
      </ol>
      <div>
        <h2>{`${deck.name}: Study Cards`}</h2>
        <div>{cards.length > 2 ? enoughCards() : notEnoughCards()}</div>
      </div>
    </div>
  );
}

export default StudyCards;
