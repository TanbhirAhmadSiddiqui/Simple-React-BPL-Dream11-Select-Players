import React, { use } from "react";
import Player from "../Player/Player";
const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  handlePurchasePlayer,
}) => {
  const players = use(playersPromise);
  return (
    <div className="max-w-300 mx-auto">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
      >
        {players.map((player) => (
          <Player
            handlePurchasePlayer={handlePurchasePlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            key={player.id}
            player={player}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
