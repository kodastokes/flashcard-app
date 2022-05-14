import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  let history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/decks/new")}>Create Deck</button>
    </div>
  );
}

export default CreateDeckButton;
