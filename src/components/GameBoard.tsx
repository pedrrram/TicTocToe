import { useTicTacToe } from "../hooks/useTicTocToe";
import Cell from "./Cell";
import X from "./../assets/x.svg";
import O from "./../assets/o.svg";

const Board = () => {
  const { board, handleMove, winner, isDraw } = useTicTacToe();
  return (
    <div className="sm:h-[560px] sm:w-[560px] h-[300px] w-[300px] rounded-[50px] bg-black relative">
      <div className="h-full w-full rounded-[50px] sm:border-[20px] border-[10px] border-black bg-white absolute -top-[20px] left-[20px]">
        <div className="w-full h-full flex items-center">
          <div className="flex flex-wrap justify-center items-center gap-5">
            {board.map((cell, index) => (
              <Cell
                key={index}
                onClick={() => handleMove(index)}
                disabled={!!winner || !!isDraw || !!cell}
              >
                {cell === "X" ? (
                  <img src={X} className="scale-50" alt="X" />
                ) : cell === "O" ? (
                  <img src={O} className="scale-50" alt="O" />
                ) : null}
              </Cell>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
