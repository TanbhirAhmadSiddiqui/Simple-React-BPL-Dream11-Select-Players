import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ purchasePlayer, handleRemovedPurchasePlayer }) => {
  return (
    <div className="max-w-300 mx-auto">
      {purchasePlayer.map((playerCard) => (
        <SelectedPlayerCard
          handleRemovedPurchasePlayer={handleRemovedPurchasePlayer}
          key={playerCard.id}
          playerCard={playerCard}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
