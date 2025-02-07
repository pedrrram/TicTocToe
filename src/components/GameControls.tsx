import { useTicTacToe } from "../hooks/useTicTocToe";

const GameControls = () => {
  const { reset, redo, undo } = useTicTacToe();
  return (
    <div className="flex gap-5 mt-10">
      <button
        className="font-bold text-lg bg-black rounded-lg relative w-24 h-10 cursor-pointer disabled:cursor-not-allowed"
        onClick={reset}
      >
        <div className=" bg-[#FBB500] rounded-lg border-4 border-black absolute w-24 h-10 -top-0.5 left-0.5 flex items-center justify-center">
          RESET
        </div>
      </button>
      <button
        className="font-bold text-lg bg-black rounded-lg relative w-24 h-10 cursor-pointer disabled:cursor-not-allowed"
        onClick={redo}
      >
        <div className="bg-[#C9F9FC] rounded-lg border-4 border-black absolute w-24 h-10 -top-0.5 left-0.5 flex items-center justify-center">
          REDO
        </div>
      </button>
      <button
        className="font-bold text-lg bg-black rounded-lg relative w-24 h-10 cursor-pointer disabled:cursor-not-allowed"
        onClick={undo}
      >
        <div className="bg-[#C9F9FC] rounded-lg border-4 border-black absolute w-24 h-10 -top-0.5 left-0.5 flex items-center justify-center ">
          UNDO
        </div>
      </button>
    </div>
  );
};

export default GameControls;
