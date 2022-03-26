import { useState } from "react";
import Button from "./components/Button";
import GameArena from "./components/GameArena";
import GameHeader from "./components/GameHeader";
import GameRulesModal from "./components/GameRulesModal";
import GameContextProvider from "./context/GameContextProvider";

function App() {
  const [isRulesActive, setIsRulesActive] = useState(false);

  const activateRulesActivate = () => {
    setIsRulesActive(true);
  };
  return (
    <GameContextProvider>
      <div className="App font-sans font-semibold bg-main min-h-screen text-white">
        <div className="w-[84%] mx-auto pt-5 max-w-[43.88rem]">
          <GameHeader />
          <GameArena />
          <Button
            className="absolute bottom-7 left-1/2 -translate-x-1/2 font-semibold md:left-[unset] md:right-10 md:translate-x-0"
            variant="outline"
            onClick={activateRulesActivate}
          >
            Rules
          </Button>
        </div>
        <GameRulesModal
          onClose={() => setIsRulesActive(false)}
          open={isRulesActive}
        />
      </div>
    </GameContextProvider>
  );
}

export default App;
