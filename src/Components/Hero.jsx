import { useState } from "react";
import GameContainer from "./GameContainer";
import GameLog from "./GameLog";
import Header from "./Header";
import GameOver from "./GameOver";

import DeriveWinner from "./DeriveWinner";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// derived active player
function derivedActivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

const Hero = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [winner, setWinner] = useState(null); // Track the winner

  const [globalPlayerName ,setGlobalPlayerName] = useState({
    "X": "player 1",
    "O":"player 2"
  })
  const activePlayer = derivedActivePlayer(gameTurns);

  // Generate the current game board from gameTurns
  const gameBoard = JSON.parse(JSON.stringify(initialGameBoard)); // Deep copy
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // detect winner
  <DeriveWinner winner={winner} setWinner={setWinner} gameBoard={gameBoard} gameTurns={gameTurns} globalPlayerName={globalPlayerName} />

  // Handle active player moves
  function handleActivePlayer(rowIndex, colIndex) {
    // Prevent moves if there is a winner
    if (winner) return;

    // Update gameTurns with the current active player
    setGameTurns((prevTurns) => {
      const currActivePlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currActivePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  const hasDraw = gameBoard.flat().every((square) => square !== null) && !winner;

  // Restart game
  const handleRestart = () => {
    setGameTurns([]);
    setWinner(null);
  };

  function handlePlayerNameChange(newName,symbol) {
    setGlobalPlayerName((prevName) => {
      return {...prevName, [symbol]: newName };
    })
  }
  return (
    <div className="bg-yellow-600 p-6 flex flex-col items-center relative ">
      <Header />
      <GameContainer
        activePlayer={activePlayer}
        onHandleActive={handleActivePlayer}
        gameBoard={gameBoard}
        onPlayerNameChange={handlePlayerNameChange}
      />
      <GameLog gameTurns={gameTurns} />

      {/* GameOver Modal */}
      {(winner || hasDraw) && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <GameOver winner={winner} onRestart={handleRestart} />
        </div>
      )}
    </div>
  );
};

export default Hero;



