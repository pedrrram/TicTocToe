export type Player = "X" | "O";
export type Cell = "X" | "O" | null;
export type Move = { player: Player; position: number };

export type TicTacToeState = {
  history: Move[];
  currentMoveIndex: number;
};
