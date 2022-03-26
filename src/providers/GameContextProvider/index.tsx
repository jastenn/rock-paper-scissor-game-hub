import { createContext, Dispatch, FC, useReducer } from "react";
import { ACTIONS } from "./actions";

import gameReducer, { Game, initialReducerState } from "./reducer";

export const GameContext = createContext<{
  state: Game;
  dispatch: Dispatch<ACTIONS>;
}>({
  state: initialReducerState,
  dispatch: () => {},
});

const GameContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialReducerState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
