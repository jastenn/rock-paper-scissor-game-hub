import { FC, useContext } from "react";
import { GameContext } from "../context/GameContextProvider";

import Logo from "../assets/images/logo-bonus.svg";

import GameHeaderScore from "./GameHeaderScore";

interface GameHeaderProps {
  className?: string;
}
const GameHeader: FC<GameHeaderProps> = ({ className = "" }) => {
  const { state } = useContext(GameContext);
  return (
    <header
      className={`${className} flex items-center justify-between p-3 md:p-4 ring-[3px] ring-dark-gray rounded`}
    >
      <img
        className="h-14 sm:h-20 md:h-24"
        src={Logo}
        alt="Rock Paper Scissor Lizard Spock"
      />
      <GameHeaderScore value={state.score} />
    </header>
  );
};

export default GameHeader;
