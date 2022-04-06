import { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
// import { GAME_STATE } from "../models/game-states";
import { COLORS } from "../models/colors";
import { GAME_PIECE } from "../models/game-pieces";

import GamePiece from "./GamePiece";

import Lizard from "../assets/images/icon-lizard.svg";
import Spock from "../assets/images/icon-spock.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Paper from "../assets/images/icon-paper.svg";
import Rock from "../assets/images/icon-rock.svg";
interface PieceAttributes {
  name: GAME_PIECE;
  className: string;
  color: COLORS;
  iconUrl: string;
}
const pieceAttributes: PieceAttributes[] = [
  {
    name: GAME_PIECE.SCISSORS,
    className: "left-[50%] top-[-23%] -translate-x-1/2",
    color: COLORS.YELLOW,
    iconUrl: Scissors,
  },
  {
    name: GAME_PIECE.SPOCK,
    className: "left-0 top-[12%] translate-x-[-60%] md:top-[14%]",
    color: COLORS.CYAN,
    iconUrl: Spock,
  },
  {
    name: GAME_PIECE.PAPER,
    className: "right-0 top-[12%] translate-x-[60%] md:top-[14%]",
    color: COLORS.BLUE,
    iconUrl: Paper,
  },
  {
    name: GAME_PIECE.LIZARD,
    className: "left-[-6%] bottom-[-16%]",
    color: COLORS.VIOLET,
    iconUrl: Lizard,
  },
  {
    name: GAME_PIECE.ROCK,
    className: "right-[-6%] bottom-[-16%]",
    color: COLORS.RED,
    iconUrl: Rock,
  },
];

const GameArena = () => {
  const game = useContext(GameContext);
  return (
    <div className="relative bg-pentagon bg-center bg-cover bg-no-repeat h-[12.88rem] sm:h-[15rem] md:h-[19.13rem] aspect-square mx-auto mt-[8.5rem] short-only:mt-[4.25rem]">
      {/* SCISSORS */}
      {pieceAttributes.map(({ iconUrl, name, className, ...attrs }) => (
        <GamePiece key={name} className={`absolute ${className}`} {...attrs}>
          <img draggable="false" src={iconUrl} alt={name} />
        </GamePiece>
      ))}
    </div>
  );
};

export default GameArena;
