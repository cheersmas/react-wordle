export function checkGuess(guess, answer) {
  // assuming  guess and answer have the same length
  if (!guess) {
    return;
  }

  const CORRECT = "correct";
  const INCORRECT = "incorrect";
  const MISPLACED = "misplaced";

  const guessCharacters = guess.toUpperCase().split("");
  const answerCharacters = answer.toUpperCase().split("");

  const guessedResult = guessCharacters.map((item) => {
    return { letter: item, status: INCORRECT };
  });

  for (let i = 0; i < guessCharacters.length; i++) {
    if (guessCharacters[i] === answerCharacters[i]) {
      guessedResult[i].status = CORRECT;
      continue;
    }

    const currentCharIndexInAnswer = answerCharacters.findIndex(
      (item) => item === guessCharacters[i]
    );
    if (currentCharIndexInAnswer >= 0) {
      guessedResult[i].status = MISPLACED;
    }
  }

  return guessedResult;
}
