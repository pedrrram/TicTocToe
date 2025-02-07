import { useMemo } from "react";
import { makeMove, undo, redo, reset, jumpToMove } from "../store/game.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { WINNING_PATTERNS } from "../utils/utils";
import { Cell, Player } from "../types";

export const useTicTacToe = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.game.history);
  const currentMoveIndex = useAppSelector(
    (state) => state.game.currentMoveIndex
  );

  const currentPlayer = useMemo<Player>(
    () => (currentMoveIndex % 2 === 0 ? "X" : "O"),
    [currentMoveIndex]
  );

  const board = useMemo<Cell[]>(() => {
    const board = Array(9).fill(null);
    history.slice(0, currentMoveIndex).forEach((move) => {
      board[move.position] = move.player;
    });
    return board;
  }, [history, currentMoveIndex]);

  const winner = useMemo(() => {
    for (const [a, b, c] of WINNING_PATTERNS) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }, [board]);

  const isDraw = useMemo(
    () => !winner && currentMoveIndex === 9,
    [winner, currentMoveIndex]
  );

  return {
    board,
    history,
    currentPlayer,
    currentMoveIndex,
    winner,
    isDraw,
    handleMove: (position: number) => {
      if (!winner && !isDraw && !board[position]) {
        dispatch(makeMove(position));
      }
    },
    undo: () => dispatch(undo()),
    redo: () => dispatch(redo()),
    reset: () => dispatch(reset()),
    jumpToMove: (index: number) => dispatch(jumpToMove(index)),
  };
};
