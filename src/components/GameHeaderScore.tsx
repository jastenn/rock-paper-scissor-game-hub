import React, { FC } from "react";

interface GameHeaderScoreProps {
  value: number;
}

const GameHeaderScore: FC<GameHeaderScoreProps> = ({ value }) => {
  return (
    <div
      className="bg-white self-stretch px-4 py-2 sm:px-6 sm:py-2 md:px-9 text-center text-dark-blue rounded"
      aria-live="polite"
    >
      <div>
        <div className="text-xs sm:text-sm md:text-base tracking-[.13em] uppercase text-[hsl(229,64%,46%)]">
          Score
        </div>
        <div className="font-bold text-4.5 leading-[1] sm:text-[3.25rem] md:text-[4rem]">
          {value.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </div>
      </div>
    </div>
  );
};

export default GameHeaderScore;
