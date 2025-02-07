import { Move, TicTacToeState } from "../types";

export const WINNING_PATTERNS = [
  [0, 1, 2], // Rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [2, 4, 6],
];

const parseMoves = (movesParam: string | null): Move[] => {
  if (!movesParam) return [];
  const moves: Move[] = [];
  // O1X2O3X4
  for (let i = 0; i < movesParam.length; i += 2) {
    const player = movesParam[i];
    const position = parseInt(movesParam[i + 1], 10);
    if ((player === "X" || player === "O") && position >= 0 && position <= 8) {
      moves.push({ player, position } as Move);
    }
  }
  return moves;
};

export const loadInitialState = () => {
  // query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const movesParam = urlParams.get("moves");
  const currentMoveParam = urlParams.get("cm");
  if (movesParam !== null && currentMoveParam !== null) {
    return {
      history: parseMoves(movesParam),
      currentMoveIndex: Math.min(
        Math.max(parseInt(currentMoveParam, 10) || 0, 0),
        movesParam.length / 2
      ),
    };
  }

  // localStorage
  const storedState = localStorage.getItem("tic-tac-toe-state");
  if (storedState) {
    try {
      const { history = [], currentMoveIndex = 0 } = JSON.parse(storedState);
      return { history, currentMoveIndex };
    } catch (e) {
      console.error("Error parsing localStorage:", e);
    }
  }

  return { history: [], currentMoveIndex: 0 };
};

export const saveState = (state: TicTacToeState) => {
  const movesString = state.history
    .map((move) => `${move.player}${move.position}`)
    .join("");
  const urlParams = new URLSearchParams();
  urlParams.set("moves", movesString);
  urlParams.set("cm", state.currentMoveIndex.toString());
  window.history.replaceState(null, "", `?${urlParams.toString()}`);
  localStorage.setItem("tic-tac-toe-state", JSON.stringify(state));
};
