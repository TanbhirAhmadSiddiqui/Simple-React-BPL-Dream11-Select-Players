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

function App() {
  const [toggle, setToggle] = useState(true);
  const playersPromise = loadPlayers();
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-300 mx-auto flex justify-between items-center py-5">
        <h1 className="font-bold text-2xl">Available Players</h1>
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
            Selected<span>(0)</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
