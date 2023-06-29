import React from "react";

function GameOverBanner({ won, answer, noOfGuesses }) {
  if (won) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{noOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameOverBanner;
