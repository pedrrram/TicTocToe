import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadInitialState, saveState } from "../utils/utils";
import { TicTacToeState } from "../types";

const initialState: TicTacToeState = loadInitialState();

const gameSlice = createSlice({
  name: "ticTacToe",
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      if (state.currentMoveIndex < state.history.length) {
        state.history = state.history.slice(0, state.currentMoveIndex);
      }
      state.history.push({
        player: state.currentMoveIndex % 2 === 0 ? "X" : "O",
        position: action.payload,
      });
      state.currentMoveIndex++;
      saveState(state);
    },
    undo: (state) => {
      state.currentMoveIndex = Math.max(state.currentMoveIndex - 1, 0);
      saveState(state);
    },
    redo: (state) => {
      state.currentMoveIndex = Math.min(
        state.currentMoveIndex + 1,
        state.history.length
      );
      saveState(state);
    },
    reset: (state) => {
      state.history = [];
      state.currentMoveIndex = 0;
      saveState(state);
    },
    jumpToMove: (state, action: PayloadAction<number>) => {
      state.currentMoveIndex = action.payload + 1;
      saveState(state);
    },
  },
});

export const { makeMove, undo, redo, reset, jumpToMove } = gameSlice.actions;
export default gameSlice.reducer;
