import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}
function Guess({ letters }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={letters ? letters[num].letter : undefined}
          status={letters ? letters[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
