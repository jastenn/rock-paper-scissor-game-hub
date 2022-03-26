import { GAME_PIECE } from "../../models/game-pieces";

export enum ACTION_TYPE {
  "PICKED",
  "WON",
  "LOSE",
  "PLAY_AGAIN",
}

type ACTION_PICKED = {
  type: ACTION_TYPE.PICKED;
  payload: {
    piece: GAME_PIECE;
  };
};

type ACTION_WON = {
  type: ACTION_TYPE.WON;
};

type ACTION_LOSE = {
  type: ACTION_TYPE.LOSE;
};

type ACTION_PLAY_AGAIN = {
  type: ACTION_TYPE.PLAY_AGAIN;
};

export type ACTIONS =
  | ACTION_LOSE
  | ACTION_WON
  | ACTION_PLAY_AGAIN
  | ACTION_PICKED;
