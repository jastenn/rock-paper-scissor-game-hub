import { Reducer } from "react";
import { GAME_PIECE } from "../../models/game-pieces";
import { GAME_STATE } from "../../models/game-states";

import { ACTIONS, ACTION_TYPE } from "./actions";

export interface Game {
  state: GAME_STATE;
  piece: GAME_PIECE | null;
  score: number;
}

export const initialReducerState = {
  state: GAME_STATE.PICKING,
  score: 0,
  piece: null,
};

const gameReducer: Reducer<Game, ACTIONS> = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.PICKED:
      return {
        ...state,
        state: GAME_STATE.PICKED,
        piece: action.payload.piece,
      };

    case ACTION_TYPE.WON:
      return {
        ...state,
        state: GAME_STATE.WON,
        score: state.score + 1,
      };

    case ACTION_TYPE.LOSE:
      return {
        ...state,
        state: GAME_STATE.LOSE,
        score: state.score - 1,
      };

    case ACTION_TYPE.PLAY_AGAIN:
      return {
        ...state,
        state: GAME_STATE.PICKING,
        piece: null,
      };

    default:
      return state;
  }
};

export default gameReducer;
