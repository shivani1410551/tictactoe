import PlayerContainer from "./PlayerContainer"
import GameBoard from "./GameBoard"
const GameContainer = ({activePlayer,onHandleActive,gameBoard ,playerName,onPlayerNameChange}) => {
  return (
    <div className="game-container bg-yellow-900 rounded p-6 w-[32rem] mt-6">
      <ol className={`players flex items-center justify-between `}>
        <PlayerContainer initialName="player1" playerSymbol="X" isActive={activePlayer === "X"}
          onPlayerNameChange={onPlayerNameChange}

        />
        <PlayerContainer initialName="player2" playerSymbol="O"


        onPlayerNameChange={onPlayerNameChange}
          isActive={activePlayer==="O"} />
      </ol>
      <GameBoard onHandleActive={onHandleActive} gameBoard={gameBoard} />
    </div>
  )
}

export default GameContainer


