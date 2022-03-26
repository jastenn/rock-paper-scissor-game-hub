import React, { FC } from "react";
import { COLORS } from "../models/colors";

interface GamePieceProps {
  color: COLORS;
}

const gradients = {
  [COLORS.YELLOW]:
    "from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] shadow-[hsl(31,81%,43%)]",
  [COLORS.BLUE]:
    "from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] shadow-[hsl(230,61%,46%)]",
  [COLORS.RED]:
    "from-[hsl(349,71%,52%)] to-[hsl(349,71%,56%)] shadow-[hsl(348,78%,37%)]",
  [COLORS.VIOLET]:
    "from-[hsl(261,73%,60%)] to-[hsl(261,72%,63%)] shadow-[hsl(260,52%,45%)]",
  [COLORS.CYAN]:
    "from-[hsl(189,59%,53%)] to-[hsl(189,58%,57%)] shadow-[hsl(195,54%,45%)]",
};

const GamePiece: FC<GamePieceProps> = ({ children, color }) => {
  return (
    <button
      type="button"
      className={`p-3 cursor-default md:cursor-pointer rounded-full bg-gradient-to-t ${gradients[color]} shadow-extrude`}
    >
      <span className="block bg-white p-4.5 h-[4.5rem] aspect-square rounded-full shadow-inset-solid">
        {children}
      </span>
    </button>
  );
};

export default GamePiece;
