import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import { Suspense, useState } from "react";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

// Load Players
const loadPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = loadPlayers();

function App() {
  // This state for Available Balance to change on Navbar coin
  const [availableBalance, setAvailableBalance] = useState(300000);
  // This is State for purchasePlayer
  const [purchasePlayer, setPurchasePlayer] = useState([]);
  // Even handler to handle purchase to Selected player
  const handlePurchasePlayer = (player) => {
    const newPurchasePlayer = [...purchasePlayer, player];
    setPurchasePlayer(newPurchasePlayer);
  };
  // Even handler to Delete player to Selected players
  const handleRemovedPurchasePlayer = (removedPlayer) => {
    setPurchasePlayer(
      purchasePlayer.filter((remove) => remove.id !== removedPlayer.id),
    );
    console.log(removedPlayer);
    setAvailableBalance(availableBalance + removedPlayer.playerPrice);
  };
  // This state for Available Players and Select Players
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-300 mx-auto flex justify-between items-center py-5">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Players(${purchasePlayer.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`${toggle === true ? "bg-[#4b530b]" : ""} border py-3 px-4 border-gray-400 border-r-0 rounded-l-2xl`}
          >
            Available{" "}
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${toggle === false ? "bg-[#4b530b]" : ""} border py-3 px-4 border-gray-400 border-l-0 rounded-r-2xl`}
          >
            Selected<span>({purchasePlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <AvailablePlayers
            handlePurchasePlayer={handlePurchasePlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          handleRemovedPurchasePlayer={handleRemovedPurchasePlayer}
          purchasePlayer={purchasePlayer}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App;
