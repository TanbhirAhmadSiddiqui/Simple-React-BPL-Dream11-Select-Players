import React, { useState } from "react";

const Player = ({
  player,
  setAvailableBalance,
  availableBalance,
  handlePurchasePlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (player) => {
    if (availableBalance < player.playerPrice) {
      alert("Not Enough Coins");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - player.playerPrice);
    handlePurchasePlayer(player);
  };
  return (
    <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={player.playerImg}
        alt={player.playerName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">{player.playerName}</h2>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Country:</span> {player.country}
        </p>

        <p className="text-sm">
          <span className="font-semibold">Role:</span> {player.role}
        </p>

        <p className="text-sm">
          <span className="font-semibold">Batting:</span> {player.battingStyle}
        </p>

        {player.bowlingStyle && (
          <p className="text-sm">
            <span className="font-semibold">Bowling:</span>{" "}
            {player.bowlingStyle}
          </p>
        )}

        <div className="flex justify-between items-center pt-2">
          <span className="text-yellow-500 font-bold">⭐ {player.rating}</span>
          <span className="text-green-600 font-semibold">
            ${player.playerPrice}
          </span>
        </div>
        <button
          disabled={isSelected}
          onClick={() => {
            handleSelected(player);
          }}
          className="btn font-bold text-lg"
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
