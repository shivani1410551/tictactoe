


const GameBoard = ({ onHandleActive, gameBoard }) => {

  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[20rem] h-[20rem] mx-auto my-4">
      {gameBoard.map((row, rowIndex) =>
        row.map((playerSymbol, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            className="border border-black flex items-center justify-center m-2 text-3xl font-extrabold font-mono"
            disabled={playerSymbol!==null}
            onClick={()=>onHandleActive(rowIndex,colIndex)}
          >
            {playerSymbol || ""}
          </button>
        ))
      )}
    </div>
  );
};

export default GameBoard;


