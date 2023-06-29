import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-logic";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
// import { checkGuess } from "../../game-logic";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputValue, setInputValue] = useState("");
  const [guessResults, setGuessResults] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  // function testGuess() {
  //   const inputAnswer = "READS";
  //   const testagainst = ["GREET", "GREAT", "NIGHT", "TESTS", "READS"];
  //
  //   const results = testagainst.map((item) => checkGuess(item, inputAnswer));
  //   console.table(results);
  // }
  function handleSubmit(event) {
    event.preventDefault();

    // has won
    setGuessResults((prevGuesses) => {
      if (prevGuesses.length < NUM_OF_GUESSES_ALLOWED) {
        const guessedWordStatus = checkGuess(inputValue, answer);
        const guesses = [
          ...prevGuesses,
          {
            letters: guessedWordStatus,
          },
        ];
        if (answer === inputValue) {
          setGameOver("won");
        } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
          setGameOver("loss");
        }
        return guesses;
      }
      return [...prevGuesses];
    });
    console.log({ guess: inputValue });
    // gameover logic
    setInputValue("");
  }

  function handleInputChange(event) {
    setInputValue(event.target.value.toUpperCase());
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        disabled={gameOver}
        value={inputValue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      {gameOver && (
        <GameOverBanner
          won={gameOver === "won"}
          answer={answer}
          noOfGuesses={guessResults.length}
        />
      )}
    </>
  );
}

export default Game;
