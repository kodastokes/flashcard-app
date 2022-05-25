import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Deck/DeckList";
import SingleDeckDetail from "./Deck/SingleDeckDetail";
import CardList from "./Cards/CardList";
import DeckCreate from "./Deck/DeckCreate";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { listDecks } from "../utils/api";
import CreateDeckButton from "./Buttons/CreateDeckButton";
import { useParams } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

function Layout() {
  const params = useParams();
  const { url } = useRouteMatch();

  const singleTestDeck = {
    id: 1,
    name: "Rendering in React",
    description:
      "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
    cards: [
      {
        id: 1,
        front: "Differentiate between Real DOM and Virtual DOM.",
        back: "Virtual DOM updates are faster but do not directly update the HTML",
        deckId: 1,
      },
      {
        id: 2,
        front: "How do you modify the state of a different React component?",
        back: "Not at all! State is visible to the component only.",
        deckId: 1,
      },
      {
        id: 3,
        front: "How do you pass data 'down' to a React child component?",
        back: "As properties or props",
        deckId: 1,
      },
      {
        cards: [],
        front: "b",
        back: "b",
        deckId: 1,
        id: 7,
      },
    ],
  };

  const [decks, setDecks] = useState([]);

  //console.log(decks)

  useEffect(() => {
    listDecks().then((result) => setDecks(result));
  }, []);

  const renderHomePage = () => {
    listDecks().then((result) => setDecks(result));
  };
  // add function that has line 51 so when the deletehandler getes used, it updates the state and causes a re-render

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            <CreateDeckButton />
            <DeckList decks={decks} renderHomePage={renderHomePage} />
          </Route>

          <Route path={"/decks/new"}>
            <DeckCreate />
          </Route>

          <Route path={"/decks/:deckId"}>
            <SingleDeckDetail renderHomePage={renderHomePage}/>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
