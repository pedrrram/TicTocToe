import { useTicTacToe } from "../hooks/useTicTocToe";

const MoveHistory = () => {
  const { history, jumpToMove, currentMoveIndex } = useTicTacToe();
  return (
    <div className="relative z-10 p-4 space-y-3">
      {history.map((move, index) => (
        <button
          key={move.position}
          onClick={() => jumpToMove(index)}
          className={`text-black font-medium transition-all ${
            currentMoveIndex === index + 1 ? "font-black pl-4" : ""
          }`}
        >
          {`Move ${index + 1}: Player ${move.player} (Row ${
            Math.floor(move.position / 3) + 1
          }, Col ${(move.position % 3) + 1})`}
        </button>
      ))}
    </div>
  );
};

export default MoveHistory;
