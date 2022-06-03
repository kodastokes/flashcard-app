function CardForm({
    front,
    back,
    handleFrontChange,
    handleBackChange,
    handleChange,
  }) {
    return (
      <>
        <div>
          <label htmlFor="front"> Front </label>
          <textarea
            id="front"
            name="front"
            placeholder="Front of Card"
            required={true}
            onChange={handleChange}
            value={front}
          ></textarea>
        </div>
        <div>
          <label htmlFor="back"> Back </label>
          <textarea
            id="back"
            name="back"
            placeholder="Back of Card"
            required={true}
            onChange={handleChange}
            value={back}
          ></textarea>
        </div>
      </>
    );
  }
  
  export default CardForm;
  