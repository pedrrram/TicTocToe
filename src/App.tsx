import GameBoard from "./components/GameBoard";
import GameControls from "./components/GameControls";
import Sidebar from "./components/Sidebar";

const TicTacToe = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center p-10 bg-[#23ACF9]">
      <div className="max-w-screen-lg flex lg:flex-row flex-col justify-between items-center lg:items-start w-full gap-5">
        <div className="flex flex-col items-center">
          <GameBoard />
          <GameControls />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default TicTacToe;
