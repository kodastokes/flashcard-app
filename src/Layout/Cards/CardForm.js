function CardForm({
    front,
    back,
    handleFrontChange,
    handleBackChange,
  }) {
    return (
      <>
        <div>
          <label htmlFor="front"> Front </label>
          <input
            id="front"
            front="front"
            placeholder="Front of Card"
            required={true}
            onChange={handleFrontChange}
            value={front}
          ></input>
        </div>
        <div>
          <label htmlFor="back"> Back </label>
          <textarea
            id="back"
            front="back"
            placeholder="Back of Card"
            required={true}
            onChange={handleBackChange}
            value={back}
          ></textarea>
        </div>
      </>
    );
  }
  
  export default CardForm;
  