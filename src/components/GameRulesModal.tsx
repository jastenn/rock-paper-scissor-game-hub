import React, { FC } from "react";
import { Dialog } from "@headlessui/react";
import GameRulesImage from "../assets/images/image-rules-bonus.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg";

interface GameRulesModalProps {
  open: boolean;
  onClose: () => void;
}
const GameRulesModal: FC<GameRulesModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={() => onClose()}>
      <Dialog.Overlay className="hidden md:block md:fixed md:inset-0 md:bg-black/25" />

      <div className="absolute bg-white text-dark-blue inset-0 md:inset-y-[unset] md:w-[84%] md:max-w-[25rem] md:rounded-xl md:left-1/2 md:-translate-x-1/2 md:top-32">
        <div className="text-center  w-[84%] max-w-[21rem] mx-auto mt-[5.75rem] short-only:mt-7 md:w-full md:max-w-none md:mt-0 md:p-8">
          <div className="md:flex md:items-center md:justify-between mb-12 md:mb-6 ">
            <Dialog.Title className="uppercase font-bold text-[2rem] text-center md:leading-[1] md:text-left">
              RULES
            </Dialog.Title>
            <button
              onClick={() => {
                onClose();
              }}
              type="button"
              className="absolute bottom-7 left-1/2 -translate-x-1/2 md:static md:-translate-x-0"
            >
              <span className="sr-only">Close</span>
              <IconClose />
            </button>
          </div>

          <img className="w-full" src={GameRulesImage} alt="" />

          <Dialog.Description className="sr-only">
            Scissors cuts paper, paper covers rock, rock crushes lizard, lizard
            poisons Spock, Spock smashes scissors, scissors decapitates lizard,
            lizard eats paper, paper disproves Spock, Spock vaporizes rock, and
            as it always has, rock crushes scissors.
          </Dialog.Description>
        </div>
      </div>
    </Dialog>
  );
};

export default GameRulesModal;
