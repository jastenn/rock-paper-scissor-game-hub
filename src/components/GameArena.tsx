import { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import { GAME_STATE } from "../models/game-states";
import GameArenaPicking from "./GameArenaPicking";

const GameArena = () => {
  const game = useContext(GameContext);
  return (
    <div className="relative bg-pentagon bg-center bg-cover bg-no-repeat h-[12.88rem] sm:h-[15rem] md:h-[19.13rem] aspect-square mx-auto mt-[8.5rem] short-only:mt-[4.25rem]">
      {(() => {
        switch (game.state.state) {
          case GAME_STATE.PICKED:
            return <div>Picked</div>;

          case GAME_STATE.WON:
            return <div>WON</div>;

          case GAME_STATE.LOSE:
            return <div>LOSE</div>;

          default:
            return <GameArenaPicking />;
        }
      })()}
    </div>
  );
};

export default GameArena;
