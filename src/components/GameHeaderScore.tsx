import React, { FC } from "react";

interface GameHeaderScoreProps {
  value: number;
}

const GameHeaderScore: FC<GameHeaderScoreProps> = ({ value }) => {
  return (
    <div aria-live="polite">
      <div>Score</div>
      <div>{value.toLocaleString("en-US", { minimumIntegerDigits: 2 })}</div>
    </div>
  );
};

export default GameHeaderScore;
