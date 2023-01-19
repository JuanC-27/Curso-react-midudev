import { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";
import confetti from "canvas-confetti";
import { TURNS, WINNING_POSITIONS } from "./constants";
import Board from "./components/Board";
import { resetGameFromStorage, saveGameToStorage } from "./storage";

function App() {
  const INITIAL_STATE = Array(9).fill(null);

  const [board, setBoard] = useState(() => {
    const boardFromLS = localStorage.getItem("board");
    return boardFromLS ? JSON.parse(boardFromLS) : INITIAL_STATE;
  });

  const [turn, setTurn] = useState(() => {
    const turnsFromLS = localStorage.getItem("turn");
    return turnsFromLS ? turnsFromLS : TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(INITIAL_STATE);
    setTurn(TURNS.X);
    setWinner(null);
    resetGameFromStorage();
  };

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNING_POSITIONS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    
    saveGameToStorage(newBoard, newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }
    if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <button onClick={resetGame}>Reiniciar</button>

      <section className="game">
        <Board board={board} updateBoard={updateBoard} />
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
