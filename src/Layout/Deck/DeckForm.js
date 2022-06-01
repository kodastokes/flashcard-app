function DeckForm({
  name,
  description,
  handleNameChange,
  handleDescriptionChange,
}) {
  return (
    <>
      <div>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          placeholder="Deck Name"
          required={true}
          onChange={handleNameChange}
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
          onChange={handleDescriptionChange}
          value={description}
        ></textarea>
      </div>
    </>
  );
}

export default DeckForm;
