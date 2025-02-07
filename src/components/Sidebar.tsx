import { useTicTacToe } from "../hooks/useTicTocToe";
import X from "./../assets/x.svg";
import O from "./../assets/o.svg";
import MoveHistory from "./MoveHistory";

const Sidebar = () => {
  const { winner, isDraw, currentPlayer } = useTicTacToe();
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-around w-full">
        <div
          className={`flex flex-col items-center ${
            !winner && !isDraw && currentPlayer === "X"
              ? "animate-pulse"
              : "animate-none"
          }`}
        >
          <img src={X} className="w-16 h-16" />
          <span className="font-bold mt-2">PLAYER 1</span>
        </div>
        <div
          className={`flex flex-col items-center ${
            !winner && !isDraw && currentPlayer === "O"
              ? "animate-pulse"
              : "animate-none"
          }`}
        >
          <img src={O} className="w-16 h-16" />
          <span className="font-bold mt-2">PLAYER 2</span>
        </div>
      </div>

      <div className="relative h-[520px] w-80 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        {/* blured background images */}
        <div className="absolute top-0 left-0 w-30 h-28 -rotate-12 transform blur-sm">
          <img
            src={O}
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg opacity-40"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-30 h-28 rotate-12 transform blur-sm">
          <img
            src={X}
            alt="X"
            className="w-full h-full object-cover rounded-lg opacity-40"
          />
        </div>
        <MoveHistory />
        <div className="text-[#FBB500] font-black text-4xl z-10 p-4 tecve-center">
          {winner && (winner === "X" ? "Player 1 wins!" : "Player 2 wins!")}
          {isDraw && "It's a draw!"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
