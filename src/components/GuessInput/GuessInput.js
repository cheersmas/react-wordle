function GuessInput({ value, handleSubmit, handleInputChange, disabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={disabled}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        title="5 letter word"
        onChange={handleInputChange}
        value={value}
      />
    </form>
  );
}

export default GuessInput;
