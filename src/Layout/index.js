import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Deck/DeckList";
import SingleDeckDetail from "./Deck/SingleDeckDetail";
import CardList from "./Cards/CardList";

function Layout() {

  const testDeck = [
    {
      "id": 1,
      "name": "Rendering in React",
      "description": "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
      "cards": [
        {
          "id": 1,
          "front": "Differentiate between Real DOM and Virtual DOM.",
          "back": "Virtual DOM updates are faster but do not directly update the HTML",
          "deckId": 1
        },
        {
          "id": 2,
          "front": "How do you modify the state of a different React component?",
          "back": "Not at all! State is visible to the component only.",
          "deckId": 1
        },
        {
          "id": 3,
          "front": "How do you pass data 'down' to a React child component?",
          "back": "As properties or props",
          "deckId": 1
        },
        {
          "cards": [],
          "front": "b",
          "back": "b",
          "deckId": 1,
          "id": 7
        }
      ]
    },
    {
      "name": "React Router",
      "description": "React Router is a collection of navigational components that compose declaratively with your application.",
      "id": 2,
      "cards": [
        {
          "front": "What path will match the follow Route?\n<Route>\n  <NotFound />\n</Route>",
          "back": "All paths. A route with no path matches all URL's",
          "deckId": 2,
          "id": 4
        },
        {
          "front": "What does <Switch> do?",
          "back": "Renders the first matching child <Route> ",
          "deckId": 2,
          "id": 5
        }
      ]
    }
  ]

  const singleTestDeck =   {
    "id": 1,
    "name": "Rendering in React",
    "description": "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
    "cards": [
      {
        "id": 1,
        "front": "Differentiate between Real DOM and Virtual DOM.",
        "back": "Virtual DOM updates are faster but do not directly update the HTML",
        "deckId": 1
      },
      {
        "id": 2,
        "front": "How do you modify the state of a different React component?",
        "back": "Not at all! State is visible to the component only.",
        "deckId": 1
      },
      {
        "id": 3,
        "front": "How do you pass data 'down' to a React child component?",
        "back": "As properties or props",
        "deckId": 1
      },
      {
        "cards": [],
        "front": "b",
        "back": "b",
        "deckId": 1,
        "id": 7
      }
    ]
  }

  return (
    <>
      <Header />
      <div className="container">
        <p></p>
      <p>****** below to be displayed at / ******</p>
        <div>
        <button>Create Deck</button>
        </div>
        <p></p>
        <p>****** below to be displayed at / ******</p>
        {/* displayed at / */}
        <DeckList decks={testDeck} />
        <p></p>
        <p>****** below to be displayed at /decks/:deckId ******</p>
        {/*displayed at /decks/:deckId */}
        <SingleDeckDetail deck={singleTestDeck} />
        <p></p>
        <p>****** below to be displayed if URL is not found ******</p>
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
