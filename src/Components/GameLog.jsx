const GameLog = ({ gameTurns }) => {
  console.log(gameTurns);

  return (
    <div className="bg-slate-500 p-4 mt-2 flex space-x-2">
      <h2 className="text-yellow-950 mb-4 font-semibold text-xl">Game Log</h2>
      <ol>
        {gameTurns.map((turn, index) => {
          const { square, player } = turn; // Destructure square and player
          const { row, col } = square; // Destructure row and col from square
          return (
            <li key={index} className="my-2">
              Player {player} placed {player} at ({row + 1}, {col + 1})
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default GameLog;

