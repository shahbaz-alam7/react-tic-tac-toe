import { useEffect, useState } from "react";
import Square from "./Square";
const Board = () => {
  const initialArray = Array(9).fill(null);
  const [sq, setSq] = useState(initialArray);
  const [XisNext, setXisNext] = useState(true);
  const handleClickEvent = (i) => {
    const newSq = [...sq];
    const winnerDeclared = Boolean(calculateWinner(sq));
    const squareFilled = Boolean(sq[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }
    newSq[i] = XisNext ? "X" : "O";
    setSq(newSq);
    setXisNext(!XisNext);
  };
  const calculateWinner = (sq) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], //rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], //columns
      [0, 4, 8],
      [2, 4, 6], //diagonal
    ];
    for (let i of combinations) {
      const [a, b, c] = i;
      if (sq[a] && sq[a] === sq[b] && sq[b] === sq[c]) {
        // console.log(`winner is ${sq[a]} and ${sq}`);
        return sq[a];
      }
    }
    return null;
  };
  const resetButton = () => {
    setSq([]);
    setXisNext(true);
  };
  const winner = calculateWinner(sq);
  const status = winner
    ? `Winner is ${winner}`
    : `Next player is: ${XisNext ? "X" : "O"}`;
  // console.log(sq);
  return (
    <>
      <h1>{status}</h1>
      <div className="board">
        {initialArray.map((i, index) => {
          return (
            <Square
              data={sq[index]}
              key={index}
              onClickEvent={() => handleClickEvent(index)}
            />
          );
        })}
      </div>
      <button className="reset" onClick={resetButton}>
        Reset
      </button>
    </>
  );
};
export default Board;
