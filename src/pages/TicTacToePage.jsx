import { useState } from "react";
import { Link } from "react-router-dom";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board) {
  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line: [a, b, c] };
    }
  }

  return null;
}

export default function TicTacToePage() {
  const xAsset = `${import.meta.env.BASE_URL}tic-tac-toe/x.svg`;
  const oAsset = `${import.meta.env.BASE_URL}tic-tac-toe/o.svg`;
  const [board, setBoard] = useState(Array(9).fill(""));
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [startingPlayer, setStartingPlayer] = useState("O");
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const winner = getWinner(board);
  const isDraw = !winner && board.every(Boolean);

  function handleSquareClick(index) {
    if (board[index] || winner) {
      return;
    }

    const nextBoard = [...board];
    nextBoard[index] = currentPlayer;
    const result = getWinner(nextBoard);

    setBoard(nextBoard);

    if (result) {
      setScores((prev) => ({
        ...prev,
        [result.player]: prev[result.player] + 1,
      }));
      return;
    }

    setCurrentPlayer((prev) => (prev === "O" ? "X" : "O"));
  }

  function resetBoard() {
    const nextStarter = startingPlayer === "O" ? "X" : "O";
    setBoard(Array(9).fill(""));
    setStartingPlayer(nextStarter);
    setCurrentPlayer(nextStarter);
  }

  function resetAll() {
    setBoard(Array(9).fill(""));
    setScores({ X: 0, O: 0 });
    setStartingPlayer("O");
    setCurrentPlayer("O");
  }

  return (
    <section className="page-section">
      <div className="page-title-block">
        <p className="eyebrow">Interactive</p>
        <h1 className="page-title">Tic-Tac-Toe</h1>
        <p className="page-intro">
          A React rebuild of the original mini-game, with persistent scorekeeping until
          you reset it.
        </p>
      </div>

      <div className="game-layout">
        <div className="scoreboard">
          <div>
            <span className="score-label">Player X</span>
            <strong>{scores.X}</strong>
          </div>
          <div>
            <span className="score-label">Player O</span>
            <strong>{scores.O}</strong>
          </div>
        </div>

        <div className="game-status">
          {winner
            ? `Winner: ${winner.player}`
            : isDraw
              ? "Draw game"
              : `Current turn: ${currentPlayer}`}
        </div>

        <div className="tic-tac-toe-board" role="grid" aria-label="Tic-Tac-Toe board">
          {board.map((value, index) => {
            const isWinningSquare = winner?.line.includes(index);

            return (
              <button
                key={index}
                type="button"
                className={isWinningSquare ? "square winning" : "square"}
                onClick={() => handleSquareClick(index)}
                aria-label={`Square ${index + 1}${value ? `, ${value}` : ""}`}
              >
                {value ? (
                  <img
                    src={value === "X" ? xAsset : oAsset}
                    alt={value}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="project-actions">
          <button type="button" className="button-link" onClick={resetBoard}>
            Start Next Round
          </button>
          <button type="button" className="button-link subtle" onClick={resetAll}>
            Reset Scoreboard
          </button>
          <Link className="text-link" to="/projects">
            Back to projects
          </Link>
        </div>
      </div>
    </section>
  );
}
