import React from "react";

const SelectedPlayerCard = ({ playerCard, handleRemovedPurchasePlayer }) => {
  const { playerImg, playerName, battingStyle } = playerCard;
  return (
    <div className="flex items-center justify-between border my-2 rounded p-2">
      <div className="flex items-center gap-2">
        <div className="w-20">
          <img src={playerImg} alt="" />
        </div>
        <div className="ps-2">
          <h1 className="font-bold text-xl">{playerName}</h1>
          <p>{battingStyle}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemovedPurchasePlayer(playerCard)}
          className="btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
