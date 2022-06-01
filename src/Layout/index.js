import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Deck/DeckList";
import SingleDeckDetail from "./Deck/SingleDeckDetail";
import DeckCreate from "./Deck/DeckCreate";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { listDecks } from "../utils/api";
import CreateDeckButton from "./Buttons/CreateDeckButton";
import { useParams } from "react-router-dom";
import StudyCards from "./Cards/StudyCards";
import DeckEdit from "./Deck/DeckEdit";

function Layout() {
  const params = useParams();

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

          <Route path={"/decks/:deckId/study"}>
            <StudyCards />
          </Route>

          <Route path={"/decks/:deckId/edit"}>
            <DeckEdit />
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
