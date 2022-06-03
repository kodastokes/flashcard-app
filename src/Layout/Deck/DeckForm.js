function DeckForm({ name, description, handleChange }) {
  return (
    <>
      <div>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          placeholder="Deck Name"
          required={true}
          onChange={handleChange}
          value={name}
        ></input>
      </div>
      <div>
        <label htmlFor="description">Description </label>
        <textarea
          id="description"
          name="description"
          placeholder="Brief description of the deck"
          required={true}
          onChange={handleChange}
          value={description}
        ></textarea>
      </div>
    </>
  );
}

export default DeckForm;
