import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function SingleDeck({ deck: { name, description }, handleView, handleStudy, handleDelete }) {

  // let history = useHistory();

  // const handleDelete = async (id) => {
  //   const result = window.confirm("Are you sure you want to delete this post?");
  //   if (result) {
  //     await deleteDeck(id);
  //     history.push("/");
  //   }
  // };

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={handleView}>View</button>
      <button onClick={handleStudy}>Study</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SingleDeck;
