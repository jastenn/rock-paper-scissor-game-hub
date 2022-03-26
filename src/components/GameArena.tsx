import GamePiece from "./GamePiece";
import Lizard from "../assets/images/icon-lizard.svg";
import Spock from "../assets/images/icon-spock.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Paper from "../assets/images/icon-paper.svg";
import Rock from "../assets/images/icon-rock.svg";
import { COLORS } from "../models/colors";

const GameArena = () => {
  return (
    <div className="relative bg-pentagon bg-center bg-cover bg-no-repeat h-[12.88rem] sm:h-[15rem] md:h-[19.13rem] aspect-square mx-auto mt-[8.5rem]">
      {/* SCISSORS */}
      <GamePiece
        className="absolute left-[50%] top-[-23%] -translate-x-1/2"
        color={COLORS.YELLOW}
      >
        <img src={Scissors} alt="Scissors" />
      </GamePiece>

      {/* SPOCK */}
      <GamePiece
        className="absolute left-0 top-[12%] translate-x-[-60%] md:top-[14%]"
        color={COLORS.CYAN}
      >
        <img src={Spock} alt="Spock" />
      </GamePiece>

      {/* PAPER */}
      <GamePiece
        className="absolute right-0 top-[12%] translate-x-[60%] md:top-[14%]"
        color={COLORS.BLUE}
      >
        <img src={Paper} alt="Paper" />
      </GamePiece>

      {/* LIZARD */}
      <GamePiece
        className="absolute left-[-6%] bottom-[-16%]"
        color={COLORS.VIOLET}
      >
        <img src={Lizard} alt="Lizard" />
      </GamePiece>

      {/* ROCK */}
      <GamePiece
        className="absolute right-[-6%] bottom-[-16%]"
        color={COLORS.RED}
      >
        <img src={Rock} alt="Rock" />
      </GamePiece>
    </div>
  );
};

export default GameArena;
