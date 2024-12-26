import { useEffect } from "react";
import { winningCombinations } from "./WinningCombinations";

const DeriveWinner = ({winner,setWinner,gameBoard,globalPlayerName,gameTurns}) => {

  // Detect winner using useEffect
    useEffect(() => {
    for (const combination of winningCombinations) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        setWinner(globalPlayerName[firstSquareSymbol]);
        return;
      }
    }
  }, [gameTurns, gameBoard]); // Run whenever gameTurns o

  return (
    winner
  )
}

export default DeriveWinner
