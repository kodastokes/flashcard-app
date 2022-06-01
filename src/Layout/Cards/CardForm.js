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
          <textarea
            id="front"
            front="front"
            placeholder="Front of Card"
            required={true}
            onChange={handleFrontChange}
            value={front}
          ></textarea>
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
  