import GameArena from "./components/GameArena";
import GameHeader from "./components/GameHeader";
import GameContextProvider from "./providers/GameContextProvider";

function App() {
  return (
    <GameContextProvider>
      <div className="App font-sans font-semibold bg-main min-h-screen text-white">
        <div className="w-[84%] mx-auto pt-5 max-w-[43.88rem]">
          <GameHeader />
          <GameArena />
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
