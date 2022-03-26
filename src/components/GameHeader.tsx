import { useContext, useEffect } from "react";
import { GameContext } from "../providers/GameContextProvider";
import GameHeaderScore from "./GameHeaderScore";

const GameHeader = () => {
  const { state, dispatch } = useContext(GameContext);
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <header>
      <GameHeaderScore value={1} />
    </header>
  );
};

export default GameHeader;
