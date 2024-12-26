const GameOver = ({ winner, onRestart }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg text-center w-[30rem]">
      <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
      {!winner ? (
        <p className="text-lg mb-6">It's a Draw</p>
      ) : (
        <p className="text-lg mb-6">Congratulations, Player {winner}!</p>
      )}
      <button
        onClick={onRestart}
        className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
      >
        Restart
      </button>
    </div>
  );
};

export default GameOver;
